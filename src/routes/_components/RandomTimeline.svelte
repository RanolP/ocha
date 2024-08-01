<script lang="ts">
	import shuffle from 'lodash.shuffle';

	const COLORS = [0, 30, 60, 90, 210, 240, 280];

	export let length: number;
	export let balls: number;

	function calculatePositions() {
		return shuffle(
			Array.from({ length: balls }).map((_, idx) => ({
				x: Math.random() * 18,
				y: (idx * length * 18) / balls + (-5 + Math.random() * 10)
			}))
		);
	}

	let positions = calculatePositions();

	let interval: ReturnType<typeof setInterval> | null = null;
	$: {
		if (interval) clearInterval(interval);
		interval = setInterval(() => {
			if (
				typeof window === 'undefined' ||
				window.matchMedia('@media (prefers-reduced-motion').matches
			)
				return;
			positions = calculatePositions();
		}, 500);
	}

	$: ballInstances = Array.from({ length: balls }).map((_, idx) => ({
		idx,
		color: `hsl(${COLORS[idx % COLORS.length]} 40% 50%)`,
		position: positions[idx] ?? { x: -2, y: -2 }
	}));
</script>

<svg viewBox={`0 0 18 ${length * 18}`} w="12 lg:16" mx-auto>
	{#each ballInstances as { idx, color, position: { x, y } } (idx)}
		<circle cx={x} cy={y} r="1.5" fill={color} />
	{/each}
</svg>

<style>
	svg {
		transform: translateX(7%);
	}
	circle {
		transition:
			cx ease-out 1s,
			cy ease-out 1s;
	}
</style>
