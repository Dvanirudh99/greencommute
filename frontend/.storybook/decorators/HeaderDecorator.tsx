import React, { useMemo } from "react";
import { BrowserRouter } from "react-router-dom";
import { UserLocationContext } from "../../src/Store";

const HeaderDecorator = (Story: any) => {
  const [userLocation, setUserLocation] = React.useState<string>(
    "East Marredpally, Secunderabad"
  );
  const userLocationValue = useMemo(
    () => ({ userLocation, setUserLocation }),
    [userLocation]
  );
  return (
    <UserLocationContext.Provider value={userLocationValue}>
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    </UserLocationContext.Provider>
  );
};

export default HeaderDecorator;
