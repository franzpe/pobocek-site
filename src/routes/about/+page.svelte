<script lang="ts">
	import type { PageData } from './$types';
	import { marked } from 'marked';

	export let data: PageData;

	let content = marked(data.attributes.content);
</script>

<article class="page-container flex-1">
	<h2>{data.attributes.title}</h2>
	{@html content}
</article>
