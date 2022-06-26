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

function DropdownCol(props){
    const { colItems, stateHandler } = props;
    return(
        <div className="col p-0">
            {colItems.map((item) => <DropdownItem key={"dropdown-item-" + item} itemLabel={item} stateHandler={stateHandler}></DropdownItem>)}
        </div>
    );
}

function DropdownMenu(props){
    const { dropdownItems, stateHandler } = props;

    // one column only (pass props to this function component, not the result of BuildRows)
    // return (
    //     <ul className="my-drop-menu background-box">
    //         {dropdownItems.map((item) => <DropdownItem key={"dropdown-item-" + item} itemLabel={item} stateHandler={stateHandler}></DropdownItem>)}
    //     </ul>
    // );
    return(
        <ul className="my-drop-menu background-box">
            <div className="row m-0">
                    {dropdownItems.map((colItems, index) => <DropdownCol key={"dropdown-menu-col-" + index} colItems={colItems} stateHandler={stateHandler}></DropdownCol>)}
            </div>
        </ul>
    );
}

function Dropdown(props){

    const [ dropdownOpen, setDropdownOpen ] = useState(false);

    function BuildRows(itemArray){
        let itemArrays = [];
        let rows = 3;
        
        for(let i = 0; i < itemArray.length; i++){
            if(i % rows === 0){
                itemArrays.push([itemArray[i]]);
            }
            else{
                itemArrays[Math.floor(i/rows)].push(itemArray[i]);
            }
        }
        
        return itemArrays;
    }

    const newProps = { ...props, dropdownItems:BuildRows(props.dropdownItems) }

    return (
        <div>
            <div className="link-buttons">
                <a className="background-box" onClick={() => setDropdownOpen(!dropdownOpen)}>
                    Filters
                </a>
            </div>
            { dropdownOpen && <DropdownMenu {...newProps}></DropdownMenu> }
        </div>
    )
}

export default Dropdown;