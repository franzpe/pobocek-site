import { CMS_BASE_API_URL } from '$lib/http';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

const baseUrl = CMS_BASE_API_URL + '/posts';

export const load: PageLoad = async ({ fetch }) => {
	const http = await fetch(`${baseUrl}?populate=tags,feature_img&filters[type][name][$eq]=blog`);
	const res = await http.json();

	if (res.error) {
		throw error(res.error.status, res.error);
	}

	return res;
};
