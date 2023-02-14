<script lang="ts">
	import type { PageData } from './$types';
	import { marked } from 'marked';
	import { CMS_IMG_BASE_URL } from '$lib/http';
	import scrollToTop from '../../components/scrollToTop/scrollToTop';

	export let data: PageData;

	let content = marked(data.attributes.content);

	if (import.meta.env.DEV) {
		content = content.replaceAll('/uploads', `${CMS_IMG_BASE_URL}/uploads`);
	}
</script>

<div class="page-container flex-1">
	<header class="space-y-4 justify-between items-center">
		<h1>{data.attributes.title}</h1>
		<p class="font-medium">{data.attributes.description}</p>
	</header>
	<hr />
	<article class="blog-post">
		{#if data.attributes.feature_img.data !== null}
			<div class="flex justify-center mb-8">
				<img
					class="bg-black/50 rounded-container-token shadow-xl"
					src={CMS_IMG_BASE_URL + data.attributes.feature_img.data.attributes.url}
					alt="thumbnail"
				/>
			</div>
		{/if}
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
