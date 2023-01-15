const { Octokit } = require("@Octokit/rest");

export default async (req, res) => {
	const octokit = new Octokit({
		auth: process.env.GITHUB_AUTH_TOKEN
	});

	const repos = await octokit.request("/users/k8pai/starred");
	const finalRepo = repos.data.filter(repo => !repo.fork);
	const data = [];
	finalRepo.map(el => {
		var element = {}
		element.id = el.id,
		element.fullName = el.full_name,
		element.url = el.html_url,
		data.push(element);
	})

	// console.log(data);

	return res.status(200).json({ data: data });

}