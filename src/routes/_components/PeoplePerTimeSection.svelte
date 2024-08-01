<script>
	import RandomTimeline from './RandomTimeline.svelte';
	import RangeArc from './RangeArc.svelte';
	import Timeline from './Timeline.svelte';
	import data from '@/data.gen.json';

	const whole = data.filter((x) => x.time === 'WHOLE').length;
	const oneTwo = data.filter((x) => x.time === '13:30/14:30').length;
	const twoThree = data.filter((x) => x.time === '14:30/15:30').length;
	const threeFour = data.filter((x) => x.time === '15:30/16:30').length;
	const unknown = data.filter((x) => x.time === 'UNKNOWN').length;
</script>

<table mx-auto text="6 lg:8">
	<tr>
		<td></td>
		<th>{whole}</th>
		<th>{oneTwo}</th>
		<th>{twoThree}</th>
		<th>{threeFour}</th>
		<th>{unknown}</th>
	</tr>
	<tr>
		<td></td>
		<th>13:30</th>
		<td rowspan="7" text-blue>
			<Timeline length={7} balls={whole} />
		</td>
		<td rowspan="3" text-orange>
			<Timeline length={3} balls={oneTwo} />
		</td>
		<td></td>
		<td></td>
		<td rowspan="7">
			<RandomTimeline length={7} balls={unknown} />
		</td>
	</tr>
	<tr>
		<td>
			<RangeArc>
				{whole + oneTwo} + &alpha;
			</RangeArc>
		</td>
		<th>14:00</th>
	</tr>
	<tr>
		<td></td>
		<th>14:30</th>
		<td rowspan="3" text-yellow>
			<Timeline length={3} balls={twoThree} />
		</td>
	</tr>
	<tr>
		<td><RangeArc>{whole + twoThree} + &alpha;</RangeArc></td>
		<th>15:00</th>
	</tr>
	<tr>
		<td></td>
		<th>15:30</th>
		<td></td>
		<td rowspan="3" text-green>
			<Timeline length={3} balls={threeFour} />
		</td>
	</tr>
	<tr>
		<td><RangeArc>{whole + threeFour} + &alpha;</RangeArc></td>
		<th>16:00</th>
	</tr>
	<tr>
		<td></td>
		<th>16:30</th>
	</tr>
</table>

<style>
	tr {
		@apply "h-12 lg:h-16";
	}
	th,
	td {
		@apply "w-14 lg:w-20";
	}
	td:first-of-type {
		@apply "w-20 lg:w-30";
	}
</style>
