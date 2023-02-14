<script lang="ts">
	import { fly } from 'svelte/transition';

	export let url: URL;

	$: contentPadding = url.pathname === '/' ? '' : 'px-4 py-8 md:py-12';
</script>

{#key url}
	<div
		class="flex justify-center flex-col items-center {contentPadding}"
		in:fly={{ y: -100, duration: 500, delay: 50 }}
	>
		<slot />
	</div>
{/key}
