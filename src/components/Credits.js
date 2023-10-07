import React from 'react';
import styled from 'styled-components';
import { credits } from '../data/credits'

const Container = styled.div`
    width: 100%;
    background-color: #9FB3BF;
    color: #0046A6;
    padding-bottom:3rem;
`;

const HeaderDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const Header = styled.h1`
    text-align: center;
    width: 70%;
    font-size: 2.188rem;
    font-family: 'Kalam', cursive;
    font-weight: 400;
    padding-top:2rem;
    color: #000000;

    @media only screen and (max-width: 1216px){
        font-size: 2.0rem;
    }

    @media only screen and (max-width: 768px){
        width: 60%;
        font-size: 1.4rem;
        text-align: left;
    }

    @media only screen and (max-width: 600px){
        font-weight: 400;
        font-size: 1.4rem;
        padding-top:5rem;
    }
`;

const SectAndNames = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content:space-around;
    width: 100%;
    height: 160rem;
    margin-top: 2rem;

    @media only screen and (max-width: 1216px){
        height: 160rem;
    }
    @media only screen and (max-width: 1024px){
        height: 160rem;
    }

    @media only screen and (max-width: 768px){
        display: block;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: none;
        height: fit-content;
        margin-top:2rem;
        text-align: center;
    }  
`;

const Section = styled.div`
    font-size: 1.25rem;
    font-weight: 400;
    width: 22rem;
    height: fit-content;
    margin-bottom: 2rem;
    padding:0;
    margin:0;
    font-family: 'Special Elite', cursive;
    color: #ffffff;

    @media only screen and (max-width: 1216px){
        font-size: 1.0rem;
        width: 16rem;
    }

    @media only screen and (max-width: 1024px){
        font-size: 1.0rem;
        width: 14rem;
    }

    @media only screen and (max-width: 768px){
        font-size: 1.25rem;
        width: 60%;
        margin-bottom: 0rem;
        text-align: left;
        justify-content: center;
        margin: 0 auto;
    }
    @media only screen and (max-width: 600px){
        font-size: 1.0rem;
        width: 60%;
    }
`;

const Name = styled.div`
    font-family: 'Special Elite', cursive;
    font-size: 1.0rem;
    font-weight: 400;
    height: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: #000000;

    @media only screen and (max-width: 1216px){
        font-size: 0.9rem;
    }
    @media only screen and (max-width: 1024px){
        font-size: 0.9rem;
    }
    @media only screen and (max-width: 768px){
        font-size: 1.0rem;
        margin-bottom: 1rem;
        margin-top: 1rem;
        height: fit-content
    }
`;

const SectionTitle = styled.div`
    margin-bottom: 2rem;
    @media only screen and (max-width: 768px){
        margin-bottom: 0rem;
    }
`;


const Credits = () => {
    return (
        <Container id="credits">
            <HeaderDiv><Header>Staff Who Made This Issue Possible</Header></HeaderDiv>
            <SectAndNames>
                {Object.entries(credits).map(([section, key]) => {
                    return(
                        <Section>
                        <SectionTitle>
                            {section} 
                        </SectionTitle>  
                        {key.map((person, index) => {
                            return(
                                <Name key={index}>{person.staff_name}, {person.title}</Name>
                            );
                        })}
                        <br/>
                        </Section>
                    );
                })}
            </SectAndNames>
        </Container>
    )
};

export default Credits;