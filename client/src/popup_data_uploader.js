import React from "react";
import parkData from './data/경기도_안산시_도시공원정보_20231127.json';
import ParkDataUpload from './park_data_upload.js'

function PopupDataUploader({ 관리번호, 공원명, 공원구분 }) {
    let park_num = 관리번호;
    let park_name = 공원명;
    let park_category = 공원구분;

    return (
        <>
        <strong>{park_name}</strong><br />
        분류: {park_category}<br />
        <ParkDataUpload
            관리번호={park_num}
            공원데이터파일={parkData}
        />
        </> 
    );
};

export default PopupDataUploader;

