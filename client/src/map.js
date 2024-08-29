import React from 'react';
import { MapContainer, TileLayer, Marker, Tooltip, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import parkData from './data/경기도_안산시_도시공원정보_20231127.json';

function MapUploader() {
    const MapLoad = () => {
        let map_size = {width: "98vw", height: "98vh"};
        let start_point= [37.316946, 126.830447];
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
        const customIcon = new L.Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28],
            shadowUrl: 'leaflet/dist/images/marker-shadow.png',
            shadowSize: [41, 41]
        });
        return (
            <>
                {parkData.map((location) => (
                    <Marker
                        icon={customIcon}
                        key={location.관리번호}
                        position={[location.위도, location.경도]}
                    >
                        <Tooltip direction="bottom" offset={[0, 20]} opacity={1} permanent>
                            {location.공원명}
                        </Tooltip>
                        <Popup>
                            {location.공원명}
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