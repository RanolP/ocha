<script lang="ts">
	export let name: string;
</script>

<div flex="~ row" gap-4 mx-auto px="4 md:8 lg:16" items-center>
	<hr flex-1 border-border-1 />
	<span align-middle text-6>{name}</span>
	<hr flex-1 border-border-1 />
</div>
