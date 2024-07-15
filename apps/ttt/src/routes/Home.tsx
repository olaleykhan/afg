import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@afg/ttt-fe/components/base/Button';

const Home = () => {
  return (
    <div>
      <h1 className="text-xl"> Home Page</h1>
      <p className="text-md"> You are in the base page</p>

      <div>
        <Link to="/">
          {' '}
          <Button> Home</Button>{' '}
        </Link>
        <Link to="lobby">
          {' '}
          <Button> Lobby</Button>{' '}
        </Link>
      </div>
    </div>
  );
};

export default Home;
