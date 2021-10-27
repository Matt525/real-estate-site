import React, { useRef, useCallback, useEffect, useState } from 'react'
import ReactMapGL, {GeolocateControl} from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import "./MapStyling.css";
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';

 export default function Map(){

        const [viewport, setViewport] = useState({ 
                latitude: 0,
                longitude: 0,
                zoom: 8,
                bearing: 0,
                pitch: 0,
                top: 0,
                width: '80vw',
                height: '100vh'


        })

        const mapRef = useRef(); 

        const getUserLocation = () =>{
            
            navigator.geolocation.getCurrentPosition(loc=>{
                const newViewport = {
                    latitude: loc.coords.latitude,
                    longitude: loc.coords.longitude,
                    zoom: 8,
                    bearing: 0,
                    pitch: 0,
                    top: 0,
                    width: '80vw',
                    height: '100vh'
                }
                setViewport(newViewport)
                console.log(viewport.latitude, viewport.longitude);
            })
        
        }
        

   useEffect(()=>{
       getUserLocation();
       console.log(viewport);
   })


            
            


            const handleViewportChange = useCallback(
                (newViewport) => setViewport(newViewport),
                []
              );
            

       
        return (
            <div className="mapStyles">
                <ReactMapGL
                ref={mapRef}
                {...viewport} 
                mapStyle="mapbox://styles/mapbox/dark-v9"
                mapboxApiAccessToken="pk.eyJ1IjoibWF0dDUyNSIsImEiOiJja2RxOW4wMXAwbnpxMnpwNmprdXRuaXJlIn0.LfijiNZJZmZeRL7LSREYvg"
                onViewportChange={handleViewportChange}
                >
                                <Geocoder
                                        id="geolocateStyles"
                                        mapRef={mapRef} 
                                        onViewportChange={handleViewportChange}
                                        mapboxApiAccessToken="pk.eyJ1IjoibWF0dDUyNSIsImEiOiJja2RxOW4wMXAwbnpxMnpwNmprdXRuaXJlIn0.LfijiNZJZmZeRL7LSREYvg"
                                        position="bottom-left"
                                        
                                />
                                <GeolocateControl 
                                
                                    positionOptions={{enableHighAccuracy: true}}
                                    trackUserLocation={true}
                                    onViewportChange={handleViewportChange}
                                />
                </ReactMapGL>
            </div>
        )



 
        
}

 