import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div>
      <h1>Hello this is your Profile</h1>
      <Link to="/search">Search</Link>
    </div>
  );
}
