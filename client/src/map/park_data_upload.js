const ParkDataUpload = ({ 관리번호, 공원데이터파일 }) => {
    const location = 공원데이터파일.find(park => park.관리번호 === 관리번호);
    
    return (
        <>
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

export default ParkDataUpload;

