import React from 'react';

import './items-list.scss';

function ItemsList({ items }) {
    return (
        <div className='items-list'>
            <div className='items-list-header'>
                <span className='header-block'>Brand</span>
                <span className='header-block'>Model</span>
                <span className='header-block'>Ref. number</span>
                <span className='header-block'>Quantity</span>
            </div>
                
            <div className='items-list-body'>
                { items && items.map ( item => {
                    return (
                        <div>
                            <div key={item.id} className='body-item'>
                                <span className='item-field'>{item.brand} </span>
                                <span className='item-field'>{item.name}</span> 
                                <span className='item-field'>ref </span> 
                                <span className='item-field'>units </span>
                            </div>
                            {item.supported_cameras && 
                                <span className='item-extra-field'>Suported cameras</span>
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