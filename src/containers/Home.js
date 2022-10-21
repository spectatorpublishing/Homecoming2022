import { React} from 'react';
import Credits from '../components/Credits';
import Letter from '../components/LetterFromEditor';
import Carousel from '../components/Carousel';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import MobileNavBar from '../components/MobileNavBar';
import "./Home.css"
const HomeContainer = styled.div`
    @media only screen and (max-width: 768px){
    }
`;

const Home = () => {
  return (
    <HomeContainer>
      <MobileNavBar/>
      <NavBar/>
      <Letter/>
      <Credits/>
    </HomeContainer>
  );
}

export default Home;