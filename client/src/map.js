import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import locationData from './data/park_data.json';

function MapUploader() {
    const MapLoad = () => {
        let map_size = {width: "98vw", height: "98vh"};
        let start_point= [37.321131, 126.830817];
        let start_zoom = 14;
        return (
            <MapContainer center={start_point} zoom={start_zoom} style={map_size}>
                <TileLayer 
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapPoint />
            </MapContainer>
        );
    };

    const MapPoint = () => {
        return (
            <>
                {locationData.map((location) => (
                    <Marker
                        key={location._id}
                        position={[location.latitude, location.longitude]}
                    >
                        <Popup>
                            {location.name}
                        </Popup>
                    </Marker>
                ))}
            </>
        );
    };
    
    return (
        <MapLoad />
    );
};


export default MapUploader;