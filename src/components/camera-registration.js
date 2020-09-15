import React, { useState } from 'react';

import {API} from '../services/api-service';


function CameraRegistration() {

    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [mp, setMp] = useState('');

    const addClicked = () => {
        API.useFetch(
            "http://127.0.0.1:8000/api/cameras/", 
            'POST', 
            '4b480f02e1b4e8ae7c03600e5d19553ebc46b912', 
            {name, brand, mp_number: mp}
        )
        .then(data => console.log(data))
        .catch( error => console.log(error))
    }

    return(
        <React.Fragment>
                <div>
                    <h2>Camera registration form</h2>
                    <label htmlFor="name">Camera model</label><br/>
                    <input id="title" type="text" placeholder="name" 
                        onChange={ evt => setName(evt.target.value) }
                    /><br/><br/>
                    <label htmlFor="brand">Brand</label><br/>
                    <input id="title" type="text" placeholder="brand" 
                        onChange={ evt => setBrand(evt.target.value) }
                    /><br/><br/>
                    <label htmlFor="mp_number">MP number</label><br/>
                    <input id="title" type="text" placeholder="mp number" 
                        onChange={ evt => setMp(evt.target.value) }
                    /><br/><br/>
                    <button onClick={addClicked}>Add to inventory</button>
                </div>
        </React.Fragment>
    )
}

export default CameraRegistration;