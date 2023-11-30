<script lang="ts">
	import { slide } from 'svelte/transition';

	let burgerClicked: boolean = false;
</script>

<!-- MLH Banner -->
<div class="md:w-20 w-[4.5rem] absolute top-0 xl:right-10 lg:right-2 right-[40%]">
	<a
		id="mlh-trust-badge"
		href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=black"
		target="_blank"
		><img
			src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-black.svg"
			alt="Major League Hacking 2024 Hackathon Season"
			style="width:100%"
		/></a
	>
</div>

<!-- Main Navbar -->
<nav
	class="w-full h-20 bg-neutral-950/20 rounded-lg flex justify-between items-center px-10 py-3 mb-4 mt-6"
>
<!-- GH Logo -->
	<a
		href="/"
		class="md:w-16 w-12"
		on:click={() => {
			burgerClicked = false;
		}}><img src="favicon.svg" alt="GrizzHacks" class="object-cover" /></a
	>
	<div class="lg:flex gap-3 text-2xl hidden">
		<a href="/about" class="">About</a>
		<!-- <a href="/register">Register</a> -->
	</div>
	<button
		class="flex flex-col py-2 pb-2 px-1 lg:hidden"
		on:click={() => {
			burgerClicked = !burgerClicked;
		}}
	>
		<!-- Make burger that turns into an X -->
		<div
			class="w-10 bg-white h-1 origin-center {burgerClicked
				? 'rotate-45 translate-y-0.5'
				: 'rotate-0 -translate-y-1'} transition-all duration-300"
		/>
		<div
			class="w-10 bg-white h-1 origin-center {burgerClicked
				? '-rotate-45 -translate-y-0.5'
				: 'rotate-0 translate-y-1'} transition-all duration-300"
		/>
	</button>
</nav>

{#if burgerClicked}
	<div class="flex flex-col lg:hidden justify-end items-end text-xl">
		<a
			href="/about"
			class=""
			on:click={() => {
				burgerClicked = false;
			}}>About</a
		>
		<!-- <a href="/register">Register</a> -->
	</div>
{/if}
