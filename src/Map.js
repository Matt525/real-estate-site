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

        // const getUserLocation = () =>{
            
        //     navigator.geolocation.getCurrentPosition(loc=>{
        //         setViewport({
        //             longitude: loc.coords.latitude,
        //             latitude: loc.coords.latitude
        //         })
        //     })
        // }
        

        // // this.setState({prevState=>{
        // //     let viewport = {...prevState.viewport};
        // //     viewport.longitude = loc.coords.longitude;
        // //     viewport.latitude = loc.coords.latitude;
        // //     return { viewport };
        // // }
    
        // useEffect(()=>{
        //     getUserLocation();
        // },[])
     
            
            


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
                    mapRef={mapRef} 
                    onViewportChange={handleViewportChange}
                    mapboxApiAccessToken="pk.eyJ1IjoibWF0dDUyNSIsImEiOiJja2RxOW4wMXAwbnpxMnpwNmprdXRuaXJlIn0.LfijiNZJZmZeRL7LSREYvg"
                    position="bottom-left"
                    
            />
                </ReactMapGL>
            </div>
        )



 
        
}

 