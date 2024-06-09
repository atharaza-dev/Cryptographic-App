import React, { useState } from 'react';

const DiffieHellmanComponent = () => {
    const [alicePrivateKey, setAlicePrivateKey] = useState('');
    const [bobPrivateKey, setBobPrivateKey] = useState('');
    const [aliceSharedSecret, setAliceSharedSecret] = useState('');
    const [bobSharedSecret, setBobSharedSecret] = useState('');
    const [message, setMessage] = useState('');
    const [encryptedMessage, setEncryptedMessage] = useState('');
    const [decryptedMessage, setDecryptedMessage] = useState('');

    // Generate a random private key (a large prime number)
    const generatePrivateKey = () => {
        const prime = 23; // Example prime number for demonstration
        return Math.floor(Math.random() * (prime - 2)) + 2; // Random number between 2 and prime-1
    };

    // Calculate public key (g^privateKey % prime)
    const calculatePublicKey = (privateKey, prime, g) => {
        return Math.pow(g, privateKey) % prime;
    };

    // Calculate shared secret (publicKey^privateKey % prime)
    const calculateSharedSecret = (privateKey, publicKey, prime) => {
        return Math.pow(publicKey, privateKey) % prime;
    };

    // Generate keys for Alice and Bob
    const generateKeys = () => {
        const prime = 23; // Example prime number for demonstration
        const g = 5; // Example generator for demonstration
        const alicePrivateKey = generatePrivateKey();
        const bobPrivateKey = generatePrivateKey();
        const alicePublicKey = calculatePublicKey(alicePrivateKey, prime, g);
        const bobPublicKey = calculatePublicKey(bobPrivateKey, prime, g);
        setAlicePrivateKey(alicePrivateKey);
        setBobPrivateKey(bobPrivateKey);
        return { alicePrivateKey, bobPrivateKey, alicePublicKey, bobPublicKey, prime };
    };

    // Reversible encryption function
    const encryptMessage = (message) => {
        return message.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
    };

    // Reversible decryption function
    const decryptMessage = (encryptedMessage) => {
        return encryptedMessage.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join('');
    };

    // Generate shared secret for Alice and Bob
    const generateSharedSecret = () => {
        const { alicePrivateKey, bobPrivateKey, alicePublicKey, bobPublicKey, prime } = generateKeys();
        const aliceSharedSecret = calculateSharedSecret(alicePrivateKey, bobPublicKey, prime);
        const bobSharedSecret = calculateSharedSecret(bobPrivateKey, alicePublicKey, prime);
        setAliceSharedSecret(aliceSharedSecret);
        setBobSharedSecret(bobSharedSecret);
    };

    const handleEncrypt = () => {
        const encrypted = encryptMessage(message);
        setEncryptedMessage(encrypted);
    };

    const handleDecrypt = () => {
        const decrypted = decryptMessage(encryptedMessage);
        setDecryptedMessage(decrypted);
    };

    return (
        <>
            <div className='py-12'>
                <div className='p-6 mx-32 font'>
                    <h2 className="text-4xl font-semibold mb-4">Diffie Hellman Algorithm</h2>
                    <div class="relative mb-4">
                        <label class="leading-7 text-sm text-gray-600">Generate Key</label>
                        <div className='flex items-center justify-center space-x-6'>
                            <input type="text" value={alicePrivateKey} class="w-full bg-slate-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Key A' readOnly />
                            <input type="text" value={bobPrivateKey} class="w-full bg-slate-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Key B' readOnly />
                            <button onClick={generateSharedSecret} className="activeBtn px-4 py-2 bg-yellow-500 text-black rounded-md">Generate</button>
                        </div>
                    </div>
                    <div class="relative mb-4">
                        <label class="leading-7 text-sm text-gray-600">Plain Text</label>
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} class="w-full bg-slate-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-lg outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        <div className='flex items-end justify-end space-x-4 mt-2'>
                            <button onClick={handleEncrypt} className="activeBtn px-4 py-2 bg-blue-500 text-white rounded-md">Encrypt</button>
                            <button onClick={handleDecrypt} className="activeBtn px-4 py-2 bg-emerald-500 text-white rounded-md">Decrypt</button>
                        </div>
                    </div>

                    <div className='flex w-full space-x-8'>
                        <div class="relative mb-4 flex-1">
                            <label class="leading-7 text-sm text-gray-600">Encrypted Text</label>
                            <textarea value={encryptedMessage} class="w-full bg-slate-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-lg outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" readOnly></textarea>
                        </div>
                        <div class="relative mb-4 flex-1">
                            <label class="leading-7 text-sm text-gray-600">Decrypted Text</label>
                            <textarea value={decryptedMessage} class="w-full bg-slate-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-lg outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" readOnly></textarea>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default DiffieHellmanComponent;
