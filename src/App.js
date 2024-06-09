import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
//*importing Pages
import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar'
import CeaserCipher from './Pages/CeaserCipher';
import PlayFair from './Pages/PlayFair';
import DES from './Pages/Transposition';
import TripleDES from './Pages/TripleDES';
import AES from './Pages/AES';
import Idea from './Pages/Idea';
import Blowfish from './Pages/Blowfish';
import RCFour from './Pages/RCFour';
import RCFive from './Pages/RCFive'
import RC6 from './Pages/RCSix';
import DiffeHellman from './Pages/DiffeHellman';
import RSA from './Pages/RSA';
import MD5 from './Pages/MD5';

function App() {
  return (
    (
      <div className='font'>
        <ToastContainer />

        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/ceaser-cipher' element={<CeaserCipher />} />
            <Route path='/playfair' element={<PlayFair />} />
            <Route path='/data-encryption-standard' element={<DES />} />
            <Route path='/triple-des' element={<TripleDES />} />
            <Route path='/aes' element={<AES />} />
            <Route path='/idea' element={<Idea />} />
            <Route path='/blowfish' element={<Blowfish />} />
            <Route path='/rc4' element={<RCFour />} />
            <Route path='/rc5' element={<RCFive />} />
            <Route path='/rc6' element={<RC6 />} />
            <Route path='/diffie-hellman' element={<DiffeHellman />} />
            <Route path='/rsa' element={<RSA />} />
            <Route path='/md5' element={<MD5 />} />
          </Routes>
        </BrowserRouter>

      </div>
    )
  );
}

export default App;
