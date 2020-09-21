import React, { useState, useEffect } from 'react';

import {InventoryAPI} from '../../services/inventory-api-services';

import './homepage.scss';

import ToggleButtons from '../../components/toggle-buttons';
import ItemsList from '../../components/items-list';
import AddItem from '../../components/add-item/add-item.component';


function HomePage() {
    const menuTags = ['drones', 'cameras', 'gimbals', 'batteries'];
    const [selectedTag, setSelectedTag] = useState('none');
    const [itemsToList, setItemsToList] = useState([]);

    const [showAddItem, setShowAddItem] = useState(false);
    const switchShowAddItem = () => setShowAddItem(!showAddItem);
  
    // const updateSelectedTag = selected => {
    //     setSelectedTag(selected)
    // }

    useEffect(() => {
        InventoryAPI.getItemsList(selectedTag)
        .then(data => setItemsToList(data))
        .catch( error => {
            console.log(error);
            setItemsToList('');
        })

    }, [selectedTag]);


    return(
        <div className='homepage'>
            {/* <ToggleButtons tags={menuTags} selectedTag={updateSelectedTag}/> */}
            <ToggleButtons 
                tags={menuTags} 
                selectedTag={selected => setSelectedTag(selected)}
            />
            <div>
                <div className='body-buttons'>
                    <span className='body-button' onClick={() => switchShowAddItem()}>ADD ITEM</span>
                </div>
                <ItemsList items={itemsToList} dimmer={showAddItem}/>
            </div>
            {showAddItem && <AddItem />}

        </div>
    )
};

export default HomePage;