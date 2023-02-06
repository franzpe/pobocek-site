<script>
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import Nav from '../Layout/Nav.svelte';
</script>

<Nav />
<span class="divider-vertical h-5" />
<a href="/contact">Get in touch</a>
<span class="divider-vertical h-5" />
<LightSwitch />
<span class="divider-vertical h-5" />
<section class="grid grid-cols-3 gap-6">
	<a href="https://github.com/franzpe" target="_blank" rel="noreferrer" aria-label="Github">
		<i class="fa-brands fa-github" />
	</a>
	<a
		href="https://linkedin.com/in/frantisek-pobocek-06819913b"
		target="_blank"
		rel="noreferrer"
		aria-label="Linkedin"
	>
		<i class="fa-brands fa-linkedin" />
	</a>
	<a href="https://t.me/Franzpeee" target="_blank" rel="noreferrer" aria-label="instagram">
		<i class="fa-brands fa-telegram" />
	</a>
</section>
