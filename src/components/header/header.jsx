import React from 'react';
import { Link } from "react-router-dom";

import './header.scss';

import AddItem from '../add-item/add-item.component';


const Header = ({ showAddItem }) => (
    <div className='header'>
        <div className='title'>
            Inventory
        </div>
        <div className='options'>
            <span className='option' onClick={() => showAddItem()}>ADD ITEM</span>
        </div>
        {/* {showAddItem && <AddItem />} */}
        {/* <AddItem /> */}
    </div>
)

export default Header;