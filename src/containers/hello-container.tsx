import * as React from 'react';
import HelloComponent from '../components/hello';

export interface HelloContainerState {
  active?: boolean;
}

export interface HelloContainerProps {
  name: string;
}

export class Hello extends React.Component<HelloContainerProps, HelloContainerState> {
 
  public state = {
    // Add State here
    active: false
  };

  public render(): JSX.Element {
    const { props } = this;

    return (
      <HelloComponent 
        name={props.name}
        {...this.state.active && 'active'}
        onClick={e => this.handleClick(e)} 
      />
    );
  }

  private handleClick = (e: React.MouseEvent<HTMLElement>) => {
    // Manipulate state here
    this.setState({active: true})
    console.log(this.state.active)
  }
}

export default Hello;
