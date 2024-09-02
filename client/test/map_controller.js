import { getMapInstance } from './map.js';

export const moveMapToLocation = (lat, lng) => {
    const map = getMapInstance();
    if (map) {
        map.setView([lat, lng], 16);  // 지도 위치와 줌 레벨 변경
    }
};
