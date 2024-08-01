<script>
	import '@fontsource-variable/hahmlet';
	import '@fontsource/ibm-plex-sans-kr';
	import 'virtual:uno.css';
	import '@unocss/reset/tailwind.css';

	import { onMount } from 'svelte';
	import { install } from '@/shared/theme';

	onMount(() => install());

	import Footer from '@/widgets/Footer.svelte';
</script>

<div min-h-lvh flex="~ col">
	<slot />

	<Footer />
</div>

<style>
	:global(html) {
		@apply font-base min-h-lvh bg-background-1 text-foreground-1 break-keep select-none;
	}
	:global(body, #root) {
		@apply contents;
	}
</style>
