export const checkPossibleLinks = (line: string) => {
	const words = line.split(' ');
	const links = [];
	for (const word of words) {
		if (word.startsWith('http://') || word.startsWith('https://')) {
			links.push(word);
		}
	}
	return links;
};

export const cleanText = (line: string) => {
	const words = line.split(' ');
	const links = words.map((word) => {
		if (word.startsWith('http://') || word.startsWith('https://')) {
			return;
		}
		return word;
	});
	return links.join(' ');
};

export const getDomainName = (link: string) => {
	if (link.startsWith('http://') || link.startsWith('https://')) {
		const url = new URL(link);
		return url.hostname;
	}
	return null;
};
