<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	export let id: String;

	const dispatch = createEventDispatcher<{
		changeVisiblePortion: number;
	}>();

	onMount(() => {});
</script>

<section {id} {...$$restProps}>
	<slot />
</section>
