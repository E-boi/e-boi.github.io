import Router from 'preact-router';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import All from './All';
import NotFound from './404';
import Plugins from './Plugins';

export default () => (
	<div style={{ height: '100%' }}>
		<Navbar />
		<Router>
			<Home path='/' />
			<Projects path='/projects' />
			<All path='/all' />
			<Plugins path='/plugins' />
			<NotFound default />
		</Router>
	</div>
);
