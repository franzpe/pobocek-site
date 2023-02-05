import { ABOUT_SLUG, CMS_BASE_URL } from '$lib/http';

const baseUrl = CMS_BASE_URL + '/posts';

export async function getBlogList(page = 1): Promise<any> {
	const http = await fetch(`${baseUrl}?filters[slug][$ne]=${ABOUT_SLUG}`);
	const res = await http.json();

	if (http.ok) return res;

	throw new Error(res);
}

export async function getBlogPost(slug: string): Promise<any> {
	const http = await fetch(`${baseUrl}/slug/${slug}`);
	const res = await http.json();

	if (http.ok) return res.data;

	throw new Error(res);
}
