import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    @media only screen and (max-width: 768px){
        padding: 0px;
    }
`;

// const Container = styled.div`
//     background-color: #ffffff;
//     height: 50rem;
//     color: #0046A6;
//     display: flex;
//     align-items: flex-start;
//     justify-content: center;
//     flex-direction: column;
//     @media only screen and (max-width: 768px){
//         height: 63rem;
//     }
// `;

//div for letter from editor
const LetterBox = styled.div`
    height: auto;
    background-color: #d2e1ed;
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
    overflow-wrap: break-word;
`;

//"Letter from Editor"
const LetterHeader = styled.h2`
    font-family: 'IBM Plex Serif', 'Georgia', Times, serif;
    font-weight: normal;
    font-size: 3rem;
    padding-left:5rem; 
    margin-bottom: -0.05rem;
    padding-top: 2rem;
    line-height:1rem;
    width:100%;
    @media only screen and (max-width: 768px){
        font-size: 1.5rem;
    }
`;

//body text and sign off on letter
const Body = styled.h5`
    font-family: 'Roboto Light', sans-serif;
    font-weight: normal;
    padding-left:5rem; 
    padding-right: 5rem;
    display: flex;
    font-size:1.5rem;
    align-items: center;
    width: 100%;
    overflow-wrap: break-word;
    @media only screen and (max-width: 768px){
        font-size: 1.2rem;
        text-align: center;
    }
`;

const LetterFromEditor = ({ }) => {
    return (
        <Wrapper>
                <LetterHeader>
                    Letter from the Editor
                </LetterHeader>
                <LetterBox>
                <Body>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Body>
                </LetterBox>
        </Wrapper>
    )
};

export default LetterFromEditor;