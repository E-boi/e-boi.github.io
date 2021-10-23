import { Attributes } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import RepoCard from './RepoCard';
import { fetchProjects, Repo } from './utils';
import './css/projects.css';

export default (_: Attributes) => {
	const [repos, setRepos] = useState<Repo[]>();

	useEffect(() => {
		(async function () {
			const rawRepos = await fetchProjects();
			setRepos(rawRepos);
		})();
	}, []);

	return (
		<>
			<h1>Projects:</h1>
			<main className='projects'>
				{repos?.map(repo => (
					<RepoCard repo={repo} />
				))}
			</main>
		</>
	);
};
