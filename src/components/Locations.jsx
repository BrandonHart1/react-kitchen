import React from 'react';
import locationData from '../data/locationData';
import styled from 'styled-components';

const Locations = () => {
  return (
    <>
      <LocationSection className='locations'>
        <h1>Locations</h1>
        {locationData.items.map((item, i) => (
          <div key={i}>
            <h3>{item.location}</h3>
            <h4>{item.phone}</h4>
          </div>
        ))}
      </LocationSection>
    </>
  );
};

const LocationSection = styled.menu`
  padding: 100px;
  background: linear-gradient(#000000, #dc143c);
  color: #fff;

  h1 {
    text-align: center;
    font-size: 40px;
  }

  h3 {
    text-align: center;
    font-size: 25px;
    padding: 8px;
  }
`;

export default Locations;
