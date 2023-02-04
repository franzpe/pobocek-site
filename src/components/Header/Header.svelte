<script>
	import { AppBar } from '@skeletonlabs/skeleton';
	import HeaderLead from './HeaderLead.svelte';
	import HeaderTrail from './HeaderTrail.svelte';
</script>

<AppBar>
	<svelte:fragment slot="lead"><HeaderLead /></svelte:fragment>
	<svelte:fragment slot="trail"><HeaderTrail /></svelte:fragment>
</AppBar>

<style>
	img {
		color: rgba(var(--theme-font-color-base));
	}
</style>
