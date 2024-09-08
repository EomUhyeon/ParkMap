const fs = require('fs');
const path = require('path');

// 원본 JSON 파일 경로 설정
const jsonFilePath = path.join(__dirname, './park_json/전국도시공원정보표준데이터.json');

// 출력 JSON 파일 경로 설정
const outputJsonFilePath = path.join(__dirname, './전국도시공원정보기본데이터.json');

// JSON 파일 읽기
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading JSON file:', err);
        return;
    }

    // JSON 데이터 파싱
    const jsonData = JSON.parse(data);

    // 필요한 항목만 추출
    const filteredData = jsonData.map(item => ({
        관리번호: item.관리번호,
        공원명: item.공원명,
        공원구분: item.공원구분,
        위도: item.위도,
        경도: item.경도,
        공원면적: item.공원면적,
    }));

    // 새로운 JSON 파일로 저장
    fs.writeFile(outputJsonFilePath, JSON.stringify(filteredData, null, 2), 'utf8', (err) => {
        if (err) {
            console.error('Error writing JSON file:', err);
        } else {
            console.log('Filtered data successfully saved to filtered_data.json');
        }
    });
});
