import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

const CharCard = styled.div`
  background: #99f3eb;
  color: black;
  width: 30%;
  display: inline-block;
  align-items: center;
  margin: 15px 5px;
`;

const CharImage = styled.img`
    width: 100%;
`;

export default function CharacterCard (props) {
    return (
        <CharCard key={props.id}>
            <CharImage alt="Rick and Morty" src={props.image} />
            <h2>{props.name}</h2>
            <Button outline color="danger">{props.species}</Button>
        </CharCard>
    );
};
