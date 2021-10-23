import { Attributes } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import CCCard from './CCCard';
import RepoCard from './RepoCard';
import { CCPlugin, fetchCumPlugins, fetchPorkPlugin, Repo } from './utils';

export default (_: Attributes) => {
	const [repos, setRepos] = useState<Repo[]>();
	const [cc, setCC] = useState<CCPlugin[]>();

	useEffect(() => {
		(async function () {
			const rawRepos = await fetchPorkPlugin();
			const ccplugins = await fetchCumPlugins();
			setRepos(rawRepos);
			setCC(ccplugins);
		})();
	}, []);

	return (
		<main>
			<h1>Powercord plugins:</h1>
			<div className='projects pork'>
				{repos?.map(repo => (
					<RepoCard repo={repo} />
				))}
			</div>
			<h1>Cumcord plugins:</h1>
			<div className='projects pork'>
				{cc?.map(repo => (
					<CCCard repo={repo} />
				))}
			</div>
		</main>
	);
};
