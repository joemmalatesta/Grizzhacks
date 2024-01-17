<script lang="ts">
	export let title: string;
</script>


<!-- OPTION 1 -->
<div class="flex items-start justify-center flex-col relative mb-2">
	<h1
		class="abolsute bg-indigo-200 z-20 bg-clip-text text-center text-5xl py-2 text-transparent font-bold lg:text-7xl"
	>
		{title}
	</h1>
	<h1
		class="absolute md:translate-y-2 translate-y-1 opacity-60 bg-indigo-600 bg-clip-text text-center text-5xl py-2 text-transparent font-bold lg:text-7xl"
	>
		{title}
	</h1>
	<h1
		class="absolute md:translate-y-4 translate-y-2 opacity-50 bg-indigo-700 bg-clip-text text-center text-5xl py-2 text-transparent font-bold lg:text-7xl"
	>
		{title}
	</h1>
	<h1
		class="absolute md:translate-y-6 translate-y-3 opacity-40 bg-indigo-800 bg-clip-text text-center text-5xl py-2 text-transparent font-bold lg:text-7xl"
	>
		{title}
	</h1>
	<h1
		class="absolute md:translate-y-8 translate-y-4 opacity-30 bg-indigo-900 bg-clip-text text-center text-5xl py-2 text-transparent font-bold lg:text-7xl"
	>
		{title}
	</h1>
</div>
	<!-- <h1
		class="text-4xl lg:text-5xl 2xl:text-6xl font-bold bg-gradient-to-b from-indigo-400 to-indigo-600 bg-clip-text text-transparent"
	>
		{title}
	</h1> -->
