export const projects = ['periljs'];
export const porkPlugins = [
  'custom-rpc',
  'ShowConnections',
  'github-in-discord',
  'NSFW-tags',
  'Better-Friends-List',
  'account-switcher',
  'Powercord-BlurNSFW',
  'powercord-LinkChannels',
  'Privacy-Tab',
];

export interface License {
  key: string;
  name: string;
  node_id: string;
  spdx_id: string;
  url: string;
}

export interface Owner {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

export interface Repo {
  allow_forking: true;
  archove_url: string;
  archived: boolean;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  clone_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  created_at: string;
  default_branch: string;
  deployments_url: string;
  description: string;
  events_url: string;
  fork: boolean;
  forks: number;
  forks_count: number;
  forks_url: string;
  full_name: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  git_url: string;
  has_downloads: boolean;
  has_issues: boolean;
  has_pages: boolean;
  has_projects: boolean;
  has_wiki: boolean;
  homepage: string | null;
  hooks_url: string;
  html_url: string;
  id: number;
  is_template: boolean;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  language: string | null;
  languages_url: string;
  license: License | null;
  merges_url: string;
  milestones_url: string;
  mirror_url: string | null;
  name: string;
  node_id: string;
  notifications_url: string;
  open_issues: number;
  open_issues_count: number;
  owner: Owner;
  private: boolean;
  pulls_url: string;
  pushed_at: string;
  releases_url: string;
  size: number;
  ssh_url: string;
  stargazers_count: number;
  stargazers_url: string;
  statuses_url: string;
  subscribers_url: string;
  subscription_url: string;
  svn_url: string;
  tags_url: string;
  teams_url: string;
  // topics: any[] // not sure what this is
  trees_url: string;
  updated_at: string;
  url: string;
  visibility: string;
  watchers: number;
  watchers_count: number;
}

export type CCPlugin = { author: string; description: string; hash: string; license: string; name: string; url: string };

export async function fetchRepos(): Promise<Repo[]> {
  const res = await fetch('https://api.github.com/users/E-boi/repos');
  const json = (await res.json()) as Repo[];
  return json;
}

export async function fetchProjects(): Promise<Repo[]> {
  const repos = await fetchRepos();
  const filteredRepos = repos.filter(m => projects.includes(m.name));
  return filteredRepos;
}

export async function fetchPorkPlugin(): Promise<Repo[]> {
  const repos = await fetchRepos();
  const filteredRepos = repos.filter(m => porkPlugins.includes(m.name));
  return filteredRepos;
}

export async function fetchCumPlugins(): Promise<CCPlugin[]> {
  const getPlugins: CCPlugin[] = await (await fetch('https://cumcordplugins.github.io/Condom/plugins-large.json')).json();
  const plugins = getPlugins.filter((p: CCPlugin) => p.author === 'ugly-patootie#0611');
  return plugins;
}
