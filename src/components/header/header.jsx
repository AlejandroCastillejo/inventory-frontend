import React from 'react';

import './header.scss';

const Header = () => (
    <div className='header'>
        <div className='title'>
            Inventory
        </div>
        <div className='options'>
            <span 
                className='option' 
                onClick={() => alert('Add a funtion to this button!')}
            >Option button</span>
        </div>
    </div>
)

export default Header;