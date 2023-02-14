<script lang="ts">
	import { CodeBlock, toastStore, type ToastSettings } from '@skeletonlabs/skeleton';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import hljs from 'highlight.js';
	import type { PageData } from './$types';

	export let data: PageData;

	function copyRSSToClipboard(): void {
		const t: ToastSettings = { message: 'RSS feed copied to clipboard.' };
		toastStore.trigger(t);
	}

	storeHighlightJs.set(hljs);
</script>

<div class="page-container flex-1">
	<ol class="breadcrumb">
		<li class="crumb"><a href="/blog">Blog</a></li>
		<li class="crumb-separator" aria-hidden>&rsaquo;</li>
		<li>RSS Feed</li>
	</ol>
	<div class="flex justify-between">
		<h1>RSS Feed</h1>
	</div>
	<CodeBlock language="xml" on:copy={copyRSSToClipboard} code={data.xml} />
	<a href="/blog" class="btn variant-ghost-surface">Back to blog</a>
</div>
