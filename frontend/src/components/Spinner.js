import React from 'react';
import { Spinner as Loader } from 'react-bootstrap';

const spinnerStyle = {
  position: 'absolute',
  left: 'calc(50% - 1rem)',
  top: 'calc(50% - 1rem)',
};

const Spinner = () => (
  <Loader style={spinnerStyle} animation="border" variant="primary" />
);

export default Spinner;
