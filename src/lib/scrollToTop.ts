import { onMount } from 'svelte';

const scrollToTop = () => {
	let elemPage: HTMLElement | null;

	elemPage = document.querySelector('#page');

	if (elemPage) elemPage.scrollTop = 0;
};

export default scrollToTop;
