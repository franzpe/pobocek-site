import { CMS_BASE_API_URL } from '$lib/http';
import type { PageServerLoad } from './$types';

const baseUrl = CMS_BASE_API_URL + '/posts';

export const load = (async ({ fetch }) => {
	const http = await fetch(`${baseUrl}/rss/feed?filters[type][name][$eq]=blog`);
	const res = await http.text();

	return { xml: res };
}) satisfies PageServerLoad;
