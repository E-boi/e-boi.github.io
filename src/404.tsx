import { Attributes } from 'preact';
import icon from './profile.jpg';
import './css/404.css';

export default (_: Attributes) => (
	<main className='lost'>
		<img src={icon} height={64} />
		<p>You lost?</p>
	</main>
);
