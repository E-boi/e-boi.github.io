import { CCPlugin, Repo } from './utils';
import './css/card.css';

export default ({ repo }: { repo: CCPlugin }) => (
	<div className='repo-card'>
		<div className='repo-header'>
			<a href={`https://github.com/e-boi/cumcord-plugins/tree/master/${repo[0].split('/')[2]}`} target='_blank'>
				{repo[1].name}
			</a>
		</div>
		<div className='repo-description'>
			<p>{repo[1].description}</p>
			<p>import url: {`https://cumcordplugins.github.io/Condom/${repo[0]}`}</p>
		</div>
	</div>
);
