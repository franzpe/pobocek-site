<script lang="ts">
	import { marked } from 'marked';

	import { CMS_IMG_BASE_URL } from '$lib/http';
	import scrollToTop from '../../components/scrollToTop/scrollToTop';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { blogDateFormatter } from './utils';
	import highlightContent from '$lib/ highlightContent';

	export let data: any;
  export let hideFeature = false;

	highlightContent();

	let content = marked(data.attributes.content);
</script>

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

		{#if data.attributes.feature_img.data !== null && !hideFeature}
			<img
				src={CMS_IMG_BASE_URL + data.attributes.feature_img.data.attributes.url}
				alt={data.attributes.title}
				class="w-full aspect-video rounded-container-token shadow-xl"
			/>
		{/if}
	</header>
	<div class="blog-html space-y-4">{@html content}</div>
		{#if data.attributes.tags}
      <div class="flex items-center space-x-4">
        {#each data.attributes.tags.data as { attributes: tag }}
          <span class="chip !font-medium variant-glass-secondary capitalize">{tag.name}</span>
        {/each}
      </div>
		{/if}
	<footer class="card p-4 variant-glass-surface flex justify-between items-center mb-28">
		{#if data.attributes.type.data.attributes.name === 'blog' && data.attributes.tags}
    <p class="">
      🐱 Follow me for more dev shenanigans on 
     	<a href="https://github.com/franzpe" target="_blank" rel="noreferrer" aria-label="Github" class="mx-2 text-2xl">
  	  	<i class="fa-brands fa-github" />
  	  </a>
      or
  	  <a
		   href="https://linkedin.com/in/frantisek-pobocek-06819913b"
		   target="_blank"
		   rel="noreferrer"
		   aria-label="Linkedin"
       class="mx-2 text-2xl"
	    >
	    	<i class="fa-brands fa-linkedin" />
	    </a>
    </p> 
    {/if}
		<!-- prettier-ignore -->
		<button class="btn variant-ghost-surface" on:click={()=>{scrollToTop()}}>Scroll to Top &uarr;</button>
	</footer>
</article>

<style>
	.blog-post {
		@apply pb-28 space-y-8;
	}
</style>
