import { ABOUT_SLUG, CMS_BASE_API_URL } from '$lib/http';
import { error } from '@sveltejs/kit';

const baseUrl = CMS_BASE_API_URL + '/posts';

export async function getBlogList(page = 1): Promise<any> {
	const http = await fetch(`${baseUrl}?populate=tags,feature_img&filters[slug][$ne]=${ABOUT_SLUG}`);
	const res = await http.json();

	if (res.error) {
		throw error(res.error.status, res.error);
	}

	throw new Error(res);
}
