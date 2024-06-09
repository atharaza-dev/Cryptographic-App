import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <header className='flex items-center justify-between bg-gradient-to-tl from-blue-600 to-violet-600 px-32'>
                <div className="flex items-center justify-between">
                    <Link to='/' className="flex-none text-xl font-semibold text-white tracking-wide">DNS Lab Task <span className=' ml-1 text-xs tracking-wider'>- by Athar Raza</span></Link>
                </div>
                <div className="flex items-center justify-between">
                    <Link to='/' className=" activeBtn flex items-center gap-x-2 text-sm  text-white  md:border-s md:border-gray-300 md:my-6 md:ps-6">
                        <i className="fa-light fa-home"></i>
                        Home
                    </Link>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
