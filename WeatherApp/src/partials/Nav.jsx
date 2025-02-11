import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">LOGO</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/profile">PROFILE</Link>
        </li>
      </ul>
    </div>
  );
}
