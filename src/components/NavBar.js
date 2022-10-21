import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { sections } from '../data/sections';
import {useRef} from 'react';


const Nav = styled.div`
    @media only screen and (max-width: 768px){
        display:none;
    }
`

const VertNav = styled.div`
    text-align: right;
    position: absolute;
    right: 0vw;
    top:5rem;
    font-weight:700;
    z-index:100;
    background-color: rgba(210, 225, 238, 1);
    padding:1rem 0rem;
`;

const Tab = styled.a`
    display:block;
    position:relative;
    text-align:left;
    padding:  0.75rem 1rem 0.75rem 1.5rem;
    text-decoration:none;
    color: ${props => props.current ? 'white' : 'rgba(0, 70, 166, 1)'};
    background-color: ${props => props.current ? 'rgba(117, 170, 219, 1)' : 'none'};
    font-weight: ${props => props.current ? 600 : 400};   
    div {
        width: 10rem;
        font-size:1rem;
    }
    :hover {
        color: white;
        background-color:rgba(117, 170, 219, 1);
        cursor:pointer;
    }
`;

const NavText = styled.div`
    font-family: 'IBM Plex Serif';
    letter-spacing: .1rem;
    margin-right:3.5rem;
    text-transform: uppercase;
`;


const Logo = styled.div`
    display:block;
    float:right;
    margin:1rem;
`;

const Lion = styled.span`
    position:absolute;
    font-size:2.2rem;
    bottom:0px;
    right:2rem;
`
const NavBar = () => {
    const [current, setCurrent] = useState("/");
    return (
        <Nav>
        <Logo>
                <a href="https://www.columbiaspectator.com/" style={{
                }}><img style={{
                    height: "auto",
                    width: "20rem",
                }} src="https://spec-imagehosting.s3.amazonaws.com/CDSwhitemasthead.png"></img></a>
            </Logo>
        <VertNav>
            {sections.map((section, index) => (
                <Tab current = {current == section.url} onClick = {()=>setCurrent(section.url)} key={index}>
                    <NavText>{section.title} {current==section.url ? <Lion>&#129409;</Lion> : null}</NavText>
                </Tab>
            ))}
        </VertNav >
        </Nav>
    );
};

export default NavBar;