import * as React from 'react';
import styled from 'styled-components';

import Seats from  './seats-container';
import Table from '../components/table';
import Room from '../components/room'

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
 
  public state = {
    // Add State here
    active: false
  };

  public render(): JSX.Element {
    // const { props } = this;

    return (
      <Room>
          <Seats position="top" active={this.state.active}  limit={4} />
          <Seats position="ml" active={this.state.active} limit={1} />
          <StyledTable onClick={e => this.startGame(e)}>Start Game</StyledTable>
          <Seats position="mr" active={this.state.active} limit={1} />
          <Seats position="bottom" active={this.state.active} limit={4} />
      </Room>
    );
  }

  private startGame = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    // Manipulate state here
    this.setState({active: true})
    console.log('Table - Start Game ' + this.state.active)
  }
}

export default RoomContainer;
