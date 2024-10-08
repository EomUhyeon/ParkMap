const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const iconv = require('iconv-lite');

const csvFilePath = path.join(__dirname, '전국도시공원정보표준데이터.csv');        // CSV 파일 경로 설정
const jsonFilePath = path.join(__dirname, '전국도시공원정보표준데이터.json');      // JSON 파일 경로 설정

const results = [];

fs.createReadStream(csvFilePath)
  .pipe(iconv.decodeStream('EUC-KR'))
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    fs.writeFile(jsonFilePath, JSON.stringify(results, null, 2), (err) => {
      if (err) {
        console.error('Error writing to JSON file:', err);
      } else {
        console.log('CSV file successfully converted to JSON!');
      }
    });
  });