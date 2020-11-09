import React, { useContext } from "react";

import { MenuContext } from "../../context/menu-context";

import {
  ButtonGroupContainer,
  ButtonToggleContainer,
} from "./menu-options.styles";

function MenuOptions({ handlerToggle }) {
  const { menuTags, selectedTag, setSelectedTag } = useContext(MenuContext);

  return (
    <ButtonGroupContainer>
      {menuTags.map((tag) => (
        <ButtonToggleContainer
          key={tag}
          nav={tag}
          active={selectedTag === tag}
          onClick={() => {
            setSelectedTag(tag);
            handlerToggle && setTimeout(() => handlerToggle(), 200);
          }}
        >
          {tag}
        </ButtonToggleContainer>
      ))}
    </ButtonGroupContainer>
  );
}

export default MenuOptions;
