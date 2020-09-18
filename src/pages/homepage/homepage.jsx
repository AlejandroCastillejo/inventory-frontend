import React, { useState, useEffect } from 'react';

import {API} from '../../services/api-service';

import './homepage.scss';

import ToggleButtons from '../../components/toggle-buttons';
import ItemsList from '../../components/items-list';
import AddItem from '../../components/add-item/add-item.component';


function HomePage() {
    const menuTags = ['Drones', 'Cameras', 'Gimbals', 'Batteries'];
    const [selectedTag, setSelectedTag] = useState('none');
    const [itemsToList, setItemsToList] = useState([]);

    const [showAddItem, setShowAddItem] = useState(false);
    const switchShowAddItem = () => setShowAddItem(!showAddItem);
  

    const updateSelectedTag = selected => {
        setSelectedTag(selected)
    }


    useEffect(() => {
        let items = '';

        if (selectedTag === 'Drones') items = 'drones';
        else if (selectedTag === 'Cameras') items = 'cameras';
        else {
            setItemsToList('');
            return;
        }

        API.useFetch(`http://127.0.0.1:8000/api/${items}`, 'GET')
        .then(data => setItemsToList(data))
        .catch( error => console.log(error))

    }, [selectedTag]);


    return(
        <div className='homepage'>
            <ToggleButtons tags={menuTags} selectedTag={updateSelectedTag}/>
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