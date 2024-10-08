import React from "react";
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import markerData from './data/경기도_안산시_공원기본정보_20231127.json';
import { set_park_selection } from './data_controller.js';
import PopupDataUploader from './popup_data_uploader.js'

function MapMarker() {
    const ParkCategory = (category) => {
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

    const MakeMarker = () => {
        return (
            <>
            {markerData.map((marker) => (
                <Marker
                    icon={new L.DivIcon({
                        className: `custom-marker ${ParkCategory(marker.공원구분)}`,
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

