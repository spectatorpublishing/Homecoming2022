import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 140px; 
    @media only screen and (max-width: 768px){
        padding: 0px;
    }
`;

const Container = styled.div`
    background-color: #ffffff;
    height: 50rem;
    color: #0046A6;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    @media only screen and (max-width: 768px){
        height: 63rem;
    }
`;

//image in header
const HeaderImage = styled.div`
    background-image: url("https://cloudfront-us-east-1.images.arcpublishing.com/spectator/A2OWUM7VERHHBDEZ6PXBU7LSEM.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0rem;
    padding-bottom: 2rem;
    display: flex;
    justify-content: flex-end;
`;

//"Homecoming 2022"
const Headline = styled.div`
    position: absolute;
    width:100%;
    height:100%;
    font-family: 'IBM Plex Serif Bold', serif;
    font-weight: bold;
    font-size: 3.5rem;
    padding: 0rem;
    left: 2rem;
    top: 83%;
    @media only screen and (max-width: 768px){
        font-size: 1.2rem;
        top: 93%;
        left: 1.8rem;
    }
`;

//div for letter from editor
const LetterBox = styled.div`
    height: auto;
    background-color: #d2e1ed;
    width: 100%;
    overflow-wrap: break-word;
`;

//"Letter from Editor"
const LetterHeader = styled.h2`
    font-family: 'IBM Plex Serif Medium', serif;
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

//body text and sign off on letter
const Body = styled.h5`
    font-family: 'Roboto Light', sans-serif;
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Body>
            </LetterBox>
        </Container>
        </Wrapper>
    )
};

export default LetterFromEditor;