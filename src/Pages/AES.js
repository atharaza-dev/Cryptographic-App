import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

function AES() {
    const [key, setKey] = useState('');
    const [plaintext, setPlaintext] = useState('');
    const [output, setOutput] = useState('');

    const encrypt = () => {
        const encryptedText = CryptoJS.AES.encrypt(plaintext, key).toString();
        setOutput(encryptedText);
    };

    const decrypt = () => {
        const decryptedText = CryptoJS.AES.decrypt(output, key).toString(CryptoJS.enc.Utf8);
        setOutput(decryptedText);
    };

    return (
        <>
            <div className='py-12'>
                <div className='p-6 mx-32 font'>
                    <h1 className="text-4xl font-semibold mb-4">AES Encryption/Decryption</h1>
                    <div className="relative mb-4">
                        <label htmlFor="key" className="leading-7 text-sm text-gray-600">Enter Key</label>
                        <input
                            type="text"
                            id="key"
                            name="key"
                            className="w-full bg-slate-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            placeholder="Enter encryption/decryption key..."
                            value={key}
                            onChange={e => setKey(e.target.value)}
                        />
                    </div>

                    <div className="relative mb-4">
                        <label htmlFor="plaintext" className="leading-7 text-sm text-gray-600">Enter Text</label>
                        <textarea
                            id="plaintext"
                            name="plaintext"
                            className="w-full bg-slate-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            placeholder="Enter text to encrypt/decrypt..."
                            value={plaintext}
                            onChange={e => setPlaintext(e.target.value)}
                        />
                    </div>

                    <div className="flex justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={encrypt}
                        >
                            Encrypt
                        </button>
                        <button
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={decrypt}
                        >
                            Decrypt
                        </button>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="output" className="block mb-2">Output:</label>
                        <textarea
                            id="output"
                            name="output"
                            className="w-full bg-slate-100 border rounded-md py-2 px-3 mb-4 resize-none h-32"
                            placeholder="Encrypted/decrypted text will appear here..."
                            value={output}
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AES;
