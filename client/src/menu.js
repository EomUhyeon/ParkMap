import React, { useState } from "react";
import "./menu.css";


function Menu() {
    const LeftMenu = () => {
        const [menuOpen, setMenuOpen] = useState(true);
        const left_menu_btn = () => {
            setMenuOpen(!menuOpen);
        };
        const left_menu = menuOpen ? 'left_menu' : 'left_menu left_menu_closed';

        const Search = () => {
            return(
                <div className="search_box">
                <input type="text" placeholder="공원 검색..." className="search_bar" />
                <button className="search_bnt"></button>
                </div>
            );  
        };

        return (
            <div className={left_menu}>
                <button className="left_menu_btn" onClick={left_menu_btn}>
                {menuOpen ? "<" : ">"}
                </button>
                <Search />
            </div>
        );
    };
    const RightMenu = () => {
        
    };

    return (
        <LeftMenu />
    );
};


export default Menu;