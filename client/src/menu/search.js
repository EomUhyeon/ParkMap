import React, { useState } from "react";
import markerData from '../data/경기도_안산시_공원기본정보_20231127.json';
import { set_park_selection } from '../data_controller.js';


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

        // 검색 결과가 정확히 하나일 때만 `set_park_selection` 호출
        if (results.length === 1) {
            const park = results[0];
            set_park_selection({
                관리번호: park.관리번호,
                공원명: park.공원명,
                공원구분: park.공원구분
            });
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
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
                    onKeyDown={handleKeyDown}  // 엔터 키를 누르면 검색 실행
                />
                <button className="search_bnt" onClick={handleSearch}></button>
            </div>
            <div className="search_results">
                {searchResults.length > 0 ? (
                    <ul>
                        {searchResults.map((result) => (
                            <li key={result.관리번호}>
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
};

export default Search;

