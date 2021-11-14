import { CCPlugin } from './utils';
import './css/card.css';
import { CondomButton, InstallButton } from './constants';

export default ({ repo }: { repo: CCPlugin }) => {
	const srcUrl = `https://github.com/e-boi/cumcord-plugins/tree/master/${repo.url.split('/')[2]}`;
	const condomUrl = `https://cumcordplugins.github.io/Condom/${repo.url}`;
	return (
		<div className='cc-card'>
			<div className='repo-header'>
				<a href={srcUrl} target='_blank'>
					{repo.name}
				</a>
			</div>
			<div className='cc-description'>
				<p>{repo.description}</p>
			</div>
			<div className='cc-footer'>
				<p>Install from cumdump: </p>
				<a href={`https://send.cumcord.com/#${condomUrl}`} target='_blank'>
					<img src={CondomButton} height={64} />
				</a>
				<p>Install from source: </p>
				<a href={`https://send.cumcord.com/#https://${repo.url}`} target='_blank'>
					<img src={InstallButton} height={64} />
				</a>
			</div>
		</div>
	);
};
