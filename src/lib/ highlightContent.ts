import hljs from 'highlight.js';
import { onMount } from 'svelte';

const highlightContent = () => {
	onMount(() => {
		// CodeBlock Highlight
		document.querySelectorAll('pre code').forEach((elem: any) => {
			hljs.highlightElement(elem);
		});
		// Table
		document.querySelectorAll('table').forEach((elem: any) => {
			elem.classList.add('table');
		});
	});
};

export default highlightContent;
