import React from 'react';
import './App.css';
import Home from './Home'
import NavbarMenu from './Nav';
import Map from './Map';

export default function Discover() {
    return (
        <div>
            <Map />
            <NavbarMenu />
            <Home />    
        </div>
    )
}
