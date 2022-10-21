import { React} from 'react';
import Credits from '../components/Credits';
import Letter from '../components/LetterFromEditor';
import Carousel from '../components/Carousel';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import MobileNavBar from '../components/MobileNavBar';
import MobileCarousel from '../components/MobileCarousel';
import {uni_news_articles, opinion_articles, spectrum_articles,audio_articles,a_and_e_articles,sports_articles,city_news_articles} from '../data/articles';
import "./Home.css"
const HomeContainer = styled.div`
    @media only screen and (max-width: 768px){
    }
    width: 100%;
    background-color: #D2E1EE;
    color: #0046A6;
`;

//image in header
const HeaderImage = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("https://cloudfront-us-east-1.images.arcpublishing.com/spectator/FEM5FWOA4RCNFG27LLTUCM2PVM.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    width: 100%;
    height: 100%;
    z-index:0;
    height:100vh;
    display: flex;
    justify-content: flex-end;
    @media only screen and (max-width: 768px){
      height:80vh;
      background-image: url("https://cloudfront-us-east-1.images.arcpublishing.com/spectator/XSROV7CJTFCW7LHD4WP5S6WFI4.jpg");
    }
`;

//"Homecoming 2022"
const Headline = styled.div`
    position: absolute;
    width:70%;
    height:12%;
    color: white;
    font-family: 'IBM Plex Serif', 'Georgia', Times, serif;
    font-weight: bold;
    font-size:4rem;
    padding-left:0.5rem;
    left: 2.5%;
    top: 80%;
    text-shadow: 1px 1px 10px #00214f;
    @media only screen and (max-width: 768px){
        display:none;
        font-size: 1.2rem;
        top: 93%;
        left: 1.8rem;
    }
    @media only screen and (max-width: 1024px){
        font-size:3.6rem;
    }
`;
const Logo = styled.img`
  display:relative;
  width:20rem;
`;

const Empty = styled.div``;
const Home = () => {
  return (
    <HomeContainer>
      <MobileNavBar/>
      <NavBar/>
      <HeaderImage>
        <Headline>Homecoming 2022</Headline>
      </HeaderImage>
      <Letter/>

      <Carousel section = {sports_articles} section_title = "Sports"/>
      <Carousel section = {a_and_e_articles} section_title = "Arts and Entertainment"/>
      <Carousel section = {opinion_articles} section_title = "Opinion"/>
      <Carousel section = {uni_news_articles} section_title = "University News"/>
      <Carousel section = {city_news_articles} section_title = "City News"/>
      <Carousel section = {spectrum_articles} section_title = "Spectrum"/>
      <Carousel section = {audio_articles} section_title = "Audio"/>
      
      <MobileCarousel section = {sports_articles} section_title = "Sports"/>
      <MobileCarousel section = {a_and_e_articles} section_title = "Arts and Entertainment"/>
      <MobileCarousel section = {opinion_articles} section_title = "Opinion"/>
      <MobileCarousel section = {uni_news_articles} section_title = "University News"/>
      <MobileCarousel section = {city_news_articles} section_title = "City News"/>
      <MobileCarousel section = {spectrum_articles} section_title = "Spectrum"/>
      <MobileCarousel section = {audio_articles} section_title = "Audio"/>
      <Credits/>

    </HomeContainer>
  );
}

export default Home;