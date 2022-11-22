import React from 'react';
import styled from 'styled-components';
import kitchen_logo from '../assets/kitchen_logo.png';
const Navbar = () => {
  return (
    <Nav>
      <div className='logo'>
        <img src={kitchen_logo} alt='Peppers' />
        <div className='toggle'></div>
      </div>
      <ul className='links'>
        <li>
          <a href='#home' className='active'>
            Home
          </a>
        </li>
        <li>
          <a href='#menu'>Menu</a>
        </li>
        <li>
          <a href='#locations'>Locations</a>
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4vw;
  background-color: #202020;
  .logo {
    img {
      margin-top: 0.3rem;
      margin-bottom: 0.5rem
      cursor: pointer;
    }
    .toggle {
      display: none;
    }
  }

  .links {
    display: flex;
    list-style-type: none;
    gap: 2rem;
  }
  li {
    a {
      color: #fff;
      font-weight: 600;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      transition: 0.3s ease-in-out;
      &:hover {
        // color: #1b1b1b;
        font-weight: 900;
      }
    }

    // .active {
    //   color: #1b1b1b;
    // }
  }
}
`;

export default Navbar;
