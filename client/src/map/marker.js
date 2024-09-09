import React, { useState, useEffect, useRef } from "react";
import { Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import MarkerData from '../data/전국도시공원정보기본데이터.json';
import { set_park_selection, get_park_selection, setOnParkSelectionChange } from '../data_controller.js';
import PopupDataUploader from './popup_data_uploader.js'


function MapMarker({ start_point, start_zoom }) {
    const map = useMap();
    const [Markers, setMarkers] = useState([]);
    
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

    const updateMarkers = (center) => {
        const latMin = center.lat - 0.1;
        const latMax = center.lat + 0.1;
        const lngMin = center.lng - 0.1;
        const lngMax = center.lng + 0.1;

        const filteredMarkers = MarkerData.filter(marker => {
            const lat = marker.위도;
            const lng = marker.경도;
            return lat >= latMin && lat <= latMax && lng >= lngMin && lng <= lngMax;
        });

        setMarkers(filteredMarkers);
    };

    useEffect(() => {
        map.setView(start_point, start_zoom + 1);
    }, [start_point, start_zoom]);

    useMapEvents({
        moveend(e) {
            const map = e.target;
            const center = map.getCenter();         // 지도의 중앙 좌표 가져오기
            updateMarkers(center); 
        }
    });

    const MakeMarker = () => {
        return (
            <>
            {Markers.map((marker) => (
                <Marker
                    icon={new L.DivIcon({
                        className: `custom-marker ${parkCategory(marker.공원구분)}`,
                        iconSize: [20, 20],         // 크기
                        iconAnchor: [10, 10],       // 원의 중심 설정
                        popupAnchor: [0, -10],      // 팝업 위치
                    })}
                    key={marker.관리번호}
                    position={[marker.위도, marker.경도]}
                    eventHandlers={{
                        click: () => {
                            set_park_selection({
                                관리번호: marker.관리번호,
                                공원명: marker.공원명,
                                공원구분: marker.공원구분
                            });
                        }
                      }}
                >
                    <Popup>
                        <PopupDataUploader
                            관리번호={marker.관리번호} 
                            공원명={marker.공원명} 
                            공원구분={marker.공원구분}
                        />
                    </Popup>
                </Marker>
            ))}
            </>
        );
    };

    return (
        <>
            <MakeMarker />
        </>
    );
};


export default MapMarker;

