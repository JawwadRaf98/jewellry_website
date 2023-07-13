
import React, { useState } from 'react';
export const CurrentShopContext = React.createContext();

function CurrentShopProvider({ children }) {
    const [currentShop, setCurrentShop] = useState(0)
    return (
        <CurrentShopContext.Provider value={{
            currentShop,
            setCurrentShop
        }}>
            {children}
        </CurrentShopContext.Provider>
    )
}
export default CurrentShopProvider;