import React from 'react';
import styled from 'styled-components';
import { sections } from '../data/sections';
import theme from '../theme';

const Container = styled.div`
    display: flex;
    width:15rem;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 0;
    right:0;
    background-color: ${theme.colors.lightBlue};
    @media only screen and (max-width: 768px){
    }
`;

const MenuItem = styled.a`
    width:100%;
    font-family: 'IBM Plex Serif';
    font-style: normal;
    font-size: 1em;
    margin:0.5rem;
    color:${theme.colors.blueText};
    text-align:left;
    text-decoration:none;
    &:hover {
        color:${theme.colors.white};
        background-color:${theme.colors.darkBlue}; 
    }
`;

const Lion = styled.span`
    font-size:2rem;
    float:right;
`

const NavBar = ({ }) => {
    return (
        <Container>
            {sections.map(section => (
                <MenuItem href={section.url}>{section.title}<Lion>&#129409;</Lion></MenuItem>
            ))}
        </Container>
    )
};

export default NavBar;