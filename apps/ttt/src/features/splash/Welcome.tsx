import Button from '@afg/ttt-fe/components/base/Button';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div>
      {' '}
      Splash Welcome
      <Link to="/splash">
        {' '}
        <Button> Splash Home</Button>
      </Link>
    </div>
  );
};

export default Welcome;
