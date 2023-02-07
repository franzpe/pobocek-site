import { ABOUT_SLUG, CMS_BASE_API_URL } from '$lib/http';

const baseUrl = CMS_BASE_API_URL + '/posts';

export async function getBlogList(page = 1): Promise<any> {
	const http = await fetch(`${baseUrl}?populate=tags,feature_img&filters[slug][$ne]=${ABOUT_SLUG}`);
	const res = await http.json();

	if (http.ok) return res;

	throw new Error(res);
}
