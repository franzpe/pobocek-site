import { CMS_BASE_API_URL } from '$lib/http';
import type { RequestHandler } from './$types';

const baseUrl = CMS_BASE_API_URL + '/posts';

export const GET = (async ({ fetch }) => {
	const http = await fetch(`${baseUrl}/rss/feed?filters[type][name][$eq]=blog`);
	const res = await http.text();

	return new Response(res, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}) satisfies RequestHandler;
