import React from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import charts from '../../assets/images/microphone.svg';
import albums from '../../assets/images/layers.svg';
import more from '../../assets/images/more.svg';
import covers from '../../assets/images/covers.jpg';
import { CtDiscover, CtDiscoverTxt, CtSection, CtSections, ImgCovers, ImgSection, TitleDiscover, TxtDiscover } from './Discover.styled';

function Discover() {
  return (
      <>
      <Navbar />
      <CtDiscover>
        <CtDiscoverTxt>
          <TitleDiscover>Discover new Music</TitleDiscover>
          <CtSections>
            <CtSection>
              <ImgSection src={charts} alt='charts' />
              <TxtDiscover>Charts</TxtDiscover>
            </CtSection>
            <CtSection>
              <ImgSection src={albums} alt='albums' />
              <TxtDiscover>Albums</TxtDiscover>
            </CtSection>
            <CtSection>
              <ImgSection src={more} alt='more' />
              <TxtDiscover>More</TxtDiscover>
            </CtSection>
          </CtSections>
          <TxtDiscover>By joining you can benefit by listening to the latest albums released.</TxtDiscover>
        </CtDiscoverTxt>
        <ImgCovers src={covers} alt='album covers'/>
      </CtDiscover>
      <Footer/>
      </>
  )
}

export default Discover