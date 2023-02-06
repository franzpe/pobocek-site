import { ABOUT_SLUG, CMS_BASE_API_URL } from '$lib/http';
import type { PageLoad } from './$types';

const baseUrl = CMS_BASE_API_URL + '/posts';

export const load: PageLoad = async ({ fetch }) => {
	const http = await fetch(`${baseUrl}/slug/${ABOUT_SLUG}`);
	const res = await http.json();

	if (!http.ok) throw new Error(res);

	return res.data;
};
