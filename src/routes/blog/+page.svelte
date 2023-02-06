<script lang="ts">
	import { CMS_BASE_URL } from '$lib/http';
	import { toastStore, type ToastSettings } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';
	import { blogDateFormatter, getBlogList } from './blog-service';

	export let data: PageData;

	function copyRSSToClipboard(): void {
		navigator.clipboard.writeText('TODO LINK');
		const t: ToastSettings = { message: 'RSS feed copied to clipboard.' };
		toastStore.trigger(t);
	}

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
			<p>Keep up with the latest news, tutorials and some other tech stories.</p>
		</div>
		<button class="btn " on:click={copyRSSToClipboard} on:keypress>
			<i class="fa-solid fa-square-rss text-xl mr-2" />
			RSS FEED
		</button>
	</header>

	<hr />
	<section class="blog-list space-y-8">
		{#each data.data as { attributes: post }}
			<a
				class="unstyled block hover:card p-4 rounded-container-token"
				href="/blog/{post.slug}"
				data-sveltekit-preload-data="hover"
			>
				<article class="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-4 lg:gap-8">
					{#if post.feature_img}
						<img
							class="bg-black/50 w-full lg:max-w-sm aspect-video rounded-container-token shadow-xl bg-cover bg-center"
							src={CMS_BASE_URL + post.feature_img.data.attributes.url}
							alt="thumbnail"
						/>
					{/if}

					<div class="space-y-4">
						<time class="block">{blogDateFormatter(post.updatedAt)}</time>
						<h2>{post.title}</h2>
						<p>{post.description}</p>
						<div class="flex items-center space-x-4">
							{#each post.tags.data as { attributes: tag }}
								<!-- <span class="text-xs font-bold opacity-50">
									{tag.name}
								</span> -->
								<span class="chip !font-medium variant-glass-secondary">
									{tag.name}
								</span>
							{/each}
							<span class="text-xs opacity-50">{post.reading_time} min read</span>
						</div>
						<button class="btn variant-ghost-surface">Read Article &rarr;</button>
					</div>
				</article>
			</a>
		{/each}
	</section>
	<hr />
	<footer class="flex justify-between items-center space-x-4">
		<div>
			<small class="opacity-50">Page {data.meta.pagination.page} of {data.meta.pagination.total}</small>
		</div>
		{#if data.meta.pagination.total > 1}
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
		{/if}
	</footer>
</div>
