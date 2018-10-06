import * as React from 'react';
import styled from 'styled-components';

import { AppContextConsumer } from '../store/appContext';

import Player from './player-container'
import { PlayerProps } from '../components/player/player';

export interface SeatsContainerState {
  position: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
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

export class BottomSeats extends React.Component<SeatsContainerState> {
  public render(): JSX.Element {
    const { props } = this;

    return (
      <AppContextConsumer>
        {appContext => appContext && (
          <StyledSeats 
            position={props.position}
            onClick={props.onClick}
          >
            {props.position && appContext.players[props.position].map(
                (item: PlayerProps, key: string) => (
                  <Player
                    avatar={item.avatar}
                    key={key}
                    level={item.level}
                    bonus={item.bonus}
                    active={appContext.active}
                  />
                )
              )
            }
          </StyledSeats>
        )}
      </AppContextConsumer>
    )
  }
}

export default BottomSeats;