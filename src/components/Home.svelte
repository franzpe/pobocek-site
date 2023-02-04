<script>
	import { storeLightSwitch } from '@skeletonlabs/skeleton';
	import MarkerSvg from './MarkerSvg.svelte';

	const hour = new Date().getUTCHours();
	const currentDateString = new Date().toLocaleString(undefined, { dateStyle: 'full', timeStyle: 'short' });

	const isOnline = hour > 8 && hour < 20;
</script>

<header class="flex flex-col items-center text-center">
	<div class="flex flex-col items-center mb-16">
		<div class="avatar {isOnline ? 'online' : 'offline'}" class:dark={$storeLightSwitch}>
			<img src="/avatar-transparent.png" alt="avatar" />
			<span class="status " />
			<span class="status-text">{isOnline ? 'Online' : 'Offline'}</span>
		</div>
		<p class="unstyled font-thin text-sm">
			<MarkerSvg />
			Trnava, SK
			<span class="mx-2">|</span>
			{currentDateString}
		</p>
	</div>
	<h1 class="unstyled text-3xl md:text-5xl mb-4 !leading-tight">
		Web development services <br />
		and Web3 consultancy
	</h1>
	<div class="flex space-x-4 mt-12">
		<a class="btn bg-[#6e5494] text-white" href="https://github.com/franzpe" target="_blank" rel="noreferrer">
			<i class="fa-brands fa-github" />
			<span class="hidden md:inline-block ml-2">Github</span>
		</a>
		<a
			class="btn bg-[#0e76a8] text-white"
			href="https://linkedin.com/in/frantisek-pobocek-06819913b"
			target="_blank"
			rel="noreferrer"
		>
			<i class="fa-brands fa-linkedin" />
			<span class="hidden md:inline-block ml-2">Linkedin</span>
		</a>
		<a class="btn bg-gray-500 text-white" href="mailto:pobocekfrantisek@gmail.com">
			<i class="fa-solid fa-mail-bulk" />
			<span class="hidden md:inline-block ml-2">Email</span>
		</a>
	</div>
</header>

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
