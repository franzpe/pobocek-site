<script lang="ts">
	import { Avatar, CodeBlock } from '@skeletonlabs/skeleton';
	import hljs from 'highlight.js';
	import { onMount } from 'svelte';
	import { marked } from 'marked';

	import type { PageData } from './$types';
	import { blogDateFormatter } from '../blog-service';
	import { CMS_BASE_URL } from '$lib/http';

	let elemPage: HTMLElement | null;

	onMount(() => {
		// Element Page
		elemPage = document.querySelector('#page');

		// CodeBlock Highlight
		document.querySelectorAll('pre code').forEach((elem: any) => {
			hljs.highlightElement(elem);
		});

		// Table
		document.querySelectorAll('table').forEach((elem: any) => {
			elem.classList.add('table');
		});
	});

	function scrollToTop(): void {
		if (elemPage) elemPage.scrollTop = 0;
	}

	export let data: PageData;
	let content = marked(data.attributes.content);
</script>

<div class="page-container flex-1">
	<ol class="breadcrumb">
		<li class="crumb"><a href="/blog">Blog</a></li>
		<li class="crumb-separator" aria-hidden>&rsaquo;</li>
		<li>Article</li>
	</ol>
	<article class="blog-post">
		<header class="space-y-4">
			<div class="blog-meta flex justify-between items-center">
				<time class="block">{blogDateFormatter(data.attributes.updatedAt)}</time>
				{#if data.attributes.reading_time}<span class="hidden md:block text-xs opacity-50">
						{data.attributes.reading_time} min read
					</span>{/if}
			</div>
			<h1>{data.attributes.title}</h1>
			<div class="flex items-center space-x-4 py-4">
				<Avatar src="/avatar-transparent.png" alt="Frank Pobocek avatar author" />
				<div>
					<div class="text-sm">Frank Pobocek</div>
					<a class="text-secondary-500 text-xs" href="https://twitter.com/franzpeo">@franzpeo</a>
				</div>
			</div>
			{#if data.attributes.feature_img}
				<img
					src={CMS_BASE_URL + data.attributes.feature_img.data.attributes.url}
					alt={data.attributes.title}
					class="w-full aspect-video rounded-container-token shadow-xl"
				/>
			{/if}
		</header>
		<div class="blog-html space-y-4">{@html content}</div>
		<footer class="card p-4 variant-glass-surface flex justify-between items-center mb-28">
			{#if data.attributes.tags}
				<div class="flex items-center space-x-4">
					{#each data.attributes.tags.data as { attributes: tag }}
						<span class="text-sm font-bold opacity-50 capitalize">{tag.name}</span>
					{/each}
				</div>
			{/if}
			<!-- prettier-ignore -->
			<button class="btn variant-ghost-surface" on:click={()=>{scrollToTop()}}>Scroll to Top &uarr;</button>
		</footer>
	</article>
</div>

<style>
	.blog-post {
		@apply pb-28 space-y-8;
	}
</style>
