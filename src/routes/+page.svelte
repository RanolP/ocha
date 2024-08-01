<script lang="ts">
	import Section from '@/widgets/Section.svelte';
	import SectionSeparator from '@/widgets/SectionSeparator.svelte';

	import data from '@/data.gen.json';

	import Header from '@/widgets/Header.svelte';
	import type { SectionType } from '@/shared/section';
	import InfoSection from './_components/InfoSection.svelte';
	import PeoplePerTimeSection from './_components/PeoplePerTimeSection.svelte';
	import PeopleList from './_components/PeopleList.svelte';

	const currentSection = null;
	const sections: SectionType[] = [
		{
			id: 'info',
			name: '정보',
			Component: InfoSection
		},
		{
			id: 'people-per-time',
			name: '시간대별 인원',
			Component: PeoplePerTimeSection
		},
		{
			id: 'people-all',
			name: '전체 인원 일람표',
			Component: PeopleList
		}
	];
</script>

<svelte:head>
	<title>오차</title>
	<meta name="description" content="오차: (복닥복닥한) 오후의 차를 위한 보조 페이지" />
</svelte:head>

<Header {sections} {currentSection} />
<main text-center max-w-340 mx-auto flex-1>
	<h1>
		<span text="10 md:14" font-900>오차</span>
		<p text="6 md:8" font-700>
			<small>(복닥복닥한)</small>&nbsp;오후의&nbsp;차를 위한 보조&nbsp;페이지
		</p>
	</h1>
	<p text="center 4 md:5 lg:6" font-500>
		본&nbsp;웹사이트는 (주)&nbsp;도서출판&nbsp;인사이트 및 <small>(복닥복닥한)</small
		>&nbsp;오후의&nbsp;차&nbsp;운영&nbsp;측과
		<span font-600 underline>관계가&nbsp;없습니다.</span>
	</p>

	{#each sections as { id, name, Component }, i (id)}
		{#if i !== 0}
			<div h-6></div>
		{/if}
		<SectionSeparator {name} />
		<Section {id} text="6 md:8">
			<Component />
		</Section>
	{/each}
</main>
