import React, { useState, useEffect } from 'react';

function DroneRegistration() {

    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [sn, setSn] = useState('');

    const [cameras, setCameras] = useState([]);
    const [selectedCameras, setSelectedCameras] = useState([]);

    const addClicked = () => {
        name && brand &&
        fetch("http://127.0.0.1:8000/api/drones/", {
            method: 'POST',
            headers: {
                'Authorization': 'Token 4b480f02e1b4e8ae7c03600e5d19553ebc46b912',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: name, brand: brand, serial_number: sn, supported_cameras: selectedCameras})
        }).then( resp => resp.json() )
        .then(data => console.log(data))
        .catch( error => console.log(error))
    }

    useEffect( () => {
        fetch("http://127.0.0.1:8000/api/cameras/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then( resp => resp.json())
        .then( data => setCameras(data) )
        .catch( error => console.log(error))
    }, [])

    const handleChangeMultiple = (evt) => {
        const { options } = evt.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
          if (options[i].selected) {
            value.push(options[i].value);
          }
        }
        setSelectedCameras(value);
    };

    // console.log(selectedCameras)

    return(
        <React.Fragment>
                <div>
                    <h2>Drone registration form</h2>

                    <label htmlFor="name">Drone model</label><br/>
                    <input id="title" type="text" placeholder="name" 
                        onChange={ evt => setName(evt.target.value) }
                    /><br/><br/>

                    <label htmlFor="brand">Brand</label><br/>
                    <input id="title" type="text" placeholder="brand" 
                        onChange={ evt => setBrand(evt.target.value) }
                    /><br/><br/>

                    <label htmlFor="serial_number">Serial number</label><br/>
                    <input id="title" type="text" placeholder="serial number" 
                        onChange={ evt => setSn(evt.target.value) }
                    /><br/><br/>

                    <label htmlFor="cameras_select">Select supported cameras</label><br/>
                    <select name="cameras_select" id="cameras_select" multiple
                        onChange={ evt => handleChangeMultiple(evt) }
                        >
                        {cameras && cameras.map( camera => {
                            return (
                                <option key={camera.id} value={camera.id} 
                                >
                                    {camera.brand} {camera.name}    
                                </option>
                            )
                        })}
                        
                    </select><br/><br/>

                    <button onClick={addClicked}>Add to inventory</button>
                </div>
        </React.Fragment>
    )
}

export default DroneRegistration;