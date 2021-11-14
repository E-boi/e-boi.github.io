import { CCPlugin } from './utils';
import './css/card.css';

export default ({ repo }: { repo: CCPlugin }) => (
	<div className='repo-card'>
		<div className='repo-header'>
			<a href={`https://github.com/e-boi/cumcord-plugins/tree/master/${repo.url.split('/')[2]}`} target='_blank'>
				{repo.name}
			</a>
		</div>
		<div className='repo-description'>
			<p>{repo.description}</p>
			<p>import url: {`https://cumcordplugins.github.io/Condom/${repo.url}`}</p>
		</div>
	</div>
);
