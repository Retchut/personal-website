import React, { useState } from 'react';

import './Dropdown.css';

function DropdownItem(props){
    const { itemLabel, stateHandler } = props;
    return (
        <li className="link-buttons my-drop-item">
            <a onClick={() => stateHandler(itemLabel)}>{itemLabel}</a>
        </li>
    );
}

function DropdownMenu(props){
    const { dropdownItems, stateHandler } = props;

    return (
        <ul className="my-drop-menu background-box">
            {dropdownItems.map((item) => <DropdownItem key={"dropdown-item-" + item} itemLabel={item} stateHandler={stateHandler}></DropdownItem>)}
        </ul>
    );
}

function Dropdown(props){

    const [ dropdownOpen, setDropdownOpen ] = useState(false);

    return (
        <div>
            <div className="link-buttons">
                <a className="background-box" onClick={() => setDropdownOpen(!dropdownOpen)}>
                    Filters
                </a>
            </div>
            { dropdownOpen && <DropdownMenu {...props}></DropdownMenu> }
        </div>
    )
}

export default Dropdown;