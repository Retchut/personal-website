import React, { useState } from 'react';

import './Dropdown.css';

function Dropdown(){

    const [ dropdownOpen, setDropdownOpen ] = useState(false);

    function DropdownItem(){
        return (
            <li className="link-buttons my-drop-item">
                <a>item</a>
            </li>
        );
    }

    function DropdownMenu(){
        return (
            <ul className="my-drop-menu background-box">
                <DropdownItem></DropdownItem>
                <DropdownItem></DropdownItem>
                <DropdownItem></DropdownItem>
                <DropdownItem></DropdownItem>
            </ul>
        );
    }

    return (
        <div>
            <div className="link-buttons">
                <a className="background-box" onClick={() => setDropdownOpen(!dropdownOpen)}>
                    Filters
                </a>
            </div>
            { dropdownOpen && <DropdownMenu></DropdownMenu> }
        </div>
    )
}

export default Dropdown;