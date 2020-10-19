import React, { useState, useEffect, useCallback } from "react";

import { InventoryAPI } from "../../services/inventory-api-services";

import "./homepage.scss";

import ToggleButtons from "../../components/toggle-buttons/toggle-buttons";
import ItemsList from "../../components/items-list/items-list";
import AddItem from "../../components/add-item/add-item.component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  const menuTags = ["drones", "cameras", "gimbals", "batteries"];
  const [selectedTag, setSelectedTag] = useState(null);
  const [itemsToList, setItemsToList] = useState([]);

  const [showAddItem, setShowAddItem] = useState(false);
  const [deleteModeOn, setDeleteModeOn] = useState(false);

  const toggleShowAddItem = useCallback(() => {
    setShowAddItem(!showAddItem);
  }, [setShowAddItem, showAddItem]);

  const toggleDeleteModeOn = useCallback(() => {
    setDeleteModeOn(!deleteModeOn);
  }, [setDeleteModeOn, deleteModeOn]);

  const updateList = useCallback(async () => {
    selectedTag &&
      (await InventoryAPI.getItemsList(selectedTag)
        .then((data) => setItemsToList(data))
        .catch((error) => {
          console.log(error);
          setItemsToList("");
        }));
    console.log("updateList");
    setDeleteModeOn(false);
  }, [selectedTag]);

  useEffect(() => {
    updateList();
  }, [selectedTag, updateList]);

  console.log("render homepage");
  // debugger
  return (
    <div className="homepage">
      <ToggleButtons
        tags={menuTags}
        selectedTag={(selected) => setSelectedTag(selected)}
      />
      <div>
        <div className="body-buttons">
          <button
            className="body-button"
            onClick={() => {
              toggleShowAddItem();
              setDeleteModeOn(false);
            }}
          >
            &#x271A; Add Item
          </button>
          <button className="body-button" onClick={() => toggleDeleteModeOn()}>
            <FontAwesomeIcon icon={faTrash} /> <span>Delete items</span>
          </button>
        </div>
        <ItemsList
          items={itemsToList}
          itemsGroup={selectedTag}
          dimmer={showAddItem}
          updateList={updateList}
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
