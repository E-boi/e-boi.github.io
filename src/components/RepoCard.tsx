import { Link } from 'solid-app-router';
import { Component } from 'solid-js';
import style from '../css/Card.module.css';
import { CCPlugin, Repo } from '../utils';
import fork from '../assets/fork.svg';

const CumCard: Component<{ plugin: CCPlugin }> = ({ plugin }) => {
  const srcUrl = `https://github.com/e-boi/cumcord-plugins/tree/master/${plugin.url.split('/')[2]}`;
  const condomUrl = `https://cumcordplugins.github.io/Condom/${plugin.url}`;
  return (
    <div className={style.card}>
      <div className={style.cardHeader}>
        <Link href={srcUrl}>{plugin.name}</Link>
      </div>
      <div className={style.cardDescription}>
        <p>{plugin.description}</p>
      </div>
      <div className={[style.cardFooter, style.cardCCFooter].join(' ')}>
        <button className={style.cardButton}>
          <Link href={`https://send.cumcord.com/#${condomUrl}`} target='_blank'>
            Install from cumdump
          </Link>
        </button>
        <button className={style.cardButton}>
          <Link href={`https://send.cumcord.com/#https://${plugin.url}`} target='_blank'>
            Install from source
          </Link>
        </button>
      </div>
    </div>
  );
};

const RCard: Component<{ repo: Repo }> = ({ repo }) => (
  <div className={style.card}>
    <div className={style.cardHeader}>
      <Link href={repo.html_url}>{repo.full_name}</Link>
    </div>
    <div className={style.cardDescription}>
      <p>{repo.description}</p>
    </div>
    <div className={style.cardFooter}>
      {repo.language && <p>Lang: {repo.language}</p>}
      <Link className={style.cardGH} href={`${repo.html_url}/stargazers`} target='_blank'>
        <img height={16} src='https://raw.githubusercontent.com/E-boi/assets/main/star.svg' />
        <p>{repo.stargazers_count}</p>
      </Link>
      <Link className={style.cardGH} href={`${repo.html_url}/network/members`} target='_blank'>
        <img height={16} src={fork} />
        <p>{repo.forks_count}</p>
      </Link>
    </div>
  </div>
);

const RepoCard: Component<{ cum?: boolean; repo: Repo | CCPlugin }> = ({ cum, repo }) => {
  return cum ? <CumCard plugin={repo as CCPlugin} /> : <RCard repo={repo as Repo} />;
};

export default RepoCard;
