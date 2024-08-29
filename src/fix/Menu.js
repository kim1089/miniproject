import './Menu.css';
import { Link, useNavigate } from "react-router-dom";

export default function Menu({ handleLogout }) {
  const navigate = useNavigate();

  const logoutAndRedirect = () => {
    handleLogout();  // userData 초기화
    navigate('/');  // 로그인 페이지로 이동
  };

  return (
    <div>
      <ul className="nav nav-pills nav-fill">
        <li className='nav-item'>
          <Link to="/1" className="nav-link">1</Link>
        </li>
        <li className='nav-item'>
          <Link to="/2" className="nav-link">2</Link>
        </li>
        <li className='nav-item'>
          <Link to="/3" className="nav-link">3</Link>
        </li>
        <li className='nav-item'>
          <Link to="/4" className="nav-link">4</Link>
        </li>
        <li className='nav-item'>
          <Link to="/5" className="nav-link">5</Link>
        </li>
        <li className='nav-item myPage'>
          <Link to="/main" className="nav-link">My Page</Link>
        </li>
        <li className='nav-item logout-btn' onClick={logoutAndRedirect}>
          Log out
        </li>
      </ul>
    </div>
  );
}
