import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';

const Footer = () => {
  return (
    // -------- Add social media icons --------
    <>
      <FooterSection>
        <div className='socials'>
          <ul className='icons'>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaTwitter />
            </li>
          </ul>
        </div>
      </FooterSection>
    </>
  );
};

const FooterSection = styled.footer`
  background-color: #000000;
  color: #fff;
  margin-bottom: 2rem;

  .icons {
    display: flex;
    list-style-type: none;
    align-items: center;
    justify-content: space-around;
  }
`;

export default Footer;
