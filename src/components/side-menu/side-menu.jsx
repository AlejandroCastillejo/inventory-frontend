import React from "react";

import MenuOptions from "../menu-options/menu-options";

const SideMenu = ({ tags, selectedTag }) => {
  return <MenuOptions tags={tags} selectedTag={selectedTag} />;
};

export default SideMenu;
