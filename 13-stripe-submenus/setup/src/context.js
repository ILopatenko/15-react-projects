import React, { useState, useContext } from 'react';
import { Children } from 'react';
import App from './App';
import sublinks from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: '', links: [] });
  //SUBMENU
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((eachSublink) => eachSublink.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  //SIDEBAR
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
