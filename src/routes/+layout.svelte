<script>
	import '@skeletonlabs/skeleton/themes/theme-modern.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '@fortawesome/fontawesome-free/css/all.css';
	import '../app.css';

	import { AppShell } from '@skeletonlabs/skeleton';
	import Header from '../ui/Header/Header.svelte';
	import Footer from '../ui/Layout/Footer.svelte';
</script>

<AppShell slotPageContent="flex justify-center flex-col items-center px-4 py-8 md:py-12">
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<slot />
	<svelte:fragment slot="footer"><Footer /></svelte:fragment>
</AppShell>
