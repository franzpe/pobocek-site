import { ABOUT_SLUG, CMS_BASE_API_URL } from '$lib/http';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const baseUrl = CMS_BASE_API_URL + '/posts';

export const load: PageServerLoad = async ({ fetch }) => {
	const http = await fetch(`${baseUrl}/slug/${ABOUT_SLUG}`);
	const res = await http.json();

	if (res.error) {
		throw error(res.error.status, res.error);
	}

	return res.data;
};
