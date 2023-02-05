const baseUrl = 'http://localhost:1337/api/posts';
const aboutSlug = 'about';

export async function getAbout(): Promise<any> {
	const http = await fetch(`${baseUrl}/slug/${aboutSlug}`);
	const res = await http.json();

	if (http.ok) return res.data;

	throw new Error(res);
}
