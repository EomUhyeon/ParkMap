import React, { useState } from "react";
import markerData from './data/경기도_안산시_공원기본정보_20231127.json';
import { set_park_selection } from './data_controller.js';
import { moveMapToLocation } from './map_controller.js';  // 추가된 부분

function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        if (searchTerm.trim() === "") {
            setSearchResults([]);
            return;
        }

        const results = markerData.filter(marker =>
            marker.공원명.includes(searchTerm.trim())
        );

        setSearchResults(results);

        if (results.length === 1) {
            const park = results[0];
            set_park_selection({
                관리번호: park.관리번호,
                공원명: park.공원명,
                공원구분: park.공원구분
            });
            moveMapToLocation(park.위도, park.경도);  // 지도 이동 추가
        }
    };

    const handleResultClick = (result) => {
        set_park_selection({
            관리번호: result.관리번호,
            공원명: result.공원명,
            공원구분: result.공원구분
        });
        moveMapToLocation(result.위도, result.경도);  // 지도 이동 추가
    };

    return (
        <>
            <div className="search_box">
                <input
                    type="text"
                    placeholder="공원 검색..."
                    className="search_bar"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="search_bnt" onClick={handleSearch}></button>
            </div>
            <div className="search_results">
                {searchResults.length > 0 ? (
                    <ul>
                        {searchResults.map((result) => (
                            <li 
                                key={result.관리번호} 
                                onClick={() => handleResultClick(result)}
                            >
                                {result.공원명} - {result.공원구분}
                            </li>
                        ))}
                    </ul>
                ) : (
                    searchTerm && <p>검색 결과가 없습니다.</p>
                )}
            </div>
        </>
    );
}

export default Search;
