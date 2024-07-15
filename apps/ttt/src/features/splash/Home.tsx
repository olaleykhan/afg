import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@afg/ttt-fe/components/base/Button';

const Home = () => {
  return (
    <div>
      {' '}
      Splash HomeHome
      <h2> SPlash Home</h2>
      <Button Component={Link} className="" to="welcome">
        {' '}
        Next
      </Button>
    </div>
  );
};

export default Home;
