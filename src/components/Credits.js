import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import theme from '../theme';
import { credits } from '../data/credits'

const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: #D2E1EE;
    color: #0046A6;
`;

const HeaderDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const Header = styled.h1`
    text-align: center;
    width: 60rem;
    font-size: 2.75rem;
    font-family: 'IBM Plex Serif', serif;

    @media only screen and (${device.tablet}){
        font-size: 2.2rem;
    }

    @media only screen and (${device.mobile}){
        font-weight: 300;
        font-size: 1.5rem;
    }
`;

const SectAndNames = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-evenly;
    width: 100%;
    height: 210rem;
    margin-top: 6rem;

    @media only screen and (${device.tablet}){
        display: block;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: none;
        height: fit-content;
    }
`;

const Section = styled.div`
    font-size: 2.75rem;
    font-weight: 700;
    width: 25.938rem;
    height: fit-content;
    margin-bottom: 2rem;
    font-family: 'IBM Plex Serif', serif;

    @media only screen and (${device.laptopS}){
        font-size: 1.5rem;
    }

    @media only screen and (${device.tablet}){
        font-size: 1.5rem;
        text-align: center;
        width: 100%;
    }
`;

const Name = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    font-weight: 400;
    margin-top: 0.5rem;
    margin-bottom: 1rem;

    @media only screen and (${device.laptopS}){
        font-size: 1.5rem;
    }

    @media only screen and (${device.tablet}){
        font-size: 1rem;
    }
`;

const Credits = ({ }) => {
    return (
        <Container>
            <HeaderDiv><Header>THE COLUMBIA DAILY SPECTATOR STAFF WHO MADE THIS ISSUE POSSIBLE</Header></HeaderDiv>
            <SectAndNames>
                {Object.entries(credits).map(([section, key]) => {
                    return(
                        <Section> {section} 
                        {key.map((person, index) => {
                            return(
                                <Name key={index}>{person.staff_name}, {person.title}</Name>
                            );
                        })}
                        </Section>
                    );
                })}
            </SectAndNames>
        </Container>
    )
};

export default Credits;