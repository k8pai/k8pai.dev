import { octokit } from '.';

export const getUserInfo = async () => {
	const { data } = await octokit.request('GET /users/{username}', {
		username: 'k8pai',
		headers: {
			'X-GitHub-Api-Version': '2022-11-28',
		},
	});
	console.log('data => ', data);
	return data;
};

export const getRepo = async (repoName?: string) => {
	const { data } = await octokit.request('GET /repos/{owner}/{repo}', {
		owner: 'k8pai',
		repo: repoName || 'k8pai.dev',
		headers: {
			'X-GitHub-Api-Version': '2022-11-28',
		},
	});
	console.log('getRepo => ', data);
	return data;
};
