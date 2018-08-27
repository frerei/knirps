import * as React from 'react';
import Player, { PlayerProps } from '../components/player/player';

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
      <Player 
        addLevel={() => this.handleClick('addL', this.props.active)}
        removeLevel={() => this.handleClick('rmL', this.props.active)}
        addBonus={() => this.handleClick('addB', this.props.active)}
        removeBonus={() => this.handleClick('rmB', this.props.active)}
        level={this.state.level}
        bonus={this.state.bonus}
        avatar={this.props.avatar}
        active={false}
      />
    );
  }

  private handleClick = (text: string, active: boolean) => {

    if (!active) { return null; }

    switch (text) {
      case 'addL':
          this.setState({level: this.state.level + 1})
          break;
      case 'rmL':
          this.state.level >= 2 ? this.setState({level: this.state.level - 1}) : null;
          break;
      case 'addB':
          this.setState({bonus: this.state.bonus + 1})
          break;
      case 'rmB':
          this.state.bonus >= 1 ? this.setState({bonus: this.state.bonus - 1}) : null;
          break;
      default:
        return null;
    }

    return true;
  }
}

export default PlayerContainer;
