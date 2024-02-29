<script lang="ts">
	import { fly, slide } from 'svelte/transition';

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
	class="w-full h-20 md:bg-neutral-900/80 rounded-lg flex justify-between items-center md:px-10 py-3 mb-4 md:mt-6 px-4"
>
	<!-- GH Logo -->
	<a
		href="/"
		class="md:w-16 w-12"
		on:click={() => {
			burgerClicked = false;
		}}><img src="favicon.svg" alt="GrizzHacks" class="object-cover" /></a
	>
	<div class="lg:flex gap-7 text-2xl hidden">
		<a href="#about" class="font-semibold hover:text-indigo-500 transition-all duration-100"
			>About</a
		>
		<a href="#schedule" class="font-semibold hover:text-indigo-500 transition-all duration-100"
			>Schedule</a
		>
		<a href="#tracks" class="font-semibold hover:text-indigo-500 transition-all duration-100"
			>Tracks</a
		>
		<a href="#sponsors" class="font-semibold hover:text-indigo-500 transition-all duration-100"
			>Sponsor</a
		>
		<a href="#faq" class="font-semibold hover:text-indigo-500 transition-all duration-100">FAQ</a>
		<a href="#team" class="font-semibold hover:text-indigo-500 transition-all duration-100">Team</a>

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
	<div
		class="flex flex-col lg:hidden text-xl bg-[#262626] w-screen h-screen navActive absolute inset-0 z-50"
		transition:slide
	>
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
		<nav class="h-20 rounded-lg flex justify-between items-center md:px-10 py-3 mb-4 md:mt-6 mx-4">
			<a
				href="/"
				class="md:w-16 w-12"
				on:click={() => {
					burgerClicked = false;
				}}><img src="favicon.svg" alt="GrizzHacks" class="object-cover" /></a
			>
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
		<a
			on:click={() => {
				burgerClicked = false;
			}}
			transition:fly={{ delay: 100 }}
			class="h-16 w-full flex items-center border-b-4 border-indigo-600 hover:border-indigo-300 text-4xl mt-10 my-2"
			href="#about"><div transition:fly={{ x: 200, delay: 100 }} class="mx-4">About</div></a
		>
		<a
			on:click={() => {
				burgerClicked = false;
			}}
			transition:fly={{ delay: 250 }}
			class="h-16 w-full flex items-center border-b-4 border-indigo-600 hover:border-indigo-300 text-4xl my-2"
			href="/#schedule"><div transition:fly={{ x: 200, delay: 175 }} class="mx-4">Schedule</div></a
		>
		<a
			on:click={() => {
				burgerClicked = false;
			}}
			transition:fly={{ delay: 175 }}
			class="h-16 w-full flex items-center border-b-4 border-indigo-600 hover:border-indigo-300 text-4xl my-2"
			href="/#tracks"><div transition:fly={{ x: 200, delay: 250 }} class="mx-4">Tracks</div></a
		>
		<a
			on:click={() => {
				burgerClicked = false;
			}}
			transition:fly={{ delay: 325 }}
			class="h-16 w-full flex items-center border-b-4 border-indigo-600 hover:border-indigo-300 text-4xl my-2"
			href="/#sponsors"><div transition:fly={{ x: 200, delay: 325 }} class="mx-4">Sponsors</div></a
		>
		<a
			on:click={() => {
				burgerClicked = false;
			}}
			transition:fly={{ delay: 325 }}
			class="h-16 w-full flex items-center border-b-4 border-indigo-600 hover:border-indigo-300 text-4xl my-2"
			href="/#faq"><div transition:fly={{ x: 200, delay: 400 }} class="mx-4">FAQ's</div></a
		>
		<a
			on:click={() => {
				burgerClicked = false;
			}}
			transition:fly={{ delay: 250 }}
			class="h-16 w-full flex items-center border-b-4 border-indigo-600 hover:border-indigo-300 text-4xl my-2"
			href="/#team"><div transition:fly={{ x: 200, delay: 475 }} class="mx-4">Team</div></a
		>

		<!-- <a href="/register">Register</a> -->
	</div>
{/if}
