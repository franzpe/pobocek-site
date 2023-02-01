<script lang="ts">
	export let title = 'Svelte Kit Demo';
	export let description = 'Demo Application';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>
