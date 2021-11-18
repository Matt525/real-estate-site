import React from 'react';
import Navbar from './global-components/navbar.js';
import Home_search from './section-components/Home_search';
import About from './About.js';




const Home_V =()=> {

         return (
                    <>
                        <Navbar />
                        <Home_search />
                        <About />
                    </>
     );
}

export default Home_V

