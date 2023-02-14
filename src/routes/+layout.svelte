<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-modern.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '@fortawesome/fontawesome-free/css/all.css';
	import 'highlight.js/styles/github-dark.css';
	import '../app.css';

	import { AppShell, Toast } from '@skeletonlabs/skeleton';
	import Header from '../ui/Header/Header.svelte';
	import Footer from '../ui/Layout/Footer.svelte';
	import { page } from '$app/stores';
	import NavDrawer from '../ui/Layout/NavDrawer.svelte';
	import Seo from '../components/SEO.svelte';
	import ScrollToTop from '../components/scrollToTop/ScrollToTop.svelte';
	import PageTransition from '../components/PageTransition.svelte';

	$: contentPadding = $page.url.pathname === '/' ? '' : 'px-4 py-8 md:py-12';
</script>

<Seo />
<Toast />
<NavDrawer />
<ScrollToTop />

<AppShell>
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<PageTransition url={$page.url}>
		<slot />
	</PageTransition>
	<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
</AppShell>
