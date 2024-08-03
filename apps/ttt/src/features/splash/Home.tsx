import { Link } from 'react-router-dom';
import tttImg from '../../assets/tic-tac-toe.svg';
const Home = () => {
  return (
    <Link to="welcome" className="flex h-full">
      <div className="flex items-center ">
        <img src={tttImg} alt="ttt-logo" />
      </div>
    </Link>
  );
};

export default Home;
