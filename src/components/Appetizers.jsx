import React from 'react';
import appetizerData from '../data/appetizerData';
import styled from 'styled-components';

const Appetizers = () => {
  return (
    <>
      <AppetizerSection className='menu'>
        <h1>Appetizers</h1>
        {appetizerData.items.map((item, i) => (
          <div key={i} className='menu__items'>
            <div className='menu__name'>
              <h3>{item.name}</h3>
            </div>
            <div className='menu__price'>
              <h4>{item.price}</h4>
            </div>
            <div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </AppetizerSection>
    </>
  );
};

const AppetizerSection = styled.menu`
  background-color: #000000;
  color: #f3f3f3;

  h1 {
    text-align: center;
    font-size: 50px;
  }

  .menu__items {
    text-align: center;
    font-size: 20px;
    // border: 3px solid #dc143c;
    padding: 4vw;
  }
`;

export default Appetizers;
