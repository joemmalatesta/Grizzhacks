<script lang="ts">
	import { slide } from "svelte/transition";

	export let question: string;
	export let answer: string;
	export let active: boolean = false;
</script>

<div class="rounded-md  {active ? "bg-neutral-950/60" : "bg-neutral-950/80"} hover:bg-neutral-900/40 flex flex-col justify-start p-3 ">
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="flex justify-between cursor-pointer"
		on:click={() => {
			active = !active;
		}}
		on:keypress={() => {
			active = !active;
		}}
	>
		<h5 class="xl:text-2xl md:text-xl text-lg text-white font-semibold">{question}</h5>
		<img src="/arrow.svg" alt="Expand" class="w-4 transition-all duration-300 {active ? "rotate-90" : "" }" />
		
	</div>
	{#if active}
	<div transition:slide class="w-fit">
		<p class="my-1 text-white xl:text-lg" >{@html answer}</p>
	</div>
		
	{/if}
</div>
