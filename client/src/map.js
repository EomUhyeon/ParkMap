import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

function MapUploader() {
    const MapLoad = () => {
        let map_size = {width: "98vw", height: "98vh"};
        let start_point= [37.5665, 126.9780];
        let start_zoom = 13;
        return (
            <MapContainer center={start_point} zoom={start_zoom} style={map_size}>
                <TileLayer 
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        );
    };

    const MapPoint = () => {

    };
    
    return (
        <MapLoad />
    );
};


export default MapUploader;