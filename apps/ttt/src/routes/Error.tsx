import { useRouteError } from 'react-router-dom';
import Button from '../components/base/Button';
import { Outlet, Link } from 'react-router-dom';

const Error = () => {
  const error = useRouteError() as { message?: string; statusText?: string };
  console.error(error);

  return (
    <div>
      Error
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>Error info : {error.statusText || error.message}</i>
      </p>
      <div className="w-full flex justify-center mt-5">
        <Button Component={Link} to="/">
          {' '}
          Go home{' '}
        </Button>
      </div>
    </div>
  );
};

export default Error;
