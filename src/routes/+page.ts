import { CMS_BASE_API_URL } from '$lib/http';
import type { PageLoad } from './$types';

const baseUrl = CMS_BASE_API_URL + '/posts';

export const load: PageLoad = async ({ fetch }) => {
	const http = await fetch(
		`${baseUrl}?populate=tags,feature_img&filters[type][name][$eq]=project&filters[featured][$eq]=true`
	);
	const res = await http.json();

	if (!http.ok) throw new Error(res);

	return res;
};
