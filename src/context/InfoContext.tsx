import React from "react";

export interface AppContextInterface {
  loggedIn: boolean;
  setLogin: any;
  authToken: any;
  setAuth: any;
}

export const InfoContext = React.createContext<AppContextInterface>({
  loggedIn: false,
  setLogin: () => {},
  authToken: 'Null',
  setAuth: () => {}
});