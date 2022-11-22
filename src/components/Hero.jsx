import React from 'react';
import styled from 'styled-components';
import peppers_background from '../assets/peppers_background.jpg';
import filet_fries from '../assets/filet_fries.jpg';

const Hero = () => {
  return (
    <Section id='home'>
      <div className='background'>
        <img src={peppers_background} alt='Peppers' />
        <h1>Welcome to The Kitchen</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quam,
          obcaecati doloribus nobis odio illo. Error sed laborum rem atque!
        </p>
        <img src={filet_fries} alt='Filet and Fries' />
      </div>
    </Section>
  );
};

const Section = styled.section`
  height: 90vh;
  width: 100%;
  position: relative;
  .background {
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(85%);
    }
  }
`;

export default Hero;
