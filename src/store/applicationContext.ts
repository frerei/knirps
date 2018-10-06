import * as React from 'react';

export interface AppContextInterface {
  active: boolean,
  players: {
    top: Array<any>,
    mr: Array<any>,
    bottom: Array<any>,
    ml: Array<any>
  }
}

const ctxt = React.createContext<AppContextInterface | null>(null);

export const AppContextProvider = ctxt.Provider;

export const AppContextConsumer = ctxt.Consumer;