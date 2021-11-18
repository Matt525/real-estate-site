import React from 'react';
import Navbar from './global-components/navbar.js';
import Home_search from './section-components/Home_search';
import Home_cards from './section-components/Home_cards.js';


const Home_V1 =()=> {

         return (
                    <>
                        <Navbar />
                        <Home_search />
                        <Home_cards />

                    </>
     );
}

export default Home_V1

