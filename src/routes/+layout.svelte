<script>
	import '@skeletonlabs/skeleton/themes/theme-modern.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '@fortawesome/fontawesome-free/css/all.css';
	import '../app.css';

	import { AppShell } from '@skeletonlabs/skeleton';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header/Header.svelte';
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<slot />
	<svelte:fragment slot="footer"><Footer /></svelte:fragment>
</AppShell>
