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
        <StyledContainer>
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
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    width: 50%;
    margin: 0 auto;
    background: rgba(11,55,47, 20%);
    box-shadow: 0px 1px 6px -2px rgba(42, 43, 46, 60%);
    padding: 1%;
    border-radius: 1%;
`

const StyledAccordion = styled.div`
    display: flex;
    flex-direction: column;

    .accordion {
        background-color: #2A2B2E;
        color: #444;
        cursor: pointer;
        padding: 18px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid rgba(255,255,0, 30%);
        outline: none;
        transition: background-color 0.4s ease-in-out;
        &:hover {
            filter: brightness(70%);
        }
    }

    .accordion-title {
        font-size: 20px;
        color: white;
    }

    .accordion-content {
        overflow: hidden;
        transition: max-height 0.4s ease-in-out;
        text-align: left;
        font-size: 20px;
        line-height: 2;
        padding-left: 1%;
        background-color: #2A2B2E;
        color: white;
        border: 1px solid rgba(255,255,0, 40%);
        border-top: none;
    }
`
