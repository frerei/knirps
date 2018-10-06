import * as React from 'react';
import styled from 'styled-components';

import { AppContextInterface, AppContextProvider } from '../store/applicationContext';

import Seats from  './seats-container';
import Table from '../components/table/table';
import Room from '../components/room/room';

export interface RoomContainerState {
  active?: boolean;
}

export interface RoomContainerProps {
    children?: React.ReactNode,
    onClick?: React.MouseEventHandler<HTMLElement>;
}

const StyledTable = styled(Table)`
   grid-area: table;
`;

export class RoomContainer extends React.Component<RoomContainerProps, RoomContainerState> {
 
  public state: AppContextInterface = {
    active: false,
    players: {
      top: [],
      mr: [],
      bottom: [],
      ml: []
    }
  };

  public render(): JSX.Element {
    // const { props } = this;

    return (
      <AppContextProvider value={this.state}>
        <Room>
            <Seats
              position="top"
              onClick={() => this.handleClick('top', 4)}
            />
            <Seats 
              position="ml"
              onClick={() => this.handleClick('ml', 1)}
            />
            <StyledTable onClick={e => this.startGame(e)}>{this.state.active ? 'Game running' : 'Start Game'}</StyledTable>
            <Seats 
              position="mr"
              onClick={() => this.handleClick('mr', 1)}
            />
            <Seats 
              position="bottom" 
              onClick={() => this.handleClick('bottom', 4)}
            />
        </Room>
      </AppContextProvider>
    );
  }

  private startGame = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const active = !this.state.active;

    this.setState({active: active})
  }

  private handleClick = (position: string, limit: number) => {
    if (this.state.active) { return false }
    const oldState = this.state.players[position];
    if (oldState.length >= limit) { return false }

    const newState = oldState;
    newState.push({ level: 1, bonus: 0, active: false, avatar: true })

    this.setState(newState)

    return true;
  }
}

export default RoomContainer;
