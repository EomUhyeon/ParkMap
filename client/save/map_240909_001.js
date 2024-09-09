import React, { useState } from 'react';
import { useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapLoad from './map_load.js';
import MapMarker from './marker.js'
import './map.css';


function MapUploader() {
    const startPoint = [37.316946, 126.830447];
    const startZoom = 13;

    const MapState = () => {
        useMapEvents({
            moveend: (event) => {
                const map = event.target;
                const currentCenter = map.getCenter();
                console.log("현재 좌표:", currentCenter.lat, currentCenter.lng);
            },
            zoomend: (event) => {
                const map = event.target;
                const currentZoom = map.getZoom();
                console.log("현재 줌:", currentZoom);
            },
        });
    
        return null;
    };

    return (
        <>
            <MapLoad startPoint={startPoint} startZoom={startZoom}>
                <MapState />
                <MapMarker startPoint={startPoint} startZoom={startZoom}/>
            </MapLoad>
        </>
    );
};

export default MapUploader;

