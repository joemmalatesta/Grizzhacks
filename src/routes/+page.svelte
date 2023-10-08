<script lang="ts">
	import TypeWriter from '../components/TypeWriter.svelte';
	export let form: any;

	let incorrectEmailError: boolean = false;
	let emailAlreadyRegistered: boolean = false;

	$: if (form?.response === 'invalid email') {
		incorrectEmailError = true;
	} else if (form?.response === 'email already registered') {
		emailAlreadyRegistered = true;
	} else {
		incorrectEmailError = false;
        emailAlreadyRegistered = false;
	}


    // Set up form elements for pre register.
	let email: string;
	let firstName: string;
</script>

<svelte:head>
	<title>GrizzHacks</title>
</svelte:head>

<div class="flex justify-center items-center w-screen h-screen overflow-hidden flex-col gap-2">
	<div class="flex flex-col justify-center items-center mx-3">
		<img src="/Grizzhacks.png" alt="GrizzHacks" />
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
</div>
