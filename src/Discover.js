import React from 'react';
import './App.css';
import Home from './Home'
import Map from './Map';
import navbar from './global-components/navbar';

export default function Discover() {
    return (
        <div>
            <Map />
                <navbar />
            <Home />    
        </div>
    )
}
