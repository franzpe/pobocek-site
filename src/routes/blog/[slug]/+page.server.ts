import { error } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';
import { CMS_BASE_API_URL } from '$lib/http';

const baseUrl = CMS_BASE_API_URL + '/posts';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const http = await fetch(`${baseUrl}/slug/${params.slug}?populate=*`);

	const res = await http.json();

	if (res.error) {
		throw error(res.error.status, res.error);
	}

	return res.data;
};
