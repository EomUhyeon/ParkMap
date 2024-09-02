import React, { useState, useEffect } from "react";
import parkData from './data/경기도_안산시_도시공원정보_20231127.json';


function ParkDataUploader({ 관리번호, 공원명, 공원구분, setPark_data }) {
    let park_num= 관리번호;
    let park_name = 공원명;
    let park_category = 공원구분;
 
    setPark_data({
        관리번호: 관리번호,
        공원명: 공원명,
        공원구분: 공원구분
    });


    const ParkDataUpload = ({관리번호, 공원명, 공원구분 }) => {
        const location = parkData.find(park => park.관리번호 === 관리번호);
        
        return (
            <>
                <strong>{공원명}</strong><br />
                분류: {공원구분}<br />
                {location ? (
                <>
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
                </>
                ) : (
                    <div>공원 정보 불러오는 중...</div>
                )}
            </>
        );
    };

    return (
        <ParkDataUpload
            관리번호={park_num}
            공원명={park_name}
            공원구분={park_category}
        />
    );
};


export default ParkDataUploader;