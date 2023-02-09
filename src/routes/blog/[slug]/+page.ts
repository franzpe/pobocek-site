import type { PageLoad } from './$types';
import { CMS_BASE_API_URL } from '$lib/http';

const baseUrl = CMS_BASE_API_URL + '/posts';

export const load: PageLoad = async ({ fetch, params }) => {
	const http = await fetch(`${baseUrl}/slug/${params.slug}?populate=*`);
	const res = await http.json();

	if (http.ok) return res.data;

	throw new Error(res);
};