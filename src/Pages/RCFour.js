// RC4.js
import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

function RC4() {
    const [key, setKey] = useState('');
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');

    const encrypt = () => {
        const encrypted = CryptoJS.RC4.encrypt(inputText, key).toString();
        setOutputText(encrypted);
    };

    const decrypt = () => {
        const decrypted = CryptoJS.RC4.decrypt(outputText, key).toString(CryptoJS.enc.Utf8);
        setOutputText(decrypted);
    };

    return (
        <>
            <div className='py-12'>
                <div className='p-6 mx-32 font'>
                    <h2 className="text-4xl font-semibold mb-4">RC4 Algorithm - Ron's Code</h2>
                    <div class="relative mb-4">
                        <label class="leading-7 text-sm text-gray-600">Plain Text</label>
                        <textarea
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)} class="w-full bg-slate-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-lg outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <div class="relative mb-4">
                        <label class="leading-7 text-sm text-gray-600">Key</label>
                        <div className='flex items-center justify-center space-x-6'>
                            <input
                                value={key}
                                onChange={(e) => setKey(e.target.value)} type="text" class="w-full bg-slate-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            <button onClick={encrypt} className="activeBtn px-4 py-2 bg-blue-500 text-white rounded-md">Encrypt</button>
                            <button onClick={decrypt} className="activeBtn px-4 py-2 bg-emerald-500 text-white rounded-md">Decrypt</button>
                        </div>
                    </div>
                    <div class="relative mb-4">
                        <label class="leading-7 text-sm text-gray-600">Output Text</label>
                        <textarea
                            value={outputText}
                            onChange={(e) => setOutputText(e.target.value)} class="w-full bg-slate-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-lg outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" readOnly></textarea>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RC4;
