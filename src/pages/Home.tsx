import { Link } from 'solid-app-router';
import { Component } from 'solid-js';
import style from '../css/Home.module.css';

const Home: Component = () => (
  <main className={style.inform}>
    <p>Hi I am e-boi also known as ugly-patoote. I code stuff in my free time, mostly plugins for Discord mods.</p>
    <p>
      I have made plugins for{' '}
      <Link href='https://powercord.dev' target='_blank'>
        Powercord
      </Link>{' '}
      and{' '}
      <Link href='https://cumcord.com' target='_blank'>
        Cumcord
      </Link>
      .
    </p>
  </main>
);

export default Home;
