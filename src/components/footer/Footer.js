import React from 'react';
import twitter from '../../assets/images/twitter.svg';
import facebook from '../../assets/images/facebook.svg';
import { CtFooter, CtFooterLinks, ImgSocialMedial, TxtFooter } from './Footer.styled'

function Footer() {
  return (
      <>
          <CtFooter>
              <CtFooterLinks>
                  <TxtFooter>About</TxtFooter>
                  <TxtFooter>Contact</TxtFooter>
              </CtFooterLinks>
              <CtFooterLinks>
                  <CtFooterLinks>
                      <ImgSocialMedial src={twitter} alt='twitter'/>
                      <TxtFooter>Twitter</TxtFooter>
                  </CtFooterLinks>
                  <CtFooterLinks>
                      <ImgSocialMedial src={facebook} alt='facebook'/>
                      <TxtFooter>Facebook</TxtFooter>
                  </CtFooterLinks>
              </CtFooterLinks>
          </CtFooter>
      
      </>
  )
}

export default Footer