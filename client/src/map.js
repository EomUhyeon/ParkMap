import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapMarker from './marker.js'
import './map.css';


function MapUploader() {
    const [startPoint, setStartPoint] = useState([37.316946, 126.830447]);
    const [startZoom, setStartZoom] = useState(14);
    const MapLoad = ({ children }) => {
        return (
            <MapContainer center={startPoint} zoom={startZoom} className="map-size">
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
                <MapMarker />
            </MapLoad>
        </>
    );
};

export default MapUploader;

