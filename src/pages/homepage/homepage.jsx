import React, { useState, useEffect, useCallback } from "react";

import { InventoryAPI } from "../../services/inventory-api-services";

import "./homepage.scss";

import ToggleButtons from "../../components/toggle-buttons/toggle-buttons";
import ItemsList from "../../components/items-list/items-list";
import AddItem from "../../components/add-item/add-item.component";

function HomePage() {
  const menuTags = ["drones", "cameras", "gimbals", "batteries"];
  const [selectedTag, setSelectedTag] = useState("none");
  const [itemsToList, setItemsToList] = useState([]);

  const [showAddItem, setShowAddItem] = useState(false);
  const [deleteModeOn, setDeleteModeOn] = useState(false);
  const toggleShowAddItem = useCallback(() => {
    setShowAddItem(!showAddItem);
  }, [setShowAddItem, showAddItem]);
  const toggleDeleteModeOn = () => setDeleteModeOn(!deleteModeOn);

  // const updateSelectedTag = selected => {
  //     setSelectedTag(selected)
  // }

  // useEffect(() => {
  const updateList = useCallback(() => {
    InventoryAPI.getItemsList(selectedTag)
      .then((data) => setItemsToList(data))
      .catch((error) => {
        console.log(error);
        setItemsToList("");
      });
    console.log("updateList");
  }, [selectedTag]);

  useEffect(() => {
    updateList();
  }, [selectedTag, updateList]);

  console.log("u");
  // debugger
  return (
    <div className="homepage">
      {/* <ToggleButtons tags={menuTags} selectedTag={updateSelectedTag}/> */}
      <ToggleButtons
        tags={menuTags}
        selectedTag={(selected) => setSelectedTag(selected)}
      />
      <div>
        <div className="body-buttons">
          <span className="body-button" onClick={toggleShowAddItem}>
            &#x271A;{" "}
          </span>
          <span className="body-button" onClick={() => toggleDeleteModeOn()}>
            DELETE ITEMS
          </span>
        </div>
        <ItemsList
          items={itemsToList}
          dimmer={showAddItem}
          deleteMode={deleteModeOn}
        />
      </div>
      {showAddItem && (
        <AddItem
          items={selectedTag}
          closeForm={() => toggleShowAddItem()}
          updateList={updateList}
        />
      )}
    </div>
  );
}

export default HomePage;
