import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

const DES = () => {
    const [plainText, setPlainText] = useState('');
    const [key, setKey] = useState('');
    const [cipherText, setCipherText] = useState('');
    const [decryptedText, setDecryptedText] = useState('');

    const encryptText = () => {
        const encrypted = CryptoJS.DES.encrypt(plainText, key).toString();
        setCipherText(encrypted);
    };

    const decryptText = () => {
        const decrypted = CryptoJS.DES.decrypt(cipherText, key).toString(CryptoJS.enc.Utf8);
        setDecryptedText(decrypted);
    };

    return (
        <>
            <div className='py-12'>
                <div className='p-6 mx-32 font'>
                    <h2 className="text-4xl font-semibold mb-4">Data Encryption Standard - DES</h2>
                    <div class="relative mb-4">
                        <label class="leading-7 text-sm text-gray-600">Plain Text</label>
                        <textarea value={plainText} onChange={(e) => setPlainText(e.target.value)} class="w-full bg-slate-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-lg outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <div class="relative mb-4">
                        <label class="leading-7 text-sm text-gray-600">Key</label>
                        <div className='flex items-center justify-center space-x-6'>
                            <input value={key} onChange={(e) => setKey(e.target.value)} type="text" class="w-full bg-slate-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            <button onClick={encryptText} className="activeBtn px-4 py-2 bg-blue-500 text-white rounded-md">Encrypt</button>
                            <button onClick={decryptText} className="activeBtn px-4 py-2 bg-emerald-500 text-white rounded-md">Decrypt</button>
                        </div>
                    </div>
                    <div className='flex w-full space-x-8'>
                        <div class="relative mb-4 flex-1">
                            <label class="leading-7 text-sm text-gray-600">Cipher Text</label>
                            <textarea value={cipherText} class="w-full bg-slate-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-lg outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" readOnly></textarea>
                        </div>
                        <div class="relative mb-4 flex-1">
                            <label class="leading-7 text-sm text-gray-600">Decrypted Text</label>
                            <textarea value={decryptedText} class="w-full bg-slate-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-lg outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" readOnly></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DES;
