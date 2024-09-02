let park_selection = { 관리번호: '', 공원명: '', 공원구분: '' };
let onParkSelectionChange = () => {};   // ParkSelection 콜백 생성

export const setOnParkSelectionChange = (callback) => {
    onParkSelectionChange = callback;
};
export const set_park_selection = (data) => {
    park_selection = data ; 
    onParkSelectionChange(data);
};
export const get_park_selection = () => {
    return park_selection; 
};
export const clear_park_selection = () => {
    park_selection = { 관리번호: '', 공원명: '', 공원구분: '' }; 
    onParkSelectionChange(park_selection); 
};


