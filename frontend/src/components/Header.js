import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const navBarStyle = {
  backgroundColor: 'lightgreen',
};

const Header = ({ title }) => {
  return (
    <Navbar style={navBarStyle} variant="light">
      <Container>
        <Navbar.Brand href="/" className="">
          {' '}
          {title}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
