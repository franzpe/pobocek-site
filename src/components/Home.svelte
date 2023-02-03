<script>
	import { storeLightSwitch } from '@skeletonlabs/skeleton';

	const hour = new Date().getUTCHours();

	const isOnline = hour > 8 && hour < 20;
</script>

<div>
	<div class="avatar {isOnline ? 'online' : 'offline'}" class:dark={$storeLightSwitch}>
		<img src="/avatar-transparent.png" alt="avatar" />
		<span class="status " />
		<span class="status-text">{isOnline ? 'Online' : 'Offline'}</span>
	</div>
</div>
<h1>Frank Pobocek</h1>
<h2>Hey, welcome to my website</h2>

<style>
	.avatar {
		@apply bg-surface-300 w-32 h-32 rounded-full relative mb-6;
	}

	.avatar.online {
		box-shadow: 0 0 20px rgb(16 185 129 / var(--tw-bg-opacity));
	}

	.avatar.offline {
		box-shadow: 0 0 20px rgb(239 68 68 / var(--tw-bg-opacity));
	}

	.dark {
		@apply bg-surface-900;
	}

	.status {
		@apply inline-block rounded-full w-4 h-4 absolute top-2 right-3.5;
	}

	.online span {
		@apply bg-emerald-500;
		/* box-shadow: 0 0 8px hsla(241, 100%, 100%); */
	}

	.offline span {
		@apply bg-red-500;
		/* box-shadow: 0 0 8px hsla(241, 100%, 100%); */
	}

	.status-text {
		@apply rounded-md absolute top-1 -right-11 font-sans pl-2 pr-2 pt-1 pb-1 text-xs  text-white text-opacity-80;
	}
</style>
