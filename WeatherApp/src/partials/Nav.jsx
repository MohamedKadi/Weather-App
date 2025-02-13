import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Profile from './Profile';
import About from './About';

export default function Nav() {
  const nav = useNavigate();

  return (
    <div>
      <ul>
        <li>
          <Link to="/">LOGO</Link>
        </li>
        <li>
          <button onClick={() => nav('/about', { replace: true })}>
            About
          </button>
        </li>
        <li>
          <button onClick={() => nav('/')}>Profile</button>
        </li>
      </ul>
    </div>
  );
}
