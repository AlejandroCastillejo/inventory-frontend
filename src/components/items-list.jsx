import React from 'react';

import './items-list.scss';

function ItemsList({ items, dimmer }) {
    return (
        <div className={`items-list ${dimmer && 'dimmer'}`}>
            <div className='items-list-header'>
                <span className='header-block'>Brand</span>
                <span className='header-block'>Model</span>
                <span className='header-block'>Ref. number</span>
                <span className='header-block'>Quantity</span>
            </div>
                
            <div className='items-list-body'>
                { items && items.map ( item => {
                    return (
                        <div key={item.name}>
                            <div className='body-item'>
                                <span className='item-field'>{item.brand} </span>
                                <span className='item-field'>{item.name}</span> 
                                {item.serial_number ? 
                                    <span className='item-field'>{item.serial_number} </span> 
                                    : <span className='item-field'>n/a</span> 
                                }
                                {item.quantity ?
                                    <span className='item-field'>{item.quantity}</span>
                                    : <span className='item-field'>-</span>
                                }
                            </div>
                            {item.supported_cameras && 
                                <span className='item-extra-field'>Suported cameras: ...</span>
                            }
                        </div>
                    // TODO: replace 'supported_cameras' for 'extra_information'. Fisrt make changes in the backend
                    )
                }) }
            </div>
        </div>
    )
}

export default ItemsList;
