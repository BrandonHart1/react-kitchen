import React from 'react';
import dessertData from '../data/dessertData';
import styled from 'styled-components';

const DessertMenu = () => {
  return (
    <>
      <DessertSection>
        <h1>Desserts</h1>
        {dessertData.items.map((item, i) => (
          <div className='menu__items'>
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
      </DessertSection>
    </>
  );
};

const DessertSection = styled.menu`
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

  h4 {
    font-style: italic;
    font-weight: normal;
  }
`;

export default DessertMenu;
