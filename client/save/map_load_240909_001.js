import { MapContainer, TileLayer } from 'react-leaflet';

function MapLoad({ children, startPoint, startZoom}){
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

export default MapLoad;