import React, { useState } from 'react';
import md5 from 'md5';

const HashingComponent = () => {
    const [inputValue, setInputValue] = useState('');
    const [hashedValue, setHashedValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleHash = () => {
        const hash = md5(inputValue);
        setHashedValue(hash);
    };

    const handleClear = () => {
        setHashedValue('');
    };

    return (

        <>


            <div className='py-12'>
                <div className='p-6 mx-32 font'>
                    <h2 className="text-4xl font-semibold mb-4">MD5 - Hashing Algorithm</h2>
                    <div class="relative mb-4">
                        <label class="leading-7 text-sm text-gray-600">Plain Text</label>
                        <textarea
                            value={inputValue}
                            onChange={handleInputChange} class="w-full bg-slate-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-lg outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <div class="relative mb-4">
                        <div className='flex items-center justify-end space-x-6'>
                            <button onClick={handleHash} className="activeBtn px-4 py-2 bg-blue-500 text-white rounded-md">Hash the Message</button>
                            <button onClick={handleClear} className="activeBtn px-4 py-2 bg-emerald-500 text-white rounded-md">Clear</button>
                        </div>
                    </div>
                    <div class="relative mb-4">
                        <label class="leading-7 text-sm text-gray-600">Output Text</label>
                        <textarea value={hashedValue} class="w-full bg-slate-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-lg outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" readOnly></textarea>
                    </div>
                </div>
            </div>

        </>
    );
};

export default HashingComponent;
