<script lang="ts">
	import { page } from '$app/stores';
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';

	const onListItemClick = () => {
		drawerStore.close();
	};

	$: classesActive = (href: string) => {
		if (href === '/') {
			return $page.url.pathname === '/' ? 'bg-primary-active-token' : '';
		}

		return $page.url.pathname?.includes(href) ? 'bg-primary-active-token' : '';
	};
</script>

<Drawer>
	{#if $drawerStore.id === 'sidenav'}
		<section class="p-4 pb-20 space-y-4 overflow-y-auto">
			<div class="text-primary-700 dark:text-primary-500 font-bold uppercase px-4">Navigation</div>
			<nav class="list-nav">
				<ul>
					<li on:click={onListItemClick} on:keypress>
						<a href="/" class={classesActive('/')} data-sveltekit-preload-data="hover">
							<span class="fa-solid fa-house text-lg w-10" />
							Home
						</a>
					</li>
					<li on:click={onListItemClick} on:keypress>
						<a href="/about" class={classesActive('/about')} data-sveltekit-preload-data="hover">
							<span class="fa-solid fa-user text-lg w-10" />
							Who am I?
						</a>
					</li>
					<li on:click={onListItemClick} on:keypress>
						<a href="/work" class={classesActive('/work')} data-sveltekit-preload-data="hover">
							<span class="fa-solid fa-laptop-code text-lg w-10" />
							Work
						</a>
					</li>
					<li on:click={onListItemClick} on:keypress>
						<a href="/blog" class={classesActive('/blog')} data-sveltekit-preload-data="hover">
							<span class="fa-solid fa-blog text-lg w-10" />
							Blog
						</a>
					</li>
					<hr class="!my-6 opacity-50" />
					<li on:click={onListItemClick} on:keypress>
						<a href="/contact" class={classesActive('/contact')} data-sveltekit-preload-data="hover">
							<span class="fa-solid fa-envelope text-lg w-10" />
							Get in touch
						</a>
					</li>
				</ul>
			</nav>
		</section>
	{/if}
</Drawer>
