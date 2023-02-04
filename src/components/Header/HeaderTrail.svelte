<script>
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import Nav from '../Nav.svelte';
</script>

<Nav />
<span class="divider-vertical h-5" />
<a href="contact">Get in touch</a>
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
	<a href="https://www.instagram.com/franzpeee/" target="_blank" rel="noreferrer" aria-label="instagram">
		<i class="fa-brands fa-instagram" />
	</a>
</section>
