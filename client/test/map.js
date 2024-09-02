import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapMarker from './marker.js';
import './map.css';

let mapInstance = null;  // 지도 인스턴스를 저장하기 위한 변수

function MapUploader() {
    const MapLoad = ({ children }) => {
        const start_point = [37.316946, 126.830447];
        const start_zoom = 14;

        const setMapRef = (map) => {
            mapInstance = map;
        };

        return (
            <MapContainer 
                center={start_point} 
                zoom={start_zoom} 
                className="map-size" 
                whenCreated={setMapRef}
            >
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

export const getMapInstance = () => mapInstance;  // 지도 인스턴스 반환 함수

export default MapUploader;
