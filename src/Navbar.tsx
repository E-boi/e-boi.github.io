import './css/navbar.css';
import icon from './profile.jpg';

export default () => (
	<div className='navbar'>
		<a href='/projects'>Projects</a>
		<a href='/plugins'>Plugins</a>
		<a href='/all'>All</a>
		<img src={icon} alt='e-boi profile' onClick={() => (window.location.href = '/')} height={64} />
	</div>
);
