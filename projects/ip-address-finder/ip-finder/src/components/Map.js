import React, {useEffect, useState} from 'react';
import ReactMapGL, { Marker} from 'react-map-gl';
import { RiUserLocationFill} from 'react-icons/ri';

const API_KEY ='pk.eyJ1IjoidmFzYW50aGd4IiwiYSI6ImNseWVvM2pkajA0eHQya3NkaHpiYWYxYmoifQ.YaN6FSJSg0k_iFC38-vfvw';
const Map = ({lat,lon})=>{
    const [viewport, setViewport] = useState({
        latitude:lat,
        longitude:lon,
        zoom:14,
        bearing:0,
        pitch:0,
        width:'100%',
        height:'100%'
    });

    //viewport re-renders whenever latitude and longitude changes
    useEffect(()=>{
        const a= {...viewport};
        a.latitude = lat;
        a.longitude = lon;
        setViewport(a);
    }, [lat,lon,viewport]);

    return(
        <div className="map">
            <ReactMapGL 
            mapboxApiAccessToken={API_KEY}
            {...viewport}
            onViewportChange={(viewport)=>{
                setViewport(viewport)
            }}
            mapStyle= "mapbox://styles/mapbox/streets-v11"
            // mapStyle= "mapbox://styles/mapbox/empty"
            >
            <Marker latitude={lat} longitude={lon}>
                <div className="mark">
                    <RiUserLocationFill size = "25px" color ="blue"/>
                </div>

            </Marker>

            </ReactMapGL>
        </div>
    )
}

export default Map;