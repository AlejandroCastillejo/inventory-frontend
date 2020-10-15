import React, { useState } from "react";

import { InventoryAPI } from "../../services/inventory-api-services";

function CameraRegistration({ updateList }) {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [mp, setMp] = useState("");

  const addClicked = async () => {
    await InventoryAPI.addNewCamera({ name, brand, mp_number: mp })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    updateList();
  };

  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        addClicked();
      }}
    >
      <h2>Camera registration form</h2>

      <label htmlFor="name">Camera model</label>
      <br />
      <input
        id="title"
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
        id="title"
        type="text"
        placeholder="brand"
        onChange={(evt) => setBrand(evt.target.value)}
      />
      <br />
      <br />
      <label htmlFor="mp_number">MP number</label>
      <br />
      <input
        id="title"
        type="text"
        placeholder="mp number"
        onChange={(evt) => setMp(evt.target.value)}
      />
      <br />
      <br />

      <button type="submit">Add to inventory</button>
    </form>
  );
}

export default CameraRegistration;
