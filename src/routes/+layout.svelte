<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-modern.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '@fortawesome/fontawesome-free/css/all.css';
	import 'highlight.js/styles/github-dark.css';
	import '../app.css';

	import { AppShell } from '@skeletonlabs/skeleton';
	import Header from '../ui/Header/Header.svelte';
	import Footer from '../ui/Layout/Footer.svelte';
	import { page } from '$app/stores';
</script>

<AppShell
	slotPageContent="flex justify-center flex-col items-center {$page.route.id !== '/' ? 'px-4 py-8 md:py-12' : ''}"
>
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
</AppShell>
