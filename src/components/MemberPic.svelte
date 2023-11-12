<script lang="ts">
	import { slide,fly  } from "svelte/transition";

	export let name: string;
	export let source: string;
	export let linkedIn: string;

	let hovered: boolean = false;
	$: console.log(hovered);
</script>

<a
	href={linkedIn}
	class="relative xl:w-48 xl:h-48 lg:w-44 lg:h-44 w-36 h-36 object-cover rounded-full cursor-pointer ring-2 ring-indigo-400 ring-opacity-40"
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
        
			class=" h-1/2 w-full absolute bottom-0 bg-gradient-to-b from-transparent to-indigo-600 opacity-80 z-10 rounded-b-full flex justify-center items-center"
		>
        <div in:slide class="flex gap-2 justify-center items-center ">
            <p class="lg:text-2xl text-white md:text-xl text-lg">{name}</p>
        <img src="/linkedin.svg" alt="LinkedIn" class="lg:w-8 md:w-6 w-5"></div>
			
		</div>
	{/if}
</a>
