// Write your Character component here
import React from 'react';
import styled from 'styled-components';


export default function Character(props) {
    const {character} = props;

    return (
        <div>
            <h1>{character.name}</h1>
            <div class="character-info">
                <p>Gender: {character.gender}</p>
                <p>Height: {character.height}</p>
                <p>Mass: {character.mass}</p>
                <p>BirthYear: {character.birth_year}</p>
                <p>Eye Color: {character.eye_color}</p>
                <p>Hair Color: {character.hair_color}</p>
                <p>Skin Color: {character.skin_color}</p>
            </div>
        </div>
    )
}