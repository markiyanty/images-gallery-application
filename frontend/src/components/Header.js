import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as Logo } from '../images/logo.svg';

const navBarStyle = {
  backgroundColor: 'rgb(214, 214, 214)',
};

const Header = ({ title }) => {
  return (
    <Navbar style={navBarStyle} variant="light">
      <Container>
        <Logo
          alt={title}
          href="/"
          style={{ maxWidth: '18rem', maxHeight: '3rem' }}
        />
      </Container>
    </Navbar>
  );
};

export default Header;
