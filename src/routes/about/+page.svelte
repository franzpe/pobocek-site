<script lang="ts">
	import type { PageData } from './$types';
	import { marked } from 'marked';
	import { CMS_IMG_BASE_URL } from '$lib/http';
	import scrollToTop from '$lib/scrollToTop';

	export let data: PageData;

	let content = marked(data.attributes.content);

	if (import.meta.env.DEV) {
		content = content.replaceAll('/uploads', `${CMS_IMG_BASE_URL}/uploads`);
	}
</script>

<div class="page-container flex-1">
	<header class="space-y-4 justify-between items-center">
		<h1>{data.attributes.title}</h1>
		<p>Learn about my coding jurney and take a sneak peak at my life.</p>
	</header>
	<hr />
	<article class="blog-post">
		<div class="blog-html space-y-4">{@html content}</div>
		<footer class="card p-4 variant-glass-surface flex justify-between items-center mb-28">
			<p>
				Would you like to work with me?
				<a href="/contact">Ping me here</a>
			</p>
			<!-- prettier-ignore -->
			<button class="btn variant-ghost-surface" on:click={()=>{scrollToTop()}}>Scroll to Top &uarr;</button>
		</footer>
	</article>
</div>
