import React from "react";

import "./add-item.styles.scss";

import DroneRegistration from "./drone-registration";
import CameraRegistration from "./camera-registration";

function AddItem({ items, closeForm, updateList }) {
  return (
    <div className="add-item">
      <span className="close-button" onClick={closeForm}>
        &#10005;
      </span>
      {
        {
          drones: <DroneRegistration updateList={updateList} />,
          cameras: <CameraRegistration updateList={updateList} />,
        }[items]
      }
    </div>
  );
}

export default AddItem;
