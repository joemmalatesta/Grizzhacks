<script lang="ts">
	export let index: number;
	export let title: string;
	export let description: string = '';
	export let time: string;
	let color: string;
	$: if (index % 2 == 0) {
		color = 'bg-neutral-950/80';
	} else {
		color = 'bg-neutral-950/50';
	}

	let clicked: boolean = false;
</script>

{#if !clicked}
	<div class="w-full p-4 flex-col {color} ">
		<div class="flex justify-between">
			<h5 class="text-white lg:text-lg">
				{title}
			</h5>
			<p class="text-neutral-400 lg:text-base text-sm">{time}</p>
		</div>
		<p class="text-xs lg:text-sm mt-1 text-neutral-300/90">{@html description}</p>
	</div>
{/if}
