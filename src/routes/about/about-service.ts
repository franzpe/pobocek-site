import { ABOUT_SLUG, CMS_BASE_API_URL } from '$lib/http';

const baseUrl = CMS_BASE_API_URL + '/posts';

export async function getAbout(): Promise<any> {
	const http = await fetch(`${baseUrl}/slug/${ABOUT_SLUG}`);
	const res = await http.json();

	if (http.ok) return res.data;

	throw new Error(res);
}
