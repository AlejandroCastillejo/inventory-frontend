import React, { createContext, useState } from "react";

const MenuContext = createContext(null);

const MenuContextProvider = ({children}) => {
    const menuTags = ["drones", "cameras", "gimbals", "batteries"];
    const [selectedTag, setSelectedTag] = useState(menuTags[0]);

    return <MenuContext.Provider value={{menuTags, selectedTag, setSelectedTag}}>
            {children}
        </MenuContext.Provider>
};

export {MenuContext, MenuContextProvider}