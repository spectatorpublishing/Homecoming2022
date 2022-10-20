import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import { sections } from '../data/sections';
import { Link } from 'react-router-dom';
import theme from '../theme';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify_content: space-between;
    position: absolute;
    margin-right:2.5rem;
    top: 0;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    right: 0;
    background-color: ${theme.colors.lightBlue};
    @media only screen and (max-width: 768px){
    }
`;

const Lion = styled.span`
    font-size:2rem;
    float:right;
    display: none;
    :hover {
        display: block;
    }
`

const MenuItem = styled.div`
    width:100%;
    padding: 0.5rem 0.5rem 1rem 1rem;
    margin:auto;
    font-family: 'IBM Plex Serif';
    font-style: normal;
    font-size: 1em;
    color:${theme.colors.lightBlue};
    text-align:left;
    text-decoration:none;
    a {
        text-decoration: none;
        color: ${theme.colors.blueText};
    }
    :hover {
        background-color:${theme.colors.darkBlue};
        color:${theme.colors.white};
    }
    @media (max-width: 768px) {
        font-size:1.5em;
        width:80%;
    }
`;

const NavBar = () => {
    return (
        <Container>
            {sections.map(section => (
                <MenuItem>
                    <Link to={section.url}>{section.title} <Lion>&#129409;</Lion></Link>
                </MenuItem>
            ))}
        </Container>
    )
};

export default NavBar;