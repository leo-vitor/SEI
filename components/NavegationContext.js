import React from 'react';

export const NavigationContext = React.createContext(null);

export const NavigationProvider = ({ children, navigationRef }) => (
  <NavigationContext.Provider value={navigationRef}>
    {children}
  </NavigationContext.Provider>
);