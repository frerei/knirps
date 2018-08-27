import * as React from 'react';
import styled from 'styled-components';

import Player from './player-container'
import { players, addPlayer } from '../store/application'
import { PlayerProps } from '../components/player/player';

export interface SeatsContainerState {
  players?: Array<PlayerProps>;
  active: boolean;
  limit: number;
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

export class BottomSeats extends React.Component<any, SeatsContainerState> {

  public state = {
    players: [],
    active: this.props.active,
    limit: this.props.limit
  };

  public render(): JSX.Element {
    const { props } = this;
    
    return (
      <StyledSeats onClick={e => this.handleClick(e, props.active)} position={props.position}>
        {props.position && players.get(state =>
          state.list[props.position].map(
            (item: PlayerProps, key: string) => (
              <Player
                avatar={item.avatar}
                key={key}
                level={item.level}
                bonus={item.bonus}
                active={props.active}
              />
            )
          )
        )}
      </StyledSeats>
    );
  }

  private handleClick = (e: React.MouseEvent<HTMLElement>, active: boolean) => {
    if (active) {e.stopPropagation(); return null}

    addPlayer({ level: 1, bonus: 0, active: false, avatar: true}, this.props.position, this.props.limit)
    return true;
  }
}

export default BottomSeats;