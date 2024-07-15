import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/base/Button';

const Lobby = () => {
  return (
    <div>
      <Link to="/">
        {' '}
        <Button> Home</Button>{' '}
      </Link>
      <Link to="/lobby">
        {' '}
        <Button> Lobby</Button>{' '}
      </Link>
    </div>
  );
};

export default Lobby;
