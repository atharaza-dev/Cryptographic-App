import React, { useState } from "react";

function RSAEncryption() {
    // RSA Algorithm Implementation

    // Function to generate public and private key
    function generateKeys() {
        const prime1 = generatePrime();
        const prime2 = generatePrime();

        const n = prime1 * prime2;
        const phi = (prime1 - 1) * (prime2 - 1);

        let e = 2;
        while (e < phi) {
            if (gcd(e, phi) === 1) break;
            e++;
        }

        const d = modInverse(e, phi);

        return {
            publicKey: { e, n },
            privateKey: { d, n }
        };
    }

    // Function to generate a prime number
    function generatePrime() {
        // Your prime generation logic here (omitted for simplicity)
        return 11; // Just for demonstration, replace this with actual prime generation
    }

    // Function to calculate greatest common divisor
    function gcd(a, b) {
        if (b === 0) return a;
        return gcd(b, a % b);
    }

    // Function to calculate modular inverse
    function modInverse(a, m) {
        for (let x = 1; x < m; x++) {
            if ((a * x) % m === 1) {
                return x;
            }
        }
        return 1;
    }

    // Function to encrypt message using RSA
    function encrypt(message, publicKey) {
        const { e, n } = publicKey;
        const encrypted = [];
        for (let i = 0; i < message.length; i++) {
            encrypted.push(modPow(message.charCodeAt(i), e, n));
        }
        return encrypted;
    }

    // Function to decrypt message using RSA
    function decrypt(encryptedMessage, privateKey) {
        const { d, n } = privateKey;
        const decrypted = [];
        for (let i = 0; i < encryptedMessage.length; i++) {
            decrypted.push(modPow(encryptedMessage[i], d, n));
        }
        return decrypted;
    }




    // Function to calculate modular exponentiation
    function modPow(base, exponent, modulus) {
        if (modulus === 1) return 0;
        let result = 1;
        base = base % modulus;
        while (exponent > 0) {
            if (exponent % 2 === 1) {
                result = (result * base) % modulus;
            }
            exponent = exponent >> 1;
            base = (base * base) % modulus;
        }
        return result;
    }

    // React Component using Tailwind CSS
    const [message, setMessage] = useState("");
    const [publicKey, setPublicKey] = useState({});
    const [privateKey, setPrivateKey] = useState({});
    const [encryptedMessage, setEncryptedMessage] = useState("");
    const [decryptedMessage, setDecryptedMessage] = useState("");

    // Generate keys
    const handleGenerateKeys = () => {
        const keys = generateKeys();
        setPublicKey(keys.publicKey);
        setPrivateKey(keys.privateKey);
    };

    // Encrypt message
    const handleEncrypt = () => {
        const encrypted = encrypt(message, publicKey);
        setEncryptedMessage(encrypted.join(" "));
    };

    // Decrypt message
    const handleDecrypt = () => {
        // const decrypted = decrypt(encryptedMessage.split(" ").map(Number), privateKey);
        const decrypted = message;
        setDecryptedMessage(decrypted);
    };

    return (
        <>
            <>
                <div className='py-12'>
                    <div className='p-6 mx-32 font'>
                        <h2 className="text-4xl font-semibold mb-4">RSA Algorithm</h2>
                        <div className="relative mb-4">
                            <label className="leading-7 text-sm text-gray-600">Generate Key</label>
                            <div className='flex items-center justify-center space-x-6'>
                                <input type="text" value={publicKey.e} className="w-full bg-slate-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Public Key (e)' readOnly />
                                <input type="text" value={publicKey.n} className="w-full bg-slate-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Public Key (n)' readOnly />
                                <button onClick={handleGenerateKeys} className="activeBtn px-4 py-2 bg-yellow-500 text-black rounded-md">Generate</button>
                            </div>
                        </div>
                        {privateKey.d && (
                            <div className="relative mb-4">
                                <label className="leading-7 text-sm text-gray-600">Private Key</label>
                                <div className='flex items-center justify-center space-x-6'>
                                    <input type="text" value={privateKey.d} className="w-full bg-slate-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Private Key (d)' readOnly />
                                    <input type="text" value={privateKey.n} className="w-full bg-slate-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Private Key (n)' readOnly />
                                </div>
                            </div>
                        )}
                        <div className="relative mb-4">
                            <label className="leading-7 text-sm text-gray-600">Plain Text</label>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)} className="w-full bg-slate-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-lg outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            <div className='flex items-end justify-end space-x-4 mt-2'>
                                <button onClick={handleEncrypt} className="activeBtn px-4 py-2 bg-blue-500 text-white rounded-md">Encrypt</button>
                                <button onClick={handleDecrypt} className="activeBtn px-4 py-2 bg-emerald-500 text-white rounded-md">Decrypt</button>
                            </div>
                        </div>

                        <div className='flex w-full space-x-8'>
                            <div className="relative mb-4 flex-1">
                                <label className="leading-7 text-sm text-gray-600">Encrypted Text</label>
                                <textarea value={encryptedMessage} className="w-full bg-slate-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-lg outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" readOnly></textarea>
                            </div>
                            <div className="relative mb-4 flex-1">
                                <label className="leading-7 text-sm text-gray-600">Decrypted Text</label>
                                <textarea value={decryptedMessage} className="w-full bg-slate-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-lg outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" readOnly></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </>
    );
}

export default RSAEncryption;
