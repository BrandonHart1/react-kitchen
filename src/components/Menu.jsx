import React from 'react';
import data from '../data/data';
import styled from 'styled-components';

const Menu = () => {
  return (
    <>
      <MenuSection className='menu'>
        <h1>Menu</h1>
        {data.items.map((item, i) => (
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
      </MenuSection>
    </>
  );
};

const MenuSection = styled.menu`
  background-color: #000000;
  color: #fff;

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

export default Menu;
