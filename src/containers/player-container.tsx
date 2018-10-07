import * as React from 'react';
import Player, { PlayerProps } from '../components/player/player';

import { AppContextConsumer } from '../store/appContext';

export interface PlayerContainerState {
  level: number;
  bonus: number;
}

export class PlayerContainer extends React.Component<PlayerProps, PlayerContainerState> {

  public state = {
    level: this.props.level,
    bonus: this.props.bonus
  };

  public render(): JSX.Element {

    return (
      <AppContextConsumer>
        {appContext => appContext && (
              <Player
                addLevel={() => this.handlePlayerClick('addL', appContext.active)}
                removeLevel={() => this.handlePlayerClick('rmL', appContext.active)}
                addBonus={() => this.handlePlayerClick('addB', appContext.active)}
                removeBonus={() => this.handlePlayerClick('rmB', appContext.active)}
                level={this.state.level}
                bonus={this.state.bonus}
                avatar={this.props.avatar}
              />
        )}
      </AppContextConsumer>
    );
  }

  private handlePlayerClick = (text: string, active: boolean) => {

    if (!active) { return false; }

    switch (text) {
      case 'addL':
        this.setState({ level: this.state.level + 1 })
        break;
      case 'rmL':
        this.state.level >= 2 ? this.setState({ level: this.state.level - 1 }) : null;
        break;
      case 'addB':
        this.setState({ bonus: this.state.bonus + 1 })
        break;
      case 'rmB':
        this.state.bonus >= 1 ? this.setState({ bonus: this.state.bonus - 1 }) : null;
        break;
      default:
        return null;
    }

    return true;
  }
}

export default PlayerContainer;
