import React from 'react';
import styled from 'styled-components';
import './LetterFromEditor.css';

const Wrapper = styled.div`
    padding: 140px; 
    @media only screen and (max-width: 768px){
        padding: 0px;
    }
`;

const Container = styled.div`
    background-color: #ffffff;
    height: 40rem;
    color: #0046A6;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
`;

const HeaderImage = styled.div`
    background-image: url("https://cloudfront-us-east-1.images.arcpublishing.com/spectator/AGJIJKW7PJH6TDIJIPADBW5HDE.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0rem;
    display: flex;
    justify-content: flex-end;
`;

const Headline = styled.div`
    position: absolute;
    width:100%;
    height:100%;
    font-family: "IBM Plex Serif Bold", serif;
    font-weight: bold;
    font-size: 3.5rem;
    margin-left: 2rem;
    padding: 0rem;
    @media only screen and (max-width: 768px){
        font-size: 1.2rem;
    }
`;

const LetterBox = styled.div`
    height: auto;
    background-color: #d2e1ed;
    width: 100%;
    overflow-wrap: break-word;
`;

const LetterHeader = styled.h2`
    font-family: "IBM Plex Serif Medium", serif;
    font-weight: normal;
    font-size: 2rem;
    margin-left: 2.25rem;
    padding-top: 2rem;
    width:100%;
    @media only screen and (max-width: 768px){
        font-size: 1rem;
        margin-left: 1.9rem;
    }
`;

const Body = styled.h5`
    font-family: "Roboto Light", sans-serif;
    font-weight: normal;
    padding-left: 2.25rem; 
    margin-right: 3rem;
    overflow-wrap: break-word;
    @media only screen and (max-width: 768px){
        font-size: 0.75rem;
        padding-left: 1.8rem; 
        margin-right: 2.5rem;
    }
`;

const LetterFromEditor = ({ }) => {
    return (
        <Wrapper>
        <Container>
            <HeaderImage>
                <Headline>Homecoming 2022</Headline>
            </HeaderImage>
            <LetterBox>
                <LetterHeader>
                    Letter from the Editor
                </LetterHeader>
                <Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Body>
            </LetterBox>
        </Container>
        </Wrapper>
    )
};

export default LetterFromEditor;