// Write your Character component here
import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterGrid() {
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/`)
        .then(response => {
            console.log(response.data.results);
            setCharacter(response.data.results);
        })
        .catch(err => {
            console.log("ERROR", err);
        });
    }, []);
    return (
        <div className="entry">
            {character.map(character => {
                return(<CharacterCard image={character.image} name={character.name} key={character.id} species={character.species} />)
            })}
        </div>
    )
}