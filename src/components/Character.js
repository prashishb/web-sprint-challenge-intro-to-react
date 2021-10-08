// Write your Character component here
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import '../index.css'


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
                    <h2 className="accordion-title year">{character.birth_year}</h2>
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
    background: rgba(11,55,47, 15%);
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
        height: 8vh;
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
        font-family: 'Saira Stencil One', cursive;
        font-weight: 400;
        font-size: 32px;
        color: white;
        text-align: left;
    }
    .year {
        color: rgba(157, 133, 232);
        filter: brightness(60%);
        background: rgba(204, 204, 204);
        border-radius: 15px 30px;
        padding: 0.1% 3%;
    }

    .accordion-content {
        font-family: 'Saira Stencil One', cursive;
        font-weight: 400;
        font-size: 26px;
        overflow: hidden;
        transition: max-height 0.4s ease-in-out;
        text-align: left;
        line-height: 2;
        padding-left: 2%;
        background-color: #2A2B2E;
        color: white;
        border: 1px solid rgba(255,255,0, 40%);
        border-top: none;
    }

    @media (max-width: 750px) {
        .accordion {
            padding: 5px;
        }
        .accordion-title {
            font-size: 18px;
        }
        .accordion-content {
            font-size: 14px;
        }
    }

    @media (max-width: 450px) {
        .accordion {
            padding: 5px;
        }
        .accordion-title {
            font-size: 16px;
        }
        .year {
            display: none;
        }
        .accordion-content {
            font-size: 12px;
        }
    }
`
