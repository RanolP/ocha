<script lang="ts">
	const COLORS = [0, 30, 60, 90, 210, 240, 280];

	export let length: number;
	export let balls: number;

	$: ballInstances = Array.from({ length: balls }).map((_, idx) => ({
		idx,
		color: `hsl(${COLORS[idx % COLORS.length]} 40% 50%)`
	}));
</script>

<svg viewBox={`0 0 18 ${length * 18}`} w="12 lg:16" mx-auto>
	<circle cx="8" cy="8" r="4" fill="currentColor" />
	<rect x="6.5" y="8" width="3" height={(length - 1) * 18} fill="currentColor" />
	<circle cx="8" cy={length * 18 - 8} r="4" fill="currentColor" />
	{#each ballInstances as { idx, color } (idx)}
		<circle
			cx={12 + Math.floor(idx / Math.floor(2.5 * length)) * 4}
			cy={14 + (idx % Math.floor(2.5 * length)) * 4}
			r="1.5"
			fill={color}
		/>
	{/each}
</svg>

<style>
	svg {
		transform: translateX(7%);
	}
</style>
