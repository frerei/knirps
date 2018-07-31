import * as React from 'react';
import styled from 'styled-components';

import Player from './player-container'

export interface SeatsContainerState {
  players?: Array<ItemProps>;
  active: boolean;
  limit: number;
}

export interface SeatsContainerProps {
    children?: React.ReactNode;
    active: boolean;
    position: string;
    limit: number;
}

export interface ItemProps {
  level: number;
  bonus: number;
}

export interface StyledSeatProps {
  position: string;
}

const StyledSeats = styled.div`   
  ${(props: StyledSeatProps) => props.position && `
  grid-area:${props.position};
  `}
  display:inline-flex;
  text-align:center;
`;

export class BottomSeats extends React.Component<SeatsContainerProps, SeatsContainerState> {
 
    public state = {
      players: [],
      active: this.props.active,
      limit: this.props.limit
    };
  
    public render(): JSX.Element {
      const { props } = this;
  
      return (
        <StyledSeats onClick={e => this.handleClick(e, props.active)} position={props.position}>
        {this.state.players &&
          this.state.players.length >= 1 ?
            this.state.players.map((item: ItemProps, key) => (
                <Player key={key} level={item.level} bonus={item.bonus} active={props.active} />
            ))
          : ''
        }
        </StyledSeats>
     );
    }

    private handleClick = (e: React.MouseEvent<HTMLElement>, active: boolean) => {
        active && e.stopPropagation()
        
        const players = this.state.players;

        if (players.length >= this.state.limit || active) { return null; } 
        // @ts-ignore
        this.setState({players: this.state.players.concat({level: 1, bonus: 0 })})
        this.setState({active: active});

        return true;
    }
}

export default BottomSeats;