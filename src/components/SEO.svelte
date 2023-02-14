<script lang="ts">
	import { page } from '$app/stores';

	const metaDefaults = {
		title: 'Pobocek - Web Development & Web3 Consultancy',
		description:
			'Frank Pobocek is experienced full stack web developer with an overlap of web3 blockchain development (smart contracts).',
		image: 'https://pobocek.dev/avatar_circle_dark.png'
	};

	export let title = metaDefaults.title;
	export let description = metaDefaults.description;

	const meta = {
		title: metaDefaults.title,
		description: metaDefaults.description,
		image: metaDefaults.image,
		article: { publishTime: '', modifiedTime: '', author: '' },
		twitter: {
			title: metaDefaults.title,
			description: metaDefaults.description,
			image: metaDefaults.image
		}
	};

	let isBlogArticle = false;

	// Monitor $page for changes
	page.subscribe(page => {
		// Restore Page Defaults
		meta.title = metaDefaults.title;
		meta.description = metaDefaults.description;
		meta.image = metaDefaults.image;
		// Restore Twitter Defaults
		meta.twitter.title = metaDefaults.title;
		meta.twitter.description = metaDefaults.description;
		meta.twitter.image = metaDefaults.image;

		// If Blog Article
		isBlogArticle = page.route.id === '/blog/[slug]' || page.route.id === '/work/[slug]';

		if (page.data.attributes) {
			const post = page.data.attributes;
			const articleTitleLeadText = `Pobocek Blog`;
			// Post Data
			meta.title = `${articleTitleLeadText} — ${post.meta_title || post.title}`;
			meta.description = post.meta_description || post.description;
			meta.image = post.feature_image;
			// Article
			meta.article.publishTime = post.publishedAt;
			meta.article.modifiedTime = post.updatedAt;
			meta.article.author = 'Frank Pobocek';
			// Twitter
			meta.twitter.title = `${articleTitleLeadText} — ${post.meta_title || post.title}`;
			meta.twitter.description = post.twitter_description || post.meta_description;
			meta.twitter.image = post.feature_image;
		}
	});
</script>

<svelte:head>
	<!-- Meta Tags -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="web development, web app, programming, freelance, web3, blockchain, smart contracts, ethereum, soroban, stellar"
	/>
	<meta name="author" content="Frank Pobocek" />
	<!-- Open Graph - https://ogp.me/ -->
	<meta property="og:site_name" content="Pobocek.dev" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://pobocek.dev{$page.url.pathname}" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:image" content={meta.image} />
	<meta property="og:image:secure_url" content={meta.image} />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1632" />
	<meta property="og:image:height" content="1632" />
	{#if isBlogArticle}
		<meta property="article:published_time" content={meta.article.publishTime} />
		<meta property="article:modified_time" content={meta.article.modifiedTime} />
		<meta property="article:author" content={meta.article.author} />
	{/if}
	<!-- Open Graph: Twitter -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@franzpeo" />
	<meta name="twitter:creator" content="@franzpeo" />
	<meta name="twitter:title" content={meta.twitter.title} />
	<meta name="twitter:description" content={meta.twitter.description} />
	<meta name="twitter:image" content={meta.twitter.image} />
</svelte:head>
