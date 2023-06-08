// Octokit.js
import { Octokit } from 'octokit';

// https://github.com/octokit/core.js#readme
export const octokit = new Octokit({
	auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
});
