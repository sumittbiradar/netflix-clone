import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px;
  height: 30px;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.show ? '#111' : 'transparent'};
  transition: all 0.5s;
`;

const Logo = styled.img`
  width: 80px;
  object-fit: contain;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 20px;
  color: white;
`;

function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Nav show={show}>
      <Logo
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <NavItems>
        <SearchIcon />
        <NotificationsIcon />
        <AccountBoxIcon />
      </NavItems>
    </Nav>
  );
}

export default Navbar; 