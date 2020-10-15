import React, { useEffect, useState } from "react";

import { ButtonGroup, ButtonToggle } from "./toggle-buttons.styles";

function ToggleButtons({ tags, selectedTag }) {
  const [active, setActive] = useState(tags[0]);

  useEffect(() => {
    selectedTag(active);
  }, [selectedTag, active]);

  return (
    <ButtonGroup>
      {tags.map((tag) => (
        <ButtonToggle
          key={tag}
          active={active === tag}
          onClick={() => setActive(tag)}
        >
          {tag}
        </ButtonToggle>
      ))}
    </ButtonGroup>
  );
}

export default ToggleButtons;
