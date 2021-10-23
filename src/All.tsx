import { Attributes } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import RepoCard from './RepoCard';
import { fetchRepos, Repo } from './utils';
import './css/projects.css';

export default (_: Attributes) => {
	const [repos, setRepos] = useState<Repo[]>();

	useEffect(() => {
		(async function () {
			const rawRepos = await fetchRepos();
			setRepos(rawRepos);
		})();
	}, []);

	return (
		<>
			<h1>All my repos:</h1>
			<main className='projects'>
				{repos?.map(repo => (
					<RepoCard repo={repo} />
				))}
			</main>
		</>
	);
};
