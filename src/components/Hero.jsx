import React from 'react';
import styled from 'styled-components';
import peppers_background from '../assets/peppers_background.jpg';
// import filet_fries from '../assets/filet_fries.jpg';

const Hero = () => {
  return (
    <>
      <Section id='home'>
        {' '}
        {/* ---- when home link is clicked ----- */}
        <div className='background'>
          <img src={peppers_background} alt='Peppers' />
        </div>
        <div className='description'>
          <h1>Welcome to The Kitchen</h1>
        </div>
      </Section>
      <div>
        <h1>Menu</h1>
        <h2>Appetizers</h2>
      </div>
    </>
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
      filter: brightness(65%);
    }
  }
  .description {
    color: #fff;
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
  }

  .description h1 {
    font-size: 50px;
  }

  .description p {
    font-size: 35px;
  }
`;

export default Hero;
