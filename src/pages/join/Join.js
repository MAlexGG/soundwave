import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { BtJoin, Circle, CtAux, CtForm, CtJoin, CtTitle, InputJoin, LabelJoin, TitleJoin } from './Join.styled';

function Join() {

  const [form, setForm] = useState([]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  };

  console.log(form);

  
  return (
    <CtAux>
      <Circle top='-12%' left='18%' w='30vw' h='30vw' z='1' topM='-3%'/>
      <Navbar />
      <CtJoin>
        <CtTitle>
          <TitleJoin txtColor>Join the</TitleJoin>
          <TitleJoin>fun.</TitleJoin>
        </CtTitle>
        <CtForm>
          <LabelJoin>Name:</LabelJoin>
          <InputJoin name='name' onChange={handleChange} />
          <LabelJoin>Email:</LabelJoin>
          <InputJoin name='email' onChange={handleChange} />
          <LabelJoin>Password:</LabelJoin>
          <InputJoin name='pass' onChange={handleChange} type='password' />
          <BtJoin>Join Now</BtJoin>
        </CtForm>
        <Circle circleColor up top='18%' left='-17%' w='45vw' h='45vw' topM='66vh'/>
      </CtJoin>
      <Footer />
    </CtAux>
  )
}

export default Join