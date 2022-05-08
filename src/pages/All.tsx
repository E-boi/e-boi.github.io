import { Component, createSignal, For, onMount } from 'solid-js';
import { fetchRepos, Repo } from '../utils';
import style from '../css/Cards.module.css';
import RepoCard from '../components/RepoCard';

const All: Component = () => {
  const [repos, setRepos] = createSignal<Repo[]>();

  onMount(async () => {
    setRepos(await fetchRepos());
  });

  return (
    <main>
      <h1 className={style.header}>All my repos:</h1>
      <div className={style.cards}>
        <For each={repos()} fallback={<p>Fetching repos...</p>}>
          {item => <RepoCard repo={item} />}
        </For>
      </div>
    </main>
  );
};

export default All;
