import { Component } from 'solid-js';
import { Link, useNavigate } from 'solid-app-router';
import profile from '../assets/profile.jpg';
import style from '../css/Navbar.module.css';

const Navbar: Component = () => {
  const navigate = useNavigate();
  return (
    <div className={style.navbar}>
      {/* <Link href='/projects'>Projects</Link> */}
      <Link href='/plugins'>Plugins</Link>
      <Link href='/all'>All</Link>
      <img src={profile} alt='e-boi profile' onClick={() => navigate('/')} height={64} />
    </div>
  );
};

export default Navbar;
