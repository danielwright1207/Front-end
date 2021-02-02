import React from 'react';
import styled from 'styled-components';


export default function Cards(props) {

    return (
        <StyledCard>
            <h3>Name={props.name}</h3>
            <p>Type={props.type}</p>
            <p>Time={props.time}</p>
            <p>Location={props.location}</p>
        </StyledCard>
    )
}

const StyledCard = styled.div`

    border: 3px solid black;

`;