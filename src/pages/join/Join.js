import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { BtJoin, Circle, CtForm, CtJoin, CtTitle, InputJoin, LabelJoin, TitleJoin } from './Join.styled';

function Join() {
  return (
    <div>
      <Circle top='-12%' left='18%' w='30vw' h='30vw' z='1'/>
      <Navbar />
      <CtJoin>
        <CtTitle>
          <TitleJoin color>Join the</TitleJoin>
          <TitleJoin>fun.</TitleJoin>
        </CtTitle>
        <CtForm>
          <LabelJoin>Name:</LabelJoin>
          <InputJoin name='name' />
          <LabelJoin>Email:</LabelJoin>
          <InputJoin name='email' />
          <LabelJoin>Password:</LabelJoin>
          <InputJoin name='password' />
          <BtJoin>Join Now</BtJoin>
        </CtForm>
        <Circle colorone up top='18%' left='-17%' w='45vw' h='45vw'/>
      </CtJoin>
      <Footer/>
    </div>
  )
}

export default Join