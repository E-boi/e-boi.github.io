import { Component, createSignal, For, onMount } from 'solid-js';
import RepoCard from '../components/RepoCard';
import style from '../css/Cards.module.css';
import { CCPlugin, fetchCumPlugins, fetchPorkPlugin, Repo } from '../utils';

const Plugins: Component = () => {
  const [pork, setPork] = createSignal<Repo[]>();
  const [cc, setCC] = createSignal<CCPlugin[]>();

  onMount(async () => {
    setCC(await fetchCumPlugins());
    setPork(await fetchPorkPlugin());
  });

  return (
    <main>
      <h1 className={style.header}>Porkcord plugins:</h1>
      <div className={style.cards}>
        <For each={pork()} fallback={<p>Loading...</p>}>
          {item => <RepoCard repo={item} />}
        </For>
      </div>
      <h1 className={style.header}>Cumcord plugins:</h1>
      <div className={style.cards}>
        <For each={cc()} fallback={<p>Loading...</p>}>
          {item => <RepoCard cum repo={item} />}
        </For>
      </div>
    </main>
  );
};

export default Plugins;
