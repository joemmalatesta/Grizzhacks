<script lang="ts">
	export let title: string;
	export let icon: string;
	export let description: string;
</script>

<div
	class="flex flex-col gap-4 px-4 bg-gradient-to-br from-neutral-950/80 via-neutral-900/80 to-indigo-950/80 lg:p-5 p-3 rounded-md"
>
	<div class="flex flex-row items-center justify-center gap-4">
		<img src="tracks/{icon}" alt="{title} track" class="w-16 lg:w-20 2xl:w-28" />
		<h5 class="text-xl lg:text-3xl font-bold">{title}</h5>
	</div>
	<p class="2xl:text-xl text-sm text-center">{description}</p>
</div>
