import React from 'react';

import './add-item.styles.scss'

import DroneRegistration from './drone-registration';
import CameraRegistration from './camera-registration';

function AddItem({items, closeForm}) {

    return (
        <div className = 'add-item'>
            <span className = 'close-button' onClick={closeForm}>&#10005;</span>
            {
                {
                    'drones': <DroneRegistration />,
                    'cameras': <CameraRegistration />
                }[items]
            }
        </div>
    )
}

export default AddItem;
