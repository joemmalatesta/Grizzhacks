<script lang="ts">
	export let title: string;
</script>


<!-- OPTION 1 -->
<!-- <div class="flex items-start justify-center flex-col relative">
	<h1
		class="abolsute bg-indigo-200 z-20 bg-clip-text text-center text-5xl py-2 text-transparent font-bold lg:text-7xl"
	>
		{title}
	</h1>
	<h1
		class="absolute md:translate-y-2 translate-y-1 opacity-60 bg-indigo-400 bg-clip-text text-center text-5xl py-2 text-transparent font-bold lg:text-7xl"
	>
		{title}
	</h1>
	<h1
		class="absolute md:translate-y-4 translate-y-2 opacity-50 bg-indigo-500 bg-clip-text text-center text-5xl py-2 text-transparent font-bold lg:text-7xl"
	>
		{title}
	</h1>
	<h1
		class="absolute md:translate-y-6 translate-y-3 opacity-40 bg-indigo-600 bg-clip-text text-center text-5xl py-2 text-transparent font-bold lg:text-7xl"
	>
		{title}
	</h1>
	<h1
		class="absolute md:translate-y-8 translate-y-4 opacity-30 bg-indigo-700 bg-clip-text text-center text-5xl py-2 text-transparent font-bold lg:text-7xl"
	>
		{title}
	</h1>
</div> -->




<!-- Option 2 -->
<div class="relative">
	<h1
		class="absolute bg-gradient-to-b from-indigo-500 to-indigo-300 bg-clip-text text-5xl py-2 text-transparent font-bold lg:text-7xl"
	>
		{title}
	</h1>
	<h1
		class="bg-gradient-to-b from-indigo-500 blur-sm opacity-40 to-indigo-300 bg-clip-text text-5xl py-2 text-transparent font-bold lg:text-7xl"
	>
		{title}
	</h1>
</div>
