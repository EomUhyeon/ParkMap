import React, { createContext, useContext, useState } from 'react';


const ParkSelectionContext = createContext();

export const DataProvider = ({ children }) => {
  const [parkSelection, setParkSelection] = useState({
    관리번호: '',
    공원명: '',
    공원구분: '',
  });

  return (
    <ParkSelectionContext.Provider value={{ parkSelection, setParkSelection }}>
      {children}
    </ParkSelectionContext.Provider>
  );
};

export const getParkSelection = () => {
  const context = useContext(ParkSelectionContext);
  return context.parkSelection;
};


export const setParkSelection = () => {
  const context = useContext(ParkSelectionContext);
  return context.setParkSelection;
};

