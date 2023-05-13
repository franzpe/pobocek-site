<script lang="ts">
	import { CMS_IMG_BASE_URL } from '$lib/http';
	import { blogDateFormatter } from '../../ui/Blog/utils';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="page-container flex-1">
	<header class="space-y-8">
		<h1>The Work</h1>
		<blockquote class="max-w-lg">
			It is not the language that makes programs appear simple. It is the programmer that make the language appear
			simple!
			<b class="whitespace-nowrap">- Uncle Bob</b>
		</blockquote>
	</header>
	<hr />
	<section class="blog-list space-y-8">
		{#each data.data as { attributes: post }}
			<a
				class="unstyled block hover:card p-4 rounded-container-token"
				href="/work/{post.slug}"
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
						<h2>{post.title}</h2>
						<time class="block">{blogDateFormatter(post.createdAt)}</time>
						<p class="font-normal">{post.description}</p>
						{#if post.tags.data.length !== 0}
							<div class="flex items-center space-x-4">
								{#each post.tags.data as { attributes: tag }}
									<span class="chip !font-medium variant-glass-secondary">
										{tag.name}
									</span>
								{/each}
							</div>
						{/if}
						<button class="btn variant-ghost-surface">Read more &rarr;</button>
					</div>
				</article>
			</a>
		{/each}
	</section>
</div>
