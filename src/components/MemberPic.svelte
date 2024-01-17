<script lang="ts">
	import { slide, fly } from 'svelte/transition';

	export let name: string;
	export let source: string;
	export let linkedIn: string;

	let hovered: boolean = false;
</script>

<div class="flex flex-col items-center gap-0.5 relative">
	<div class="absolute inset-0 bg-neutral-950/10 rounded-full"></div>
	<a
		href={linkedIn}
		class="relative xl:w-44 xl:h-44 lg:w-36 lg:h-36 w-16 h-16 object-cover rounded-full cursor-pointer ring-2 ring-indigo-400 ring-opacity-40"
		on:mouseenter={() => {
			hovered = true;
		}}
		on:mouseleave={() => {
			hovered = false;
		}}
	>
		<img
			src={source}
			alt={name}
			class="absolute inset-0 rounded-full w-full h-full object-cover -z-10"
		/>
		{#if hovered}
			<div
				class="hidden lg:flex h-1/2 w-full absolute bottom-0 bg-gradient-to-b from-transparent to-indigo-600 opacity-80 z-10 rounded-b-full justify-center items-center"
			>
				<div in:slide class="flex gap-2 justify-center items-center">
					<p class="xl:text-2xl text-white lg:text-xl text-lg">{name}</p>
				</div>
			</div>
		{/if}
	</a>
	<p class="lg:hidden">{name}</p>
</div>
