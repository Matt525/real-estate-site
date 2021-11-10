import React from 'react';
import {useEffect} from 'react';
import Navbar from './global-components/navbar.js';
import './bgstyle.css'
import Select from 'react-select';




export default function Home_V() {
      
         return (
     
                    <div className="bg-light">
                        <Navbar />
                        <section id="landing-home" className="row hero d-flex justify-content-center align-items-center flex-column bgCustom">
                                        <p className="w-50 text-lg-start text-md-center text-sm-center text-light fw-bold mb-5" style={{fontSize: '2em'}}>Whether you’re buying, selling or renting</p>
                                        <h2 className="w-50 text-lg-start text-md-center text-sm-center text-light fw-bold mb-5" style={{fontSize: '5em'}}>Change Starts Here</h2>
                                        <div class="input-group input-group-lg mb-3 w-50 bg-light rounded-pill">
                                                <input type="text" class="form-control border-0 rounded-pill bg-light shadow-none" placeholder="Enter an address, neighborhood, city, or ZIP code" aria-label="Username" style={{width: '500px'}} />
                                                <span className="input-group-text bg-light border-0" style={{fontWeight: 'lighter', fontSize: '1.75em', color: 'lightgrey', outline: 'none'}}>|</span>
                                                
                                                <span className="input-group-text bg-light border-0" style={{fontWeight: 'lighter', fontSize: '1.75em', color: 'lightgrey', outline: 'none'}}>|</span>
                                                <select>
                                                    <option data-display="Select">Nothing</option>
                                                    <option value="1">buy</option>
                                                    <option value="2">buy</option>
                                                </select>
                                                <span className="input-group-text bg-light border-0" style={{fontWeight: 'lighter', fontSize: '1.75em', color: 'lightgrey', outline: 'none'}}>|</span>
                                                <button class="btn dropdown-toggle border-0 shadow-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">Price</button>
                                                <ul class="dropdown-menu border-0 shadow-none bg-light">
                                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                    <li><hr class="dropdown-divider" /></li>
                                                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                                                </ul>
                                        </div>
                                        
                                
                        </section>
                    </div>
     );
}


