
import * as React from 'react';
import styled from 'styled-components';

export interface TableProps {
    // add interface
    onClick?: React.MouseEventHandler<HTMLElement>;
}

const StyledTable = styled.div`
  display:flex;
  background: #fff;
  box-shadow: 0 7px 14px 0 rgba(30, 39, 49, 0.1);
  border-radius: 4px;
  text-align: center;
  text-align:center;
  align-items:center;
  padding:0 auto;

  p {
      margin:0 auto;
  }

  &:active {
    box-shadow: 0 3px 7px 0 rgba(30, 39, 49, 0.1);
  }
`;

const Table: React.StatelessComponent<TableProps> = (props): JSX.Element => (
    <StyledTable onClick={props.onClick}>
        <p>{props.children}</p>
    </StyledTable>
);

export default Table;