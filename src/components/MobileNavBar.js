import React, {useState} from 'react';
import styled from 'styled-components';
import HamburgerMenu from 'react-hamburger-menu';
import { fallDown as Menu } from 'react-burger-menu';
import { sections } from '../data/sections';
import { HashLink } from 'react-router-hash-link';
import "./MobileNavBar.css"

const NavWrap = styled.div`
    text-align: center;
    margin: auto;
    padding-top: 0rem;
    height:9vh;
    justify-content: space-between;
    align-items:center;
    display:flex;
    position:sticky;
    top:0;
    left:0;
    flex-wrap: wrap;
    z-index:100;
    background-color:#2b5b9b;
    a {
        padding: 0.5rem 0rem;
    }
    @media (min-width: 769px) {
       display:none;
    }
`;

const Tab = styled.div`
    background-color:${props => props.current ? "rgba(210, 225, 238, 1)" : "inherit"};
    color:${props => props.current ? "rgba(0, 70, 166, 1)" : "white"};
    padding: 0.55rem;
`;
const Logo = styled.div`
    z-index:100;
    position:relative;
    left:5%;
`;
const MobileNavBar = () => {
    const [open, setOpen] = React.useState(false);
    const [current, setCurrent] = useState("/");

    function handleClick() {
        setOpen(!open)
    
    }
    function set(section) {
        setCurrent(section)
        setOpen(!open)
    }

    return (
        <NavWrap open={open}>
            <Logo>
                <a href="https://www.columbiaspectator.com/" style={{
                }}><img style={{
                    height: "40px",
                    width: "40px",
                }} src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/LC75RL476NFG3P677LOBAW2MXE.png"></img></a>
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
                    <HashLink smooth to={section.url} onClick = {()=>set(section.url)} style={{textDecoration:'none'}}>
                        <Tab current = {current == section.url} key={index}>{section.title}</Tab>
                    </HashLink>
                ))}
            </Menu>
        </NavWrap>
    );
};

export default MobileNavBar;