<script lang="ts">
	import { drawerStore, type DrawerSettings } from '@skeletonlabs/skeleton';
	import Logo from '../../components/Logo.svelte';

	const drawerOpen = () => {
		const settings: DrawerSettings = { id: 'sidenav' };
		drawerStore.open(settings);
	};
</script>

<button on:click={drawerOpen} class="btn-icon btn-icon-sm lg:!hidden">
	<i class="fa-solid fa-bars text-xl" />
</button>
<a href="/" class="relative hidden sm:block">
	<Logo />
</a>
