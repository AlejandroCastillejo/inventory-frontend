import React, { useEffect, useState } from "react";
import { useCallback } from "react";

import {
  ButtonGroupContainer,
  ButtonToggleContainer,
} from "./menu-options.styles";

function MenuOptions({ tags, selectedTag, handlerToggle }) {
  const [active, setActive] = useState(tags[0]);

  useEffect(() => {
    selectedTag(active);
  }, [selectedTag, active]);

  return (
    <ButtonGroupContainer>
      {tags.map((tag) => (
        <ButtonToggleContainer
          key={tag}
          nav={tag}
          active={active === tag}
          onClick={() => setActive(tag)}
        >
          {tag}
        </ButtonToggleContainer>
      ))}
    </ButtonGroupContainer>
  );
}

export default MenuOptions;
