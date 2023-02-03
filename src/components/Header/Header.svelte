<script>
	import { AppBar } from '@skeletonlabs/skeleton';
	import Nav from '../Nav.svelte';
	import HeaderLead from './HeaderLead.svelte';
	import HeaderTrail from './HeaderTrail.svelte';
</script>

<AppBar>
	<svelte:fragment slot="lead"><HeaderLead /></svelte:fragment>
	<Nav />
	<svelte:fragment slot="trail"><HeaderTrail /></svelte:fragment>
</AppBar>

<style>
	img {
		color: rgba(var(--theme-font-color-base));
	}
</style>
