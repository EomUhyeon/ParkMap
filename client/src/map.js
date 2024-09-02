import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapMarker from './marker.js'
import './map.css';


function MapUploader({setPark_data}) {
    const MapLoad = ({ children }) => {
        let start_point= [37.316946, 126.830447];
        let start_zoom = 14;
        return (
            <MapContainer center={start_point} zoom={start_zoom} className="map-size">
                <TileLayer 
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {children}
            </MapContainer>
        );
    };

    return (
        <>
            <MapLoad>
                <MapMarker setPark_data={setPark_data}/>
            </MapLoad>
        </>
    );
};


export default MapUploader;

