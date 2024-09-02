let park_selection = { 관리번호: '', 공원명: '', 공원구분: '' };
let popup_on = false;

let onParkSelectionChange = () => {};   // ParkSelection 콜백
let onPopupOnChange = () => {};         // PopupOn 콜백

export const set_park_selection = (data) => {
    park_selection = data; 
    onParkSelectionChange(data);        // 데이터가 설정될 때 콜백 호출
    console.log(park_selection)
};
export const get_park_selection = () => {
    return park_selection; 
};

export const set_popup_on = (data) => {
    popup_on = data;
    onPopupOnChange(data);              // 데이터가 설정될 때 콜백 호출
};
export const get_popup_on = () => {
    return popup_on; 
};

// 상태 변경 시 호출될 콜백 설정
export const setOnParkSelectionChange = (callback) => {
    onParkSelectionChange = callback;
};

export const setOnPopupOnChange = (callback) => {
    onPopupOnChange = callback;
};