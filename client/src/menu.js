import React, { useState, useEffect } from "react";
import { setOnParkSelectionChange } from './data_controller.js';
import Search from './search.js'
import MenuDataUploader from './menu_data_uploader.js';
import "./menu.css";


function Menu() {
    const [parkSelection, setParkSelection] = useState(null);

    useEffect(() => {
        setOnParkSelectionChange((newParkSelection) => {
            setParkSelection(newParkSelection);
        });
    }, []);

    const LeftMenu = () => {
        const [menuOpen, setMenuOpen] = useState(true);
        const left_menu = menuOpen ? 'left_menu' : 'left_menu left_menu_closed';

        const LeftMenuBnt = () => {
            setMenuOpen(!menuOpen);
        };
        
        const Facilities = () => {
            return(
                <div className="facilities_box">
                    <button className="facilities_bnt">🚻</button>
                    <button className="facilities_bnt">🅿️</button>
                    <button className="facilities_bnt">🎠</button>
                    <button className="facilities_bnt">🏟️</button>
                    <button className="facilities_bnt">🏀</button>
                    <button className="facilities_bnt">🏸</button>
                    <p className="facilities_text">화장실</p>
                    <p className="facilities_text">주차장</p>
                    <p className="facilities_text">놀이터</p>
                    <p className="facilities_text">운동장</p>
                    <p className="facilities_text">농구장</p>
                    <p className="facilities_text">배트민턴장</p>
                    <button className="facilities_bnt">🏋️‍♂️</button>
                    <button className="facilities_bnt"></button>
                    <button className="facilities_bnt"></button>
                    <button className="facilities_bnt"></button>
                    <button className="facilities_bnt"></button>
                    <button className="facilities_bnt"></button>
                    <p className="facilities_text">운동기구</p>
                    <p className="facilities_text">주차장</p>
                    <p className="facilities_text">놀이터</p>
                    <p className="facilities_text">운동장</p>
                    <p className="facilities_text">농구장</p>
                    <p className="facilities_text">배트민턴장</p>
                </div>
            );
        };

        return (
            <div className={left_menu}>
                <button className="left_menu_btn" onClick={LeftMenuBnt}>
                {menuOpen ? "<" : ">"}
                </button>
                <Search />
                <Facilities />
                <hr className="gray-line"></hr>
                <MenuDataUploader parkSelection={parkSelection} />
                <hr className="gray-line"></hr>
                <div>추천 공원</div>
                <hr className="gray-line"></hr>
                <div>즐겨찾기</div>
            </div>
        );
    };
    const RightMenu = () => {
        
    };

    return (
        <LeftMenu  />
    );
};


export default Menu;

