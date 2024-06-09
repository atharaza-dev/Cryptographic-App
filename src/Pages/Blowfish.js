import React, { useState } from 'react';
import { Blowfish } from 'javascript-blowfish';
import 'tailwindcss/tailwind.css';

function BlowfishComponent() {
    const [message, setMessage] = useState('');
    const [key, setKey] = useState('');
    const [encryptedMessage, setEncryptedMessage] = useState('');
    const [decryptedMessage, setDecryptedMessage] = useState('');

    const encrypt = () => {
        if (message && key) {
            const bf = new Blowfish(key);
            const encrypted = bf.encrypt(message);
            setEncryptedMessage(encrypted);
        } else {
            alert("Please enter a message and a key!");
        }
    };

    const decrypt = () => {
        if (encryptedMessage && key) {
            const bf = new Blowfish(key);
            const decrypted = bf.decrypt(encryptedMessage);
            setDecryptedMessage(decrypted);
        } else {
            alert("Please enter an encrypted message and a key!");
        }
    };

    return (
        <>
            <div className='py-12'>
                <div className='p-6 mx-32 font'>
                    <h2 className="text-4xl font-semibold mb-4">BlowFish Algorithm</h2>
                    <div class="relative mb-4">
                        <label class="leading-7 text-sm text-gray-600">Plain Text</label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)} class="w-full bg-slate-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-lg outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <div class="relative mb-4">
                        <label class="leading-7 text-sm text-gray-600">Encryption / Decryption Key</label>
                        <div className='flex items-center justify-center space-x-6'>
                            <input
                                value={key}
                                onChange={(e) => setKey(e.target.value)} type="text" class="w-full bg-slate-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            <button onClick={encrypt} className="activeBtn px-4 py-2 bg-blue-500 text-white rounded-md">Encrypt</button>
                            <button onClick={decrypt} className="activeBtn px-4 py-2 bg-emerald-500 text-white rounded-md">Decrypt</button>
                        </div>
                    </div>

                    <div className='flex w-full space-x-8'>
                        <div class="relative mb-4 flex-1">
                            <label class="leading-7 text-sm text-gray-600">Cipher Text</label>
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
}

export default BlowfishComponent;
