import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div class="px-32 mt-16 flex flex-col items-center justify-center">
            <h1 className='text-black text-4xl text-center'>Cryptography Enryption / Decryption Algorithms</h1>
            <label class="leading-7 text-sm text-gray-600 pb-12">Tons of Cryptography Encryption and Decryption Algorithms available for use</label>
            <div class="parent font">
                <Link to='/ceaser-cipher' class="div1 activeBtn bg-gradient-to-tl py-12 px-2 from-blue-600 to-violet-600 flex justify-center items-center rounded-lg text-center text-white tracking-wide text-xl">
                    Ceaser Cipher
                </Link>

                <Link to='/playfair' class="div2 activeBtn bg-gradient-to-tl from-blue-600 to-violet-600 flex justify-center items-center rounded-lg text-center text-white tracking-wide text-xl">
                    PlayFair Cipher
                </Link>

                <Link to='/data-encryption-standard' class="div3 activeBtn bg-gradient-to-tl from-blue-600 to-violet-600 flex justify-center items-center rounded-lg text-center text-white tracking-wide text-xl">
                    DES Algorithm
                </Link>

                <Link to='/triple-des' class="div4 activeBtn bg-gradient-to-tl px-3 from-blue-600 to-violet-600 flex justify-center items-center rounded-lg text-center text-white tracking-wide text-xl">
                    Triple DES Algorithm
                </Link>

                <Link to='/aes' class="div5 activeBtn bg-gradient-to-tl from-blue-600 to-violet-600 flex justify-center items-center rounded-lg text-center text-white tracking-wide text-xl">
                    AES Algorithm
                </Link>

                <Link to='/idea' class="div6 activeBtn bg-gradient-to-tl from-blue-600 to-violet-600 flex justify-center items-center rounded-lg text-center text-white tracking-wide text-xl">
                    IDEA Algorithm
                </Link>

                <Link to='/blowfish' class="div7 activeBtn bg-gradient-to-tl from-blue-600 to-violet-600 flex justify-center items-center rounded-lg text-center text-white tracking-wide text-xl">
                    Blowfish
                </Link>

                <Link to='/rc4' class="div8 activeBtn bg-gradient-to-tl from-blue-600 to-violet-600 flex justify-center items-center rounded-lg text-center text-white tracking-wide text-xl">
                    RC4 Algorithm
                </Link>

                <Link to='/rc5' class="div9 activeBtn bg-gradient-to-tl from-blue-600 to-violet-600 flex justify-center items-center rounded-lg text-center text-white tracking-wide text-xl">
                    RC5 Algorithm
                </Link>

                <Link to='/rc6' class="div10 activeBtn bg-gradient-to-tl from-blue-600 to-violet-600 flex justify-center items-center rounded-lg text-center text-white tracking-wide text-xl">
                    RC6 Algorithm
                </Link>

                <Link to='/diffie-hellman' class="div11 activeBtn bg-gradient-to-tl from-blue-600 to-violet-600 flex justify-center items-center rounded-lg text-center text-white tracking-wide text-xl">
                    Diffie Hellman
                </Link>

                <Link to='/rsa' class="div12 activeBtn bg-gradient-to-tl from-blue-600 to-violet-600 flex justify-center items-center rounded-lg text-center text-white tracking-wide text-xl">
                    RSA Algorithm
                </Link>

                <Link to='/md5' class="div13 activeBtn bg-gradient-to-tl from-blue-600 to-violet-600 flex justify-center items-center rounded-lg text-center text-white tracking-wide text-xl">
                    Hashing Algorithm
                </Link>
            </div>
        </div>
    )
}

export default HomePage