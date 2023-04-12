<script>
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import Nav from '../Layout/Nav.svelte';

	const hide = 'relative hidden md:block';
</script>

<Nav />
<span class="divider-vertical h-5 relative hidden lg:block " />
<LightSwitch />
<span class="divider-vertical h-5 {hide}" />
<a href="/contact" class={hide}>Get in touch</a>
<span class="divider-vertical h-5" />
<section class="grid grid-cols-3 gap-6 md:pr-4">
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
