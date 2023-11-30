<script lang="ts">
	import { slide } from "svelte/transition";

	export let question: string;
	export let answer: string;
	export let expanded: boolean = false;
</script>

<div class="rounded-md  {expanded ? "bg-neutral-600/60" : "bg-neutral-950/60"} hover:bg-neutral-600/80 flex flex-col justify-start p-2 m-1 ring-2 ring-neutral-600/60">
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="flex justify-between cursor-pointer"
		on:click={() => {
			expanded = !expanded;
		}}
		on:keypress={() => {
			expanded = !expanded;
		}}
	>
		<h5 class="xl:text-2xl md:text-xl text-lg text-white">{question}</h5>
		<img src="/arrow.svg" alt="Expand" class="w-4 transition-all duration-300 {expanded ? "rotate-90" : "" }" />
		
	</div>
	{#if expanded}
	<div transition:slide class="w-fit">
		<p class="my-1" >{@html answer}</p>
	</div>
		
	{/if}
</div>
