
import * as React from 'react';
import styled from 'styled-components';

export interface TableProps {
    // add interface
    onClick?: React.MouseEventHandler<HTMLElement>;
}

const StyledTable = styled.div`
  background: brown;
  border-radius:12px;
  text-align:center;
  align-items:center;
`;

const Table: React.StatelessComponent<TableProps> = (props): JSX.Element => (
    <StyledTable onClick={props.onClick}>
        {props.children}
    </StyledTable>
);

export default Table;