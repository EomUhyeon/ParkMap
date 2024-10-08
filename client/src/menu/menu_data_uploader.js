import React from "react";
import parkData from '../data/경기도_안산시_도시공원정보_20231127.json';
import ParkDataUpload from './park_data_upload.js'


function MenuDataUploader({ parkSelection }) {
    const { 
        관리번호: park_num = '', 
        공원명: park_name = '', 
        공원구분: park_category = '' 
    } = parkSelection || {};

    console.log(parkSelection);

    return (
        <>
        {park_num ? (
        <>
            <strong>{park_name}</strong>
            분류: {park_category}<br />
            <ParkDataUpload
                관리번호={park_num}
                공원데이터파일={parkData}
            />
        </>
        ) : (
            <div>공원을 선택 하세요.</div>
        )}
        </> 
    );
};


export default MenuDataUploader;

