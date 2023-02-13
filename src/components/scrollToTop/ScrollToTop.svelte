<script lang="ts">
	import { afterNavigate, preloadData } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import scrollToTop from './scrollToTop';

	afterNavigate(() => {
		scrollToTop();
	});
</script>
