import React, { useEffect, useState } from 'react';

import ToggleButtonContainer from './toggle-button.styles'

function ToggleButton({ tags, selectedTag }) {
    
  const [active, setActive] = useState(tags[0]);

  useEffect(() => {
      selectedTag(active);
  }, [selectedTag, active])

  return (
        <ToggleButtonContainer
          key={tag}
          active={active === tag}
          onClick={ () => setActive(tag) }
        >
          {tag}
        </ToggleButtonContainer>
  );
}

export default ToggleButton;