import React, { useState } from "react";

import "./small-menu.scss";

import MenuOptions from "../menu-options/menu-options";
import { useCallback } from "react";

function SmallMenu({ tags, selectedTag }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handlerToggle = () => {
    setToggleMenu(!toggleMenu);
    console.log("toggleMenu");
  };

  return (
    <div className="small-menu">
      <button className="small-menu-button" onClick={handlerToggle}>
        &#9776;
      </button>

      {toggleMenu && (
        <MenuOptions
          className="small-menu-options"
          tags={tags}
          selectedTag={selectedTag}
          handlerToggle={handlerToggle}
        />
      )}
    </div>
  );
}

export default SmallMenu;