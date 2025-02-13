import { Link, useLocation } from 'react-router-dom';

export default function Profile() {
  const location = useLocation();
  const message = location.state?.message;
  console.log(message);

  return (
    <div>
      <h1>Hello this is your Profile</h1>
      <Link to="/search">Search</Link>
      <br />
      <Link to="/about">About</Link>
      <p>{message}</p>
    </div>
  );
}
