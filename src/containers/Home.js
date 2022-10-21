import { React} from 'react';
import Credits from '../components/Credits';
import Letter from '../components/LetterFromEditor';
import Carousel from '../components/Carousel';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import MobileNavBar from '../components/MobileNavBar';
import {uni_news_articles, opinion_articles, spectrum_articles,audio_articles,a_and_e_articles,sports_articles,city_news_articles} from '../data/articles';
const HomeContainer = styled.div`
    @media only screen and (max-width: 768px){
    }
`;

const Home = () => {
  return (
    <HomeContainer>
      {/* {window.innerWidth <= 768 ? <MobileNavBar/> : <NavBar/>} */}
      <Letter/>

      <Carousel section = {sports_articles} section_title = "Sports"/>
      <Carousel section = {a_and_e_articles} section_title = "Arts and Entertainment"/>
      <Carousel section = {opinion_articles} section_title = "Opinion"/>
      <Carousel section = {uni_news_articles} section_title = "University News"/>
      <Carousel section = {city_news_articles} section_title = "City News"/>
      <Carousel section = {spectrum_articles} section_title = "Spectrum"/>
      <Carousel section = {audio_articles} section_title = "Audio"/>

      <Credits/>

    </HomeContainer>
  );
}

export default Home;