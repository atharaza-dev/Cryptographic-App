import React, { useState } from 'react'

function CeaserCipher() {
    const [inputText, setInputText] = useState('');
    const [shift, setShift] = useState(3); // Default shift value
    const [outputText, setOutputText] = useState('');

    // Function to perform Caesar Cipher encryption or decryption
    const caesarCipher = (text, shift) => {
        let result = '';

        for (let i = 0; i < text.length; i++) {
            let charCode = text.charCodeAt(i);

            // unicode for uppercase and unicode for lowercase 
            if (charCode >= 65 && charCode <= 90) {
                result += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
            } else if (charCode >= 97 && charCode <= 122) {
                result += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
            } else {
                result += text[i];
            }
        }

        return result;
    };

    const handleEncrypt = () => {
        const encryptedText = caesarCipher(inputText, shift);
        setOutputText(encryptedText);
    };
    const handleDecrypt = () => {

        const decryptedText = caesarCipher(inputText, 26 - shift);
        setOutputText(decryptedText);
    };

    return (
        <div className='py-12'>
            <div className='p-6 mx-32 font'>
                <h2 className="text-4xl font-semibold mb-4">Caesar Cipher</h2>
                <div class="relative mb-4">
                    <label class="leading-7 text-sm text-gray-600">Plain Text</label>
                    <textarea value={inputText} onChange={(e) => setInputText(e.target.value)} class="w-full bg-slate-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-lg outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                <div class="relative mb-4">
                    <label class="leading-7 text-sm text-gray-600">Shift Rounds</label>
                    <div className='flex items-center justify-center space-x-6'>
                        <input value={shift} onChange={(e) => setShift(parseInt(e.target.value))} type="text" class="w-full bg-slate-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        <button onClick={handleEncrypt} className="activeBtn px-4 py-2 bg-blue-500 text-white rounded-md">Encrypt</button>
                        <button onClick={handleDecrypt} className="activeBtn px-4 py-2 bg-emerald-500 text-white rounded-md">Decrypt</button>
                    </div>
                </div>
                <div class="relative mb-4">
                    <label class="leading-7 text-sm text-gray-600">Output Text</label>
                    <textarea value={outputText} class="w-full bg-slate-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-lg outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" readOnly></textarea>
                </div>
            </div>
        </div>
    )
}

export default CeaserCipher