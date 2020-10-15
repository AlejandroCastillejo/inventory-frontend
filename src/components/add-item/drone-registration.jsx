import React, { useState, useEffect } from "react";

import { InventoryAPI } from "../../services/inventory-api-services";

function DroneRegistration({ updateList }) {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [sn, setSn] = useState("");

  const [cameras, setCameras] = useState([]);
  const [selectedCameras, setSelectedCameras] = useState([]);

  const addClicked = async () => {
    await InventoryAPI.addNewDrone({
      name,
      brand,
      serial_number: sn,
      supported_cameras: selectedCameras,
    })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    updateList();
  };

  useEffect(() => {
    InventoryAPI.getItemsList("cameras")
      .then((data) => setCameras(data))
      .catch((error) => console.log(error));
  }, []);

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

  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        addClicked();
      }}
    >
      <h2>Drone registration form</h2>

      <label htmlFor="name">Drone model</label>
      <br />
      <input
        id="name"
        type="text"
        placeholder="name"
        required
        onChange={(evt) => setName(evt.target.value)}
      />
      <br />
      <br />

      <label htmlFor="brand">Brand</label>
      <br />
      <input
        id="brand"
        type="text"
        placeholder="brand"
        required
        onChange={(evt) => setBrand(evt.target.value)}
      />
      <br />
      <br />

      <label htmlFor="serial_number">Serial number</label>
      <br />
      <input
        id="serial_number"
        type="text"
        placeholder="serial number"
        onChange={(evt) => setSn(evt.target.value)}
      />
      <br />
      <br />

      <label htmlFor="cameras_select">Select supported cameras</label>
      <br />
      <select
        name="cameras_select"
        id="cameras_select"
        multiple
        onChange={(evt) => handleChangeMultiple(evt)}
      >
        {cameras &&
          cameras.map((camera) => {
            return (
              <option key={camera.id} value={camera.id}>
                {camera.brand} {camera.name}
              </option>
            );
          })}
      </select>
      <br />
      <br />

      <button type="submit">Add to inventory</button>
    </form>
  );
}

export default DroneRegistration;
