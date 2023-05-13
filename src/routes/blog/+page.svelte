<script lang="ts">
	import { CMS_IMG_BASE_URL } from '$lib/http';
	import { blogDateFormatter } from '../../ui/Blog/utils';
	import type { PageData } from './$types';
	import { getBlogList } from './blog-service';

	export let data: PageData;

	function onPrevPage(): void {
		getBlogList(data.meta.pagination.page - 1).then(res => (data = res));
	}

	function onNextPage(): void {
		getBlogList(data.meta.pagination.page + 1).then(res => (data = res));
	}
</script>

<div class="page-container flex-1">
	<header class="space-y-4 flex justify-between items-center">
		<div class="space-y-4">
			<h1>The Blog</h1>
			<p class="font-medium">Keep up with the latest news, tutorials and some other tech stories.</p>
		</div>
		<a href="/blog/rss" class="btn" on:keypress>
			<i class="fa-solid fa-square-rss text-xl mr-2" />
			RSS
		</a>
	</header>

	<hr />
	<section class="blog-list space-y-8">
		{#if data.data.length !== 0}
			{#each data.data as { attributes: post }}
				<a
					class="unstyled block hover:card p-4 rounded-container-token"
					href="/blog/{post.slug}"
					data-sveltekit-preload-data="hover"
				>
					<article class="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-4 lg:gap-8">
						{#if post.feature_img.data !== null}
							<img
								class="bg-black/50 w-full lg:max-w-sm aspect-video rounded-container-token shadow-xl bg-cover bg-center object-cover"
								src={CMS_IMG_BASE_URL + post.feature_img.data.attributes.url}
								alt="thumbnail"
							/>
						{/if}

						<div class="space-y-4">
							<time class="block">{blogDateFormatter(post.updatedAt)}</time>
							<h2>{post.title}</h2>
							<p class="font-normal">{post.description}</p>
							<div class="flex items-center space-x-4">
								{#each post.tags.data as { attributes: tag }}
									<span class="chip !font-medium variant-glass-secondary">
										{tag.name}
									</span>
								{/each}
								{#if post.reading_time}<span class="text-xs opacity-50">{post.reading_time} min read</span>{/if}
							</div>
							<button class="btn variant-ghost-surface">Read Article &rarr;</button>
						</div>
					</article>
				</a>
			{/each}
		{:else}
			<div class="space-y-4 text-center">
				<h3>There are no published posts yet... No worries though, there will be one shortly.</h3>
				<p>
					In the mean time, you can learn about <a href="/about">me</a>
					or my
					<a href="/work">work projects</a>
					.
				</p>
			</div>
		{/if}
	</section>
	{#if data.meta.pagination.total > 1}
		<hr />
		<footer class="flex justify-between items-center space-x-4">
			<div>
				<small class="opacity-50">Page {data.meta.pagination.page} of {data.meta.pagination.total}</small>
			</div>

			<div class="flex items-center space-x-4">
				<button class="btn-icon variant-filled" on:click={onPrevPage} disabled={data.meta.pagination.page === 1}>
					&larr;
				</button>
				<button
					class="btn variant-filled"
					on:click={onNextPage}
					disabled={data.meta.pagination.page === data.meta.pagination.total}
				>
					Next &rarr;
				</button>
			</div>
		</footer>
	{/if}
</div>
