import React, {useState} from 'react';
import styled from 'styled-components';
import HamburgerMenu from 'react-hamburger-menu';
import { fallDown as Menu } from 'react-burger-menu';
import { Link, redirect } from 'react-router-dom';
import { sections } from '../data/sections';
import "./MobileNavBar.css"

const NavWrap = styled.div`
    text-align: center;
    margin: auto;
    padding-top: 0rem;
    height:12vh;
    justify-content: space-between;
    align-items:center;
    display:flex;
    position:sticky;
    top:0;
    left:0;
    flex-wrap: wrap;
    z-index:100;
    background-color:#0046A6;
    a {
        padding: 0.5rem 0rem;
    }
    @media (min-width: 768px) {
       display:none;
    }
`;

const Tab = styled.div`
    background-color:${props => props.current ? "#D2E1EE" : "inherit"};
    color:${props => props.current ? "#1F3B83" : "white"};
    padding: 0.75rem;
`;
const Logo = styled.div`
    z-index:100;
    position:relative;
    bottom:0.75rem;
    left:5%;
`;
const MobileNavBar = () => {
    const [open, setOpen] = React.useState(false);
    const [current, setCurrent] = useState("/");

    function handleClick() {
        setOpen(!open)
    }
    function redirect(section){
        setCurrent(section)
        setOpen(!open)
    }

    return (
        <NavWrap>
            <Logo>
                <a href="https://www.columbiaspectator.com/" style={{
                }}><img style={{
                    position: "absolute",
                    height: "auto",
                    width: "15rem",
                }} src="https://spec-imagehosting.s3.amazonaws.com/CDSwhitemasthead.png"></img></a>
            </Logo>
            <HamburgerMenu
                isOpen={open}
                menuClicked={() => handleClick()}
                width={30}
                height={20}
                strokeWidth={2.5}
                rotate={0}
                color='white'
                borderRadius={0}
                animationDuration={0.5}
                zIndex={0}
                className="over"
            />
            <Menu isOpen={open} width={'100vw'}>
                {sections.map((section, index) => (
                    <Link>
                        <Tab current = {current == section.url} onClick = {()=>redirect(section.url)} key={index}>{section.title}</Tab>
                    </Link>
                ))}
            </Menu>
        </NavWrap>
    );
};

export default MobileNavBar;