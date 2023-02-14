<script lang="ts">
	import { fly } from 'svelte/transition';
	import MediaQuery from './MediaQuery.svelte';

	export let url: URL;

	$: contentPadding = url.pathname === '/' ? '' : 'px-4 py-8 md:py-12';
</script>

<MediaQuery query="(max-width: 1024px)" let:matches>
	{#key url}
		<div
			class="flex justify-center flex-col items-center {contentPadding}"
			in:fly={{ y: -100, duration: 550, delay: matches ? 100 : 50 }}
		>
			<slot />
		</div>
	{/key}
</MediaQuery>
