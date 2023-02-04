<script>
	import { storeLightSwitch } from '@skeletonlabs/skeleton';
	$: strokeColor = $storeLightSwitch ? 'rgba(var(--theme-font-color-dark))' : 'rgba(var(--theme-font-color-base)';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="18"
	height="18"
	fill="none"
	viewBox="0 0 16 16"
	class="inline-block align-baseline"
>
	<path
		stroke={strokeColor}
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="1.333"
		d="M8 8.667a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
	/>
	<path
		stroke={strokeColor}
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="1.333"
		d="M8 1.333a5.333 5.333 0 0 0-5.333 5.334c0 1.261.268 2.086 1 3l4.333 5 4.334-5c.732-.914 1-1.739 1-3A5.333 5.333 0 0 0 8 1.333v0Z"
	/>
</svg>
