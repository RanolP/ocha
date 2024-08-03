<script lang="ts">
	import { page } from '$app/stores';
	import type { SectionType } from '@/shared/section';

	export let currentSection: string | null;
	export let sections: SectionType[];
</script>

<header w-full sticky top-0 bg-background-2 shadow-lg z-10>
	<nav w-full flex="~ row" justify-center text="4 lg:6" font-sans font-900>
		<ul py-4 flex="~ row">
			{#each sections as section, i (section.id)}
				{#if i !== 0}
					<div mx-4 my-1.5 inline-block w="2px" bg-foreground-1></div>
				{/if}
				<li aria-current={currentSection === section.id}>
					<a href={`#${section.id}`}>{section.name}</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
</style>
