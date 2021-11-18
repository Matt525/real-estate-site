import React from 'react';
import './App.css';
import Home from './Home'
import Map from './Map';
import Navbar from './global-components/navbar'

export default function Discover() {
    return (
        <div>
            <Map />
                <Navbar />
            <Home />    
        </div>
    )
}
