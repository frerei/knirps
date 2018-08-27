
import * as React from 'react';
import styled from 'styled-components';

export interface RoomProps {
    children?: React.ReactNode,
}

const StyledRoom = styled.div`
    display: grid;
    overflow:hidden;
    background-image:linear-gradient(-180deg, #ffffff, #efefef);
    grid-gap: 10px;
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    width: 100%;
    height: 100%;
    padding:1em;
    max-width:720px;
    grid-template-columns: 25% 50% 25%;
    grid-template-rows: 33% 33% 33%;
    grid-template-areas: 
        "top top top"
        "ml table mr"
        "bottom bottom bottom"
    ;
`;

const Room: React.StatelessComponent<RoomProps> = (props): JSX.Element => (
    <StyledRoom>
        {props.children}
    </StyledRoom>
);

export default Room;