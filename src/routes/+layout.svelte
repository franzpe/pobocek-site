<script>
	import '@skeletonlabs/skeleton/themes/theme-modern.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '@fortawesome/fontawesome-free/css/all.css';
	import '../app.css';

	import { AppShell } from '@skeletonlabs/skeleton';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header/Header.svelte';
</script>

<AppShell slotPageContent="flex justify-center flex-col items-center px-4 py-10 md:py-20">
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<slot />
	<svelte:fragment slot="footer"><Footer /></svelte:fragment>
</AppShell>
