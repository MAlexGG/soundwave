import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import woman from '../../assets/images/landing-page-girl.png';
import { BtHome, CircleOne, CircleTwo, CtHome, CtImg, CtTxt, TitleHome, TxtHome } from './Home.styled';
import { Link } from 'react-router-dom';

function Home() {
  return (
      <>
      <Navbar />
      <CtHome>
        <CtImg src={woman} alt='woman hearing music' />
        <CtTxt>
          <TitleHome>Feel The Music</TitleHome>
          <TxtHome>Stream over 20 thousand songs with one click</TxtHome>
          <Link to='/join'><BtHome>Join Now</BtHome></Link>
        </CtTxt>
        <CircleTwo colorone top='13vw' left='3vw' topM='70vh' />
        <CircleTwo top='0vw' left='30vw' topM='0vh'/>
        <CircleOne/>
      </CtHome>
      
      </>
  )
}

export default Home