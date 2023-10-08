<script lang="ts">
	import SectionHeader from '../components/SectionHeader.svelte';
	import TypeWriter from '../components/TypeWriter.svelte';
	export let form: any;

	let incorrectEmailError: boolean = false;
	let emailAlreadyRegistered: boolean = false;

	$: if (form?.response === 'invalid email') {
		emailAlreadyRegistered = false;
		incorrectEmailError = true;
	} else if (form?.response === 'email already registered') {
		emailAlreadyRegistered = true;
		incorrectEmailError = false;
	} else {
		incorrectEmailError = false;
		emailAlreadyRegistered = false;
	}

	// Set up form elements for pre register.
	let email: string;
</script>

<svelte:head>
	<title>GrizzHacks</title>
</svelte:head>

<!-- <div class="flex justify-center items-center w-screen h-screen overflow-hidden flex-col gap-2">
	<div class="flex flex-col justify-center items-center mx-3">
		<img class="w-12" src="/Grizzhacks.png" alt="GrizzHacks" />
		<h3 class="md:text-2xl text-xl font-bold"><TypeWriter words={['Rebooted']} /></h3>
	</div>

	<h3 class="md:text-3xl text-xl md:w-[35rem] text-center text-neutral-400 my-5">
		Oakland University's Hackathon is back March 9-10th
	</h3>

	<form method="post" class="flex flex-col gap-2">
		<p>First name</p>
		<input
			class="outline rounded-lg active:outline-white"
			type="text"
			bind:value={firstName}
			name="firstName"
		/>
		<p>Email</p>
		<input
			class="outline rounded-lg active:outline-white"
			type="email"
			bind:value={email}
			name="email"
		/>
		{#if incorrectEmailError}
			<p class="text-red-500 text-xs">Enter valid .edu email</p>
		{/if}
		<button>Pre-Register</button>
		{#if emailAlreadyRegistered}
			<p class="text-red-500 text-xs">Email already pre-registered.</p>
		{/if}
	</form>

	<h3 class="md:text-xl md:w-[30rem] text-center">
		Interested in becoming a sponsor? Reach out to <a
			class="text-indigo-400 underline underline-offset-4 hover:underline-offset-8 transition-all"
			href="mailto:grizzhacksou@gmail.com">grizzhacksou@gmail.com</a
		> for more information
	</h3>
</div> -->

<div class="md:mx-56 md:mt-12 mx-4 mt-6">
	<!-- Navbar -->
	<!-- Hero -->
	<section class="w-full">
		<div class="flex items-start">
			<SectionHeader title={'GrizzHacks'} />
			<div class="relative">
                <h1
                    class="absolute bg-gradient-to-b from-indigo-500 to-indigo-300 bg-clip-text text-2xl py-2 text-transparent font-bold lg:text-3xl"
                >
                    6
                </h1>
                <h1
                    class="bg-gradient-to-b from-indigo-500 blur-sm opacity-40 to-indigo-300 bg-clip-text text-2xl py-2 text-transparent font-bold lg:text-3xl"
                >
                    6
                </h1>
            </div>
		</div>
		<p class="md:text-3xl text-xl ml-1">
			Metro Detroit's largest Hacakathon is back and <span class="text-indigo-400 font-semibold"
				>in person</span
			> for the sixth installation
		</p>
	</section>

	<!-- Icons for location and place -->
	<section class="flex flex-col gap-4 md:mt-12 mt-5">
		<div class="flex items-center gap-2">
			<img class="md:w-12 w-8" src="pin.svg" alt="Location" />
			<p class="md:text-2xl text-xl">Oakland University</p>
		</div>
		<div class="flex items-center gap-2">
			<img class="md:w-12 w-8" src="time.svg" alt="Date" />
			<p class="md:text-2xl text-xl">March 9-10th</p>
		</div>
	</section>

	<!-- Signup -->
	<section class="flex mt-12 flex-col">
		<SectionHeader title={'Registration'} />
		<p class="md:text-2xl text-lg">
			Opening soon... In the meantime, sign up to be notified when registration goes live
		</p>

		<form method="post" class="flex flex-col mt-3">
			<div
				class="flex justify-between md:w-1/3 ring-neutral-400 ring-2 rounded-lg ring-opacity-70 drop-shadow-md"
			>
				<input
					class="w-5/6 rounded-l-lg p-2 text-xl focus:outline-none bg-neutral-700 bg-opacity-40 focus:placeholder:opacity-0 placeholder:transition-all border-r-2 border-neutral-400/70"
					type="email"
					placeholder="GrizzHacks@gmail.com"
					bind:value={email}
					name="email"
				/>
				<button class="w-1/6 bg-neutral-700 bg-opacity-80 hover:bg-opacity-100 p-2 rounded-r-lg">
					->
				</button>
			</div>
			{#if incorrectEmailError}
				<p class="text-red-500 text-sm">Enter a valid email</p>
			{/if}
			{#if emailAlreadyRegistered}
				<p class="text-red-500 text-sm">Email already registered</p>
			{/if}
		</form>
	</section>
	<!-- Sponsorship -->
	<section class="flex mt-12 flex-col">
		<SectionHeader title={'Sponsorship'} />
		<p class="md:text-2xl text-lg mt-1">
			Interested in becoming a sponsor? Reach out to <a
				class="text-indigo-400 underline underline-offset-4 hover:underline-offset-8 transition-all"
				href="mailto:grizzhacksou@gmail.com">grizzhacksou@gmail.com</a
			> for more information
		</p>
	</section>
</div>
