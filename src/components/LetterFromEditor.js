import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    @media only screen and (max-width: 768px){
        padding: 0px;
    }
`;

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
    font-size: 2.5rem;
    padding-left:3rem; 
    margin-bottom: -0.05rem;
    padding-top: 2rem;
    @media only screen and (max-width: 768px){
        font-size: 2rem;
        text-align: left;
        padding:0rem 2rem;
    }
`;

//body text and sign off on letter
const Body = styled.h5`
    font-family: 'Roboto Light', sans-serif;
    font-weight: normal;
    padding-left:3rem; 
    padding-right: 5rem;
    display: flex;
    font-size:1.4rem;
    align-items: center;
    width: 100%;
    overflow-wrap: break-word;
    line-height: 2rem;
    @media only screen and (max-width: 768px){
        font-size: 1.1rem;
        padding:0rem 2rem;
        text-align: left;
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
                Dear readers, <br></br><br></br>
 
                    This year’s Homecoming is a time for celebration, as students, parents, alumni, and other Columbia affiliates come together in a moment of school spirit. Our second Homecoming since the start of the pandemic comes after a year of extensive change at the University, from readapting to in-person learning to pending leadership changes at Columbia’s highest levels. Throughout this tumult, the Lion spirit among the student body has grown in many ways, as we return to a campus life reminiscent of pre-pandemic days. 
                    
                    Amid this change, we pause for celebration. Homecoming weekend serves as a time to come together and to help find your community whether you are a first-year, senior, or even an alum. Whether you are the biggest Columbia Lions fan out there, or have never stepped foot in Wien Stadium, we hope this edition illuminates the depth of Homecoming, beyond just watching the Light Blue play against Dartmouth.
                    
                    We invite you to take a look at the stories that have shaped Homecoming this year, prepare for Saturday afternoon’s game, and reflect on the state of education and community at Columbia.
                    <br></br><br></br>
                    Go Lions! <br></br><br></br>
                    Clara Ence Morse, Editor in Chief<br></br>
                    Dia Gill, Managing Editor
 
                </Body>
                </LetterBox>
        </Wrapper>
    )
};

export default LetterFromEditor;