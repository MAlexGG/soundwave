import React from 'react';
import twitter from '../../assets/images/twitter.svg';
import facebook from '../../assets/images/facebook.svg';
import { CtFooter, CtFooterLinks, ImgSocialMedial, TxtFooter, CtFooterSocialMedia } from './Footer.styled'

function Footer() {
  return (
      <>
          <CtFooter>
              <CtFooterLinks>
                  <TxtFooter>About</TxtFooter>
                  <TxtFooter>Contact</TxtFooter>
              </CtFooterLinks>
              <CtFooterLinks>
                  <CtFooterSocialMedia>
                      <ImgSocialMedial src={twitter} alt='twitter'/>
                      <TxtFooter>Twitter</TxtFooter>
                  </CtFooterSocialMedia>
                  <CtFooterSocialMedia>
                      <ImgSocialMedial src={facebook} alt='facebook'/>
                      <TxtFooter>Facebook</TxtFooter>
                  </CtFooterSocialMedia>
              </CtFooterLinks>
          </CtFooter>
      
      </>
  )
}

export default Footer