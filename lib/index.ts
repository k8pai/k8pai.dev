export const getTwitterCounts = async () => {
	if (process.env.TWITTER_TOKEN) {
		return 0;
	}

	const response = await fetch(
		'https://api.twitter.com/2/users/by/username/k8pai?user.fields=public.metrics',
		{
			headers: {
				Authorization: `Bearer ${process.env.TWITTER_TOKEN}`,
			},
		},
	);
};
