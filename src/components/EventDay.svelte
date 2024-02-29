<script lang="ts">
	import { events } from '$lib/events';
	import { fly, slide } from 'svelte/transition';
	import ScheduleEvent from './ScheduleEvent.svelte';

	let saturdaySelected: boolean = true;
</script>

<!-- BIG SCREEN -->
<!-- Saturday -->
<div class="w-full gap-3 hidden lg:flex">
	<div class="w-1/2 flex flex-col">
		<h4 class="text-2xl mb-2 text-neutral-300/80">
			<span class="font-semibold text-white">Saturday</span> March 9th
		</h4>
		<div class="overflow-auto h-[30rem] rounded-lg">
			{#each events as event, index}
				{#if event.day === 'saturday'}
					<ScheduleEvent
						{index}
						title={event.name}
						time={event.time}
						description={event.description}
					/>
				{/if}
			{/each}
		</div>
	</div>
	<!-- Sunday -->
	<div class="w-1/2">
		<h4 class="text-2xl mb-2 text-neutral-300/80">
			<span class="font-semibold text-white">Sunday</span> March 10th
		</h4>
		<div class="overflow-auto h-[30rem] rounded-lg">
			{#each events as event, index}
				{#if event.day === 'sunday'}
					<ScheduleEvent
						{index}
						title={event.name}
						time={event.time}
						description={event.description}
					/>
				{/if}
			{/each}
		</div>
	</div>
</div>

<!-- SMALL SCREEN -->
<!-- Need to toggle Saturday or Sunday -->
<div class="w-full lg:hidden">
	{#key saturdaySelected}
		<div class=" flex items-end mx-1 justify-between mb-1" transition:slide={{ duration: 500 }}>
			<h4 class="text-2xl text-neutral-300/80">
				<span class="font-semibold text-white">{saturdaySelected ? 'Saturday' : 'Sunday'}</span>
				{saturdaySelected ? 'March 9th' : 'March 10th'}
			</h4>

			<button
				class="flex items-center text-sm"
				on:click={() => {
					saturdaySelected = !saturdaySelected;
				}}
				>{saturdaySelected ? 'Sunday' : 'Saturday'}
				<img src="/arrowRight.svg" alt="arrow" /></button
			>
		</div>
	{/key}
	<div class="overflow-auto h-[30rem] rounded-lg">
		{#each events as event, index}
			{#if event.day == (saturdaySelected ? 'saturday' : 'sunday')}
				<ScheduleEvent
					{index}
					title={event.name}
					time={event.time}
					description={event.description}
				/>
			{/if}
		{/each}
	</div>
</div>
