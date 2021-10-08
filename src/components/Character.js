// Write your Character component here
import React, { useState, useRef } from 'react';
import styled from 'styled-components';


export default function Character(props) {
    const {character} = props;

    const [activeState, setActiveState] = useState('');
    const [heightState, setHeightState] = useState('0px');

    const content = useRef(null);

    const toggleAccordion = () => {
        setActiveState(activeState === '' ? 'active' : '');
        setHeightState(activeState === '' ? '0px' : `${content.current.scrollHeight}px`);
    }

    return (
        <StyledAccordion>
            <button className={`accordion ${activeState}`} onClick={toggleAccordion}>
                <h2 className="accordion-title">{character.name}</h2>
                <h2 className="accordion-title">{character.birth_year}</h2>
            </button>
            <div ref={content} style={{maxHeight: `${heightState}`}} class="accordion-content">
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
    margin-bottom: 1%;

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
        &:hover {
            background-color: #ccc;
        }
    }

    .accordion-title {
        font-size: 20px;
    }

    .accordion-content {
        overflow: hidden;
        transition: max-height 0.6s ease;
        text-align: left;
        font-size: 20px;
        line-height: 2;
        padding-left: 1%;
    }
`