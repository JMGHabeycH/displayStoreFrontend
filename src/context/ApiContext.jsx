import { createContext, useContext } from 'react';
import { getItems, getItemById } from '../api';


const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
    const apiMethods = {
      getItems,
      getItemById,
    };
    return (
    <ApiContext.Provider value={apiMethods}>
      {children}
    </ApiContext.Provider>
    )
};

export const useApi = () => useContext(ApiContext);
