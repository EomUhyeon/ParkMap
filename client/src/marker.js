import React, { useState, useCallback, useEffect } from "react";
import { Marker, Tooltip, Popup } from 'react-leaflet';
import L from 'leaflet';
import markerData from './data/경기도_안산시_공원기본정보_20231127.json';
import ParkDataUploader from './park_data.js'

function MapMarker({setPark_data}) {
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

    const MakeMarker = ({setPark_data}) => {
        // useEffect(() => {
        //     const handleMarkerClick = (marker) => {
        //         setPark_data({
        //             관리번호: marker.관리번호,
        //             공원명: marker.공원명,
        //             공원구분: marker.공원구분
        //         });
        //     };
    
        //     markerData.forEach((marker) => {
        //         const markerInstance = new L.Marker([marker.위도, marker.경도], {
        //             icon: new L.DivIcon({
        //                 className: `custom-marker ${ParkCategory(marker.공원구분)}`,
        //                 iconSize: [20, 20],
        //                 iconAnchor: [10, 10],
        //                 popupAnchor: [0, -10],
        //             }),
        //         });
    
        //         markerInstance.on('click', () => handleMarkerClick(marker));
        //     });
        // }, [setPark_data]);

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
                    // eventHandlers={{
                    //     click: () => handleMarkerClick(marker),
                    // }}
                    // eventHandlers={{
                    //     click: () => {
                    //         setPark_data({
                    //             관리번호: marker.관리번호,
                    //             공원명: marker.공원명,
                    //             공원구분: marker.공원구분
                    //         });
                    //     },
                    // }}
                >
                    <Popup 
                        // onOpen={() => {
                        //     setPark_data({
                        //         관리번호: marker.관리번호,
                        //         공원명: marker.공원명,
                        //         공원구분: marker.공원구분
                        //     });
                        // }}
                    >
                        <ParkDataUploader
                            관리번호={marker.관리번호} 
                            공원명={marker.공원명} 
                            공원구분={marker.공원구분}
                            setPark_data={setPark_data}
                        />
                    </Popup>
                </Marker>
            ))}
            </>
        );
    };

    return (
        <>
            <MakeMarker setPark_data={setPark_data}/>
        </>
    );
};


export default MapMarker;

