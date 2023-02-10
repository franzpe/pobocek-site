<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="space-y-6 text-center">
	<h1>
		{#if $page.status === 404}
			Page not found
		{:else}
			Some nasty error occured
		{/if}
	</h1>
	<a href="/" class="btn variant-ghost-secondary">Go back home</a>
</div>
