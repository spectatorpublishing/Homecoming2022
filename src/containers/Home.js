import { React} from 'react';
import Credits from '../components/Credits';
import Letter from '../components/LetterFromEditor';
import Carousel from '../components/Carousel';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import MobileNavBar from '../components/MobileNavBar';
const HomeContainer = styled.div`
    @media only screen and (max-width: 768px){
    }
    width: 100%;
    background-color: #D2E1EE;
    color: #0046A6;
`;

//image in header
const HeaderImage = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("https://cloudfront-us-east-1.images.arcpublishing.com/spectator/FEM5FWOA4RCNFG27LLTUCM2PVM.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    width: 100%;
    height: 100%;
    z-index:0;
    height:90vh;
    display: flex;
    justify-content: flex-end;
    @media only screen and (max-width: 768px){
      margin-top:1vw;
      height:120vh;
      background-image: url(https://cloudfront-us-east-1.images.arcpublishing.com/spectator/XSROV7CJTFCW7LHD4WP5S6WFI4.jpg);
    }
`;

//"Homecoming 2022"
const Headline = styled.div`
    position: absolute;
    width:57%;
    height:12%;
    color: white;
    font-family: 'IBM Plex Serif', 'Georgia', Times, serif;
    font-weight: bold;
    font-size: 6rem;
    padding-left:0.5rem;
    left: 2.5%;
    top: 80%;
    @media only screen and (max-width: 768px){
        display:none;
        font-size: 1.2rem;
        top: 93%;
        left: 1.8rem;
    }
`;
const Empty = styled.div``;
const Home = () => {
  return (
    <HomeContainer>
      {window.innerWidth <= 768 ? <MobileNavBar/> : <NavBar/>}
      <HeaderImage>
        <Headline>Homecoming 2022</Headline>
      </HeaderImage>
      <Letter/>
      <Credits/>
    </HomeContainer>
  );
}

export default Home;