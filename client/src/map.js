import React from 'react';
import { MapContainer, TileLayer, Marker, Tooltip, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import parkData from './data/경기도_안산시_도시공원정보_20231127.json';
import './map.css';


function MapUploader() {
    const MapLoad = () => {
        let start_point= [37.316946, 126.830447];
        let start_zoom = 14;
        return (
            <MapContainer center={start_point} zoom={start_zoom} className="map-size">
                <TileLayer 
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapPoint />
            </MapContainer>
        );
    };

    const parkCategory = (category) => {
        switch (category) {
            case '어린이공원': return 'marker-children-park';
            case '근린공원': return 'marker-neighborhood-park';
            case '소공원': return 'marker-small-park';
            case '문화공원': return 'marker-cultural-park';
            case '수변공원': return 'marker-waterfront-park';
            case '체육공원': return 'marker-sports-park';
            case '역사공원': return 'marker-historical-park';
            case '묘지공원': return 'marker-cemetery-park';
            default: return '';
        }
    };

    const MapPoint = () => {
        return (
            <>
                {parkData.map((location) => (
                    <Marker
                        icon={new L.DivIcon({
                            className: `custom-marker ${parkCategory(location.공원구분)}`,
                            iconSize: [20, 20],         // 크기
                            iconAnchor: [10, 10],       // 원의 중심 설정
                            popupAnchor: [0, -10],      // 팝업 위치
                            tooltipAnchor: [10, 0],     // Tooltip 위치
                        })}
                        key={location.관리번호}
                        position={[location.위도, location.경도]}
                    >
                        {/* <Tooltip direction="bottom" offset={[0, 20]} opacity={1} permanent>
                            {location.공원명}
                        </Tooltip> */}
                        <Popup>
                            {location.공원명 && <><strong>{location.공원명}</strong><br /></>}
                            {location.공원구분 && <>분류: {location.공원구분}<br /></>}
                            {location.소재지지번주소 && <>지번 주소: {location.소재지지번주소}<br /></>}
                            {location.소재지도로명주소 && <>도로명 주소: {location.소재지도로명주소}<br /></>}
                            {location.공원면적 && <>면적: {location.공원면적}㎡<br /></>}
                            {location['공원보유시설(운동시설)'] && <>운동시설: {location['공원보유시설(운동시설)']}<br /></>}
                            {location['공원보유시설(유희시설)'] && <>유희시설: {location['공원보유시설(유희시설)']}<br /></>}
                            {location['공원보유시설(편익시설)'] && <>편익시설: {location['공원보유시설(편익시설)']}<br /></>}
                            {location['공원보유시설(교양시설)'] && <>교양시설: {location['공원보유시설(교양시설)']}<br /></>}
                            {location['공원보유시설(기타시설)'] && <>기타시설: {location['공원보유시설(기타시설)']}<br /></>}
                            {location.관리기관명 && <>관리기관: {location.관리기관명}<br /></>}
                            {location.전화번호 && <>관리기관 번호: {location.전화번호}<br /></>}
                            {location.데이터기준일자 && <>정보기준일자: {location.데이터기준일자}<br /></>}
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

