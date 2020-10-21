import React, { useRef } from "react";

import { InventoryAPI } from "../../services/inventory-api-services";

import "./items-list.scss";

function ItemsList({ items, itemsGroup, dimmer, updateList, deleteMode }) {
  const headerCheckbox = useRef(null);
  const listCheckbox = useRef([]);

  let itemsWithSelector =
    items && items.map((item) => ({ ...item, selected: false }));

  const toggleItemSelected = (evt) => {
    console.log(evt);

    itemsWithSelector = itemsWithSelector.map((item) =>
      item.id.toString() === evt.id ? { ...item, selected: evt.checked } : item
    );

    // let headercheckbox = document.getElementsByName("header-checkbox");
    // headercheckbox[0].checked = false;
    headerCheckbox.current.checked = false;

    console.log(itemsWithSelector);
  };

  const toggleAllItems = (evt) => {
    itemsWithSelector = itemsWithSelector.map((item) => ({
      ...item,
      selected: evt.checked,
    }));

    // let checkboxes = document.getElementsByName("list-checkbox");
    // for (var i = 0, n = checkboxes.length; i < n; i++) {
    //   checkboxes[i].checked = evt.checked;
    // }
    console.log(listCheckbox);
    for (var i = 0; i < listCheckbox.current.length; i++) {
      listCheckbox.current[i] &&
        (listCheckbox.current[i].checked = evt.checked);
    }
    console.log(itemsWithSelector);
    console.log(listCheckbox);
  };

  const deleteSelected = async () => {
    console.log("deleting");
    for (const item of itemsWithSelector) {
      if (item.selected === true) {
        console.log(item.id);
        await InventoryAPI.deleteItem(itemsGroup, item.id)
          .then((data) => console.log(data))
          .catch((error) => console.log(error));
      }
    }
    console.log("delete finished");
    updateList();
  };

  return (
    <div className={` items-list ${dimmer && "dimmer"} `}>
      <div className={` items-list-header ${deleteMode && "delete-mode"} `}>
        {deleteMode && (
          <input
            className="checkbox"
            type="checkbox"
            id="headerCheckbox"
            name="header-checkbox"
            ref={headerCheckbox}
            onChange={(event) => toggleAllItems(event.target)}
          />
        )}
        <span className="header-block">Brand</span>
        <span className="header-block">Model</span>
        <span className="header-block">Ref. number</span>
        <span className="header-block">Quantity</span>
      </div>

      <div className="items-list-body">
        {itemsWithSelector &&
          items.map((item, i) => {
            return (
              <div key={item.id}>
                <div className={`body-item ${deleteMode && "delete-mode"}`}>
                  {deleteMode && (
                    <input
                      className="checkbox"
                      type="checkbox"
                      id={item.id}
                      name="list-checkbox"
                      ref={(el) => (listCheckbox.current[i] = el)}
                      onChange={(event) => toggleItemSelected(event.target)}
                    />
                  )}

                  <span className="item-field">{item.brand} </span>
                  <span className="item-field">{item.name}</span>
                  {item.serial_number ? (
                    <span className="item-field">{item.serial_number} </span>
                  ) : (
                    <span className="item-field">n/a</span>
                  )}
                  {item.quantity ? (
                    <span className="item-field">{item.quantity}</span>
                  ) : (
                    <span className="item-field">-</span>
                  )}
                </div>
                {item.supported_cameras && (
                  <span className="item-extra-field">
                    Suported cameras: ...
                  </span>
                )}
              </div>
              // TODO: replace 'supported_cameras' for 'extra_information'. Fisrt make changes in the backend
            );
          })}
      </div>
      {deleteMode && (
        <button className="delete-button" onClick={deleteSelected}>
          DELETE SELECTED ITEMS
        </button>
      )}
    </div>
  );
}

export default ItemsList;
