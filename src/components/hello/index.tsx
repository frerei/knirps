
import * as React from 'react';
import styled from 'styled-components';

export interface HelloProps {
  name: string;
  enthusiasmLevel?: number;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const StyledHello = styled.div`
  text-align: center;
  margin: 20px;
  font-size: 48px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const StyledButton = styled.button`
    margin-left: 25px;
    margin-right: 25px;
    font-size: 40px;    
    min-width: 50px;
`;

const Hello: React.StatelessComponent<HelloProps> = (props): JSX.Element => (
    <StyledHello>
      <div className="greeting">
        Hello {props.name}
      </div>
      <div>
        <StyledButton onClick={props.onClick}>-</StyledButton>
        <StyledButton>+</StyledButton>
      </div>
    </StyledHello>
);

export default Hello;