<script lang="ts">
	import SEO from '../components/SEO.svelte';

	import { Avatar, storeLightSwitch } from '@skeletonlabs/skeleton';
	import MarkerSvg from '../components/MarkerSvg.svelte';
	import type { PageData } from './$types';
	import { each } from 'svelte/internal';
	import { CMS_BASE_URL } from '$lib/http';
	import { blogDateFormatter } from '../ui/Blog/utils';
	import scrollToTop from '$lib/scrollToTop';

	const hour = new Date().getUTCHours();
	const currentDateString = new Date().toLocaleString(undefined, { dateStyle: 'full', timeStyle: 'short' });

	const isOnline = hour > 6 && hour < 21;

	export let data: PageData;
</script>

<SEO title="Pobocek | Home" description="Frank Pobocek personal website" />

<div class="w-full">
	<header class="variant-glass-surface border-b border-black/5 dark:border-white/5 px-4 py-10 md:py-20">
		<div
			class="flex flex-col items-center text-center min-h-[600px] md:min-h-[700px] justify-center pb-8 md:pb-12 space-y-14"
		>
			<div class="flex flex-col items-center mb-2">
				<div class="avatar {isOnline ? 'online' : 'offline'} " class:dark={$storeLightSwitch}>
					<img src="/avatar-transparent.png" alt="avatar" />
					<span class="status " />
					<span class="status ping" />
					<span class="status-text">{isOnline ? 'Online' : 'Offline'}</span>
				</div>
				<p class="unstyled font-thin text-sm">
					<MarkerSvg />
					Trnava, SK
					<span class="mx-2">|</span>
					{currentDateString}
				</p>
			</div>
			<h1 class="unstyled text-3xl md:text-5xl !leading-tight">
				Web development services <br />
				& Web3 consultancy
			</h1>
			<div class="flex space-x-4">
				<a class="btn bg-[#6e5494] text-white" href="https://github.com/franzpe" target="_blank" rel="noreferrer">
					<i class="fa-brands fa-github" />
					<span class="hidden md:inline-block ml-2">Github</span>
				</a>
				<a
					class="btn bg-[#0e76a8] text-white"
					href="https://linkedin.com/in/frantisek-pobocek-06819913b"
					target="_blank"
					rel="noreferrer"
				>
					<i class="fa-brands fa-linkedin" />
					<span class="hidden md:inline-block ml-2">Linkedin</span>
				</a>
				<a class="btn bg-gray-500 text-white" href="mailto:pobocekfrantisek@gmail.com">
					<i class="fa-solid fa-mail-bulk" />
					<span class="hidden md:inline-block ml-2">Email</span>
				</a>
			</div>
		</div>
	</header>

	<div class="px-4 py-10 md:py-20 space-y-20">
		<section class="text-center md:text-left space-y-6 max-w-[1200px] mx-auto">
			<h2>My Recent Work</h2>
			<section class="blog-list space-y-8">
				{#each data.data as { attributes: project }}
					<a
						class="unstyled block hover:card p-4 rounded-container-token"
						href="/work/{project.slug}"
						data-sveltekit-preload-data="hover"
					>
						<article class="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-4 lg:gap-8 text-center md:text-left">
							{#if project.feature_img}
								<img
									class="bg-black/50 w-full lg:max-w-sm aspect-video rounded-container-token shadow-xl bg-cover bg-center"
									src={CMS_BASE_URL + project.feature_img.data.attributes.url}
									alt="thumbnail"
								/>
							{/if}

							<div class="space-y-4">
								<h3>{project.title}</h3>
								<time class="block">{blogDateFormatter(project.createdAt)}</time>
								<p>{project.description}</p>
								{#if project.tags.data.length !== 0}
									<div class="flex items-center justify-center md:justify-start space-x-4">
										{#each project.tags.data as { attributes: tag }}
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

			<footer class="card p-4 variant-glass-surface flex justify-start items-center mb-28 flex-0.5">
				<!-- prettier-ignore -->
				<div class="flex justify-center gap-4">
				<a class="btn variant-ghost-surface" href="/work">
					<span>See all</span>
				</a>
				<a class="btn variant-filled-primary" href="/contact" >
					<span>Let's work together</span>
					<span>&rarr;</span>
				</a>
			</div>
			</footer>
		</section>
	</div>
</div>

<style>
	.ping {
		animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite 1s;
	}

	@keyframes ping {
		30%,
		100% {
			transform: scale(2);
			opacity: 0;
		}
	}

	.avatar {
		@apply bg-surface-200 w-32 h-32 rounded-full relative mb-6;
	}

	.avatar.online {
		box-shadow: 0 0 20px rgb(16 185 129 / var(--tw-bg-opacity));
	}

	.avatar.offline {
		box-shadow: 0 0 20px rgb(239 68 68 / var(--tw-bg-opacity));
	}

	.dark {
		@apply bg-surface-900;
	}

	.status {
		@apply inline-block rounded-full w-4 h-4 absolute top-2 right-3.5;
	}

	.online span {
		@apply bg-emerald-500;
		/* box-shadow: 0 0 8px hsla(241, 100%, 100%); */
	}

	.offline span {
		@apply bg-red-500;
		/* box-shadow: 0 0 8px hsla(241, 100%, 100%); */
	}

	.status-text {
		@apply rounded-md absolute top-1 -right-11 font-sans pl-2 pr-2 pt-1 pb-1 text-xs  text-white text-opacity-80;
	}
</style>
