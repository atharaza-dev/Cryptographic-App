import React, { useState } from 'react'

function PlayFair() {
    const [key, setKey] = useState('');
    const [plaintext, setPlaintext] = useState('');
    const [ciphertext, setCiphertext] = useState('');

    // Function to generate the Playfair matrix
    function generateMatrix(key) {
        const matrix = [];
        let keyWithoutDuplicates = '';
        // Remove duplicate characters from the key
        for (let i = 0; i < key.length; i++) {
            if (!keyWithoutDuplicates.includes(key[i])) {
                keyWithoutDuplicates += key[i];
            }
        }
        const alphabet = 'ABCDEFGHIKLMNOPQRSTUVWXYZ'; // Skip 'J'
        let keyIndex = 0;

        // Fill the matrix with the key
        for (let i = 0; i < 5; i++) {
            matrix[i] = [];
            for (let j = 0; j < 5; j++) {
                if (keyIndex < keyWithoutDuplicates.length) {
                    matrix[i][j] = keyWithoutDuplicates[keyIndex++];
                } else {
                    // Fill the rest of the matrix with the remaining alphabet
                    let char;
                    do {
                        char = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                    } while (matrix.flat().includes(char));
                    matrix[i][j] = char;
                }
            }
        }
        return matrix;
    }

    // Function to encrypt the plaintext
    function encrypt() {
        let matrix = generateMatrix(key.toUpperCase().replace(/J/g, 'I'));
        let plaintextProcessed = plaintext.toUpperCase().replace(/J/g, 'I').replace(/ /g, '');
        let ciphertextResult = '';

        // Adjust plaintext for digraphs and handle repeated characters
        for (let i = 0; i < plaintextProcessed.length; i += 2) {
            let first = plaintextProcessed[i];
            let second = i + 1 < plaintextProcessed.length ? plaintextProcessed[i + 1] : 'X';
            if (first === second) {
                second = 'X';
                i--;
            }
            let encrypted = encryptPair(matrix, first, second);
            ciphertextResult += encrypted;
        }

        setCiphertext(ciphertextResult);
    }

    // Function to decrypt the ciphertext
    function decrypt() {
        let matrix = generateMatrix(key.toUpperCase().replace(/J/g, 'I'));
        let ciphertextProcessed = ciphertext.toUpperCase().replace(/J/g, 'I').replace(/ /g, '');
        let plaintextResult = '';

        // Adjust ciphertext for digraphs
        for (let i = 0; i < ciphertextProcessed.length; i += 2) {
            let first = ciphertextProcessed[i];
            let second = ciphertextProcessed[i + 1];
            let decrypted = decryptPair(matrix, first, second);
            plaintextResult += decrypted;
        }

        setPlaintext(plaintextResult);
    }

    // Function to encrypt a digraph
    function encryptPair(matrix, first, second) {
        let firstRow, firstCol, secondRow, secondCol;

        // Find positions of the characters in the matrix
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (matrix[i][j] === first) {
                    firstRow = i;
                    firstCol = j;
                }
                if (matrix[i][j] === second) {
                    secondRow = i;
                    secondCol = j;
                }
            }
        }

        // If both characters are in the same row
        if (firstRow === secondRow) {
            return matrix[firstRow][(firstCol + 1) % 5] + matrix[secondRow][(secondCol + 1) % 5];
        }
        // If both characters are in the same column
        else if (firstCol === secondCol) {
            return matrix[(firstRow + 1) % 5][firstCol] + matrix[(secondRow + 1) % 5][secondCol];
        }
        // If characters form a rectangle
        else {
            return matrix[firstRow][secondCol] + matrix[secondRow][firstCol];
        }
    }

    // Function to decrypt a digraph
    function decryptPair(matrix, first, second) {
        let firstRow, firstCol, secondRow, secondCol;

        // Find positions of the characters in the matrix
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (matrix[i][j] === first) {
                    firstRow = i;
                    firstCol = j;
                }
                if (matrix[i][j] === second) {
                    secondRow = i;
                    secondCol = j;
                }
            }
        }

        // If both characters are in the same row
        if (firstRow === secondRow) {
            return matrix[firstRow][(firstCol + 4) % 5] + matrix[secondRow][(secondCol + 4) % 5];
        }
        // If both characters are in the same column
        else if (firstCol === secondCol) {
            return matrix[(firstRow + 4) % 5][firstCol] + matrix[(secondRow + 4) % 5][secondCol];
        }
        // If characters form a rectangle
        else {
            return matrix[firstRow][secondCol] + matrix[secondRow][firstCol];
        }
    }
    return (
        <>
            <div className='py-12'>
                <div className='p-6 mx-32 font'>
                    <h2 className="text-4xl font-semibold mb-4">PlayFair Cipher</h2>
                    <div class="relative mb-4">
                        <label class="leading-7 text-sm text-gray-600">Plain Text</label>
                        <textarea value={plaintext} onChange={(e) => setPlaintext(e.target.value)} class="w-full bg-slate-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-lg outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <div class="relative mb-4">
                        <label class="leading-7 text-sm text-gray-600">Encryption / Decryption Key</label>
                        <div className='flex items-center justify-center space-x-6'>
                            <input value={key} onChange={(e) => setKey(e.target.value)} type="text" class="w-full bg-slate-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            <button onClick={encrypt} className="activeBtn px-4 py-2 bg-blue-500 text-white rounded-md">Encrypt</button>
                        </div>
                    </div>

                    <div className='flex w-full space-x-8'>
                        <div class="relative mb-4 flex-1">
                            <label class="leading-7 text-sm text-gray-600">Encrypted Text</label>
                            <textarea value={ciphertext} class="w-full bg-slate-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-lg outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" readOnly></textarea>
                        </div>
                        
                    </div>

                </div>
            </div>
        </>
    )
}

export default PlayFair