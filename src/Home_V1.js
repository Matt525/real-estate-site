import React from 'react';
import Navbar from './global-components/navbar.js';
import Home_search from './section-components/Home_search';
import About from '../src/about.js';




const Home_V1 =()=> {

         return (
                    <>
                        <Navbar />
                        <Home_search />
                        <Navbar />

                    </>
     );
}

export default Home_V1

