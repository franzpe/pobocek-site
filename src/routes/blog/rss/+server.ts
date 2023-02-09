import { CMS_BASE_API_URL } from '$lib/http';
import type { RequestHandler } from './$types';
import { marked } from 'marked';
import RSS from 'rss';

const baseUrl = CMS_BASE_API_URL + '/posts';

export const GET = (async ({ fetch }) => {
	const http = await fetch(`${baseUrl}?populate=tags,feature_img&filters[type][name][$eq]=blog`);
	const res = await http.json();

	const feed = new RSS({
		title: 'The Blog by Frank Pobocek',
		description: 'Keep up with the latest news, tutorials and some other tech stories.',
		feed_url: 'https://pobocek.dev/blog/rss',
		site_url: 'https://pobocek.dev'
	});

	for (const [i, blog] of res.data.entries()) {
		feed.item({
			...blog.attributes,
			author: 'Frank Pobocek',
			description: blog.attributes.description,
			date: blog.attributes.updatedAt,
			url: 'https://pobocek.dev/blog/${blog.attributes.slug}',
			custom_elements: [{ content: marked(blog.attributes.content) }]
		});
	}

	return new Response(feed.xml({ indent: true }), {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}) satisfies RequestHandler;
