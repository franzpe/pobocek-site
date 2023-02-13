<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import scrollToTop from './scrollToTop';

	afterNavigate(() => {
		scrollToTop();
	});
</script>
