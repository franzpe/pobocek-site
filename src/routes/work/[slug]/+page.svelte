<script lang="ts">
	import type { PageData } from './$types';
	import BlogArticle from '../../../ui/Blog/BlogArticle.svelte';

	export let data: PageData;
</script>

<div class="page-container flex-1">
	<ol class="breadcrumb">
		<li class="crumb"><a href="/work">Work</a></li>
		<li class="crumb-separator" aria-hidden>&rsaquo;</li>
		<li>Project</li>
	</ol>
	<BlogArticle {data} />
</div>
