// Write your Character component here
import React from 'react';
import styled from 'styled-components';


export default function Character(props) {
    const {character} = props;

    return (
        <StyledAccordion>
            <button className="accordion">
                <h1 className="accordion-title">{character.name}</h1>
                <h1 className="accordion-title">{character.birth_year}</h1>
            </button>
            <div class="accordion-content">
                <p>Gender: {character.gender}</p>
                <p>Height: {character.height}</p>
                <p>Mass: {character.mass}</p>
                <p>BirthYear: {character.birth_year}</p>
                <p>Eye Color: {character.eye_color}</p>
                <p>Hair Color: {character.hair_color}</p>
                <p>Skin Color: {character.skin_color}</p>
            </div>
        </StyledAccordion>
    )
}

const StyledAccordion = styled.div`
    display: flex;
    flex-direction: column;

    .accordion {
        background-color: #eee;
        color: #444;
        cursor: pointer;
        padding: 18px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: none;
        outline: none;
        transition: background-color 0.6s ease;
        &:hover, .active {
            background-color: #ccc;
        }
    }

    .accordion-title {
        font-size: 20px;
    }
`