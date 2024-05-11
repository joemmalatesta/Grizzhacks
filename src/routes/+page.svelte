<script lang="ts">
	import SectionHeader from '../components/SectionHeader.svelte';
	import FaqElement from '../components/FaqElement.svelte';
	import MemberPic from '../components/MemberPic.svelte';
	import { tracks } from '$lib/tracks';
	import { faq } from '$lib/faq';
	import { sponsors } from '$lib/sponsors';
	let activeFaq: number;

	import { members } from '$lib/team';
	import TrackCard from '../components/TrackCard.svelte';
	import Sponsor from '../components/Sponsor.svelte';
	import SponsorBento from '../components/sponsorBento.svelte';
	import EventDay from '../components/EventDay.svelte';
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

<main>
	<!-- Hero -->
	<section class="w-full containerr">
		<!-- Desktop pic -->
		<img
			src="DSC_0794-min.webp"
			alt="GrizzHacks hero background"
			class="w-full absolute inset-0 opacity-10 -scale-x-100 -z-50 hidden lg:block overflow-hidden"
		/>
		<!-- Phone Pic -->
		<img
			src="second-min.webp"
			alt="GrizzHacks hero background"
			class="w-screen absolute inset-0 opacity-10 -scale-x-100 -z-50 lg:hidden overflow-hidden"
		/>
		<div class="flex flex-col mt-12 md:mt-10 2xl:mt-20">
			<h2 class="text-5xl lg:text-7xl 2xl:text-8xl font-light">Dream it,</h2>
			<h1
				class="text-7xl lg:text-9xl 2xl:text-9xl font-bold bg-gradient-to-b from-indigo-400 to-indigo-600 bg-clip-text text-transparent"
			>
				Build it.
			</h1>
			<!-- <p class="2xl:text-2xl lg:text-xl mx-2 text-neutral-300">A 24 hour engineering marathon designed for the </p> -->
		</div>
		<div class="flex flex-col gap-5 mb-10 mt-6">
			<div class="flex gap-4 items-center">
				<img class="w-12 lg:w-14 2xl:w-16" src="pin.svg" alt="" />
				<p class="text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-white">Oakland University</p>
			</div>
			<div class="flex gap-4 items-center">
				<img class="w-12 lg:w-14 2xl:w-16" src="time.svg" alt="" />
				<p class="text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-white">March 9-10th</p>
			</div>
		</div>
		<div class="flex flex-col gap-1">
			<a
				href="https://gabriellemack.smugmug.com/GrizzHacks2024"
				class="flex items-center justify-center p-3 px-5 text-2xl lg:text-3xl 2xl:text-3xl rounded-xl bg-indigo-600 hover:bg-indigo-700 w-fit text-white font-semibold relative ring-2 ring-indigo-700"
				style="font-family: 'Montserrat', sans-serif;">GrizzHacks 6 Pictures</a
			>
			<p
				class="flex text-lg font-semibold"
				style="font-family: 'Montserrat', sans-serif;">GrizzHacks 7 date  soon!</p
			>
		</div>
	</section>
	<!-- About -->
	<div id="about" class="containerr 2xl:mt-72 lg:mt-44 mt-36 p-2 my-10 bg-gradient-to-b">
		<div class=" flex justify-center mb-5"><SectionHeader title={'About'} /></div>
		<div class="flex lg:flex-row flex-col gap-5">
			<div class="flex flex-col lg:w-3/5 lg:m-0 justify-around">
				<div class="flex gap-2 flex-col">
					<div class="flex flex-col my-2">
						<h4 class="text-xl lg:text-2xl 2xl:text-3xl font-semibold">
							GrizzHacks is back <i class="text-indigo-400">in person</i>
						</h4>
						<p class="2xl:text-lg">
							GrizzHacks is a 24 hour engineering marathon, welcome to anyone. Whether you're a
							seasoned developer building a new idea, a beginner looking to sharpen your skills, or
							a unrelated major just interested in learning more, we have something for you!
						</p>
					</div>
					<div class="flex flex-col my-2">
						<!-- <h4 class="text-xl lg:text-2xl 2xl:text-3xl font-bold">How it works</h4> -->
						<p class="2xl:text-lg">
							Over the course of 24 hours, each team will build a project from the ground up and
							then present their work to a panel of judges to compete for prizes! You're allowed to
							create anything you can think up but if you need some inspiration, check out our <a
								href="#tracks"
								class="text-indigo-400 underline underline-offset-2 hover:underline-offset-4 transition-all"
								>tracks</a
							> this year.
						</p>
					</div>
				</div>
				<p class="2xl:text-lg">
					Still have questions? Check out our <a
						href="/#faq"
						class="text-indigo-400 underline underline-offset-2 hover:underline-offset-4 transition-all"
						>FAQ</a
					>.
				</p>
			</div>
			<div class="w-full lg:w-2/5 relative">
				<img src="cool-min.webp" class="rounded-lg" alt="Top down view of GrizzHacks" />
				<div class="inset-0 absolute bg-neutral-900/30 rounded-lg z-10" />
			</div>
		</div>
	</div>

	<!-- EVENT SCHEDULE -->
	<section id="schedule" class="containerr my-10 oultine outline-white">
		<div class=" flex justify-center mb-5"><SectionHeader title={'Schedule'} /></div>
		<EventDay />
	</section>


	<!-- Tracks -->
	<section id="tracks" class="containerr my-10 oultine outline-white">
		<div class=" flex justify-center mb-5"><SectionHeader title={'Tracks'} /></div>
		<div class="grid lg:grid-cols-2 gap-4">
			{#each tracks as track}
				<TrackCard title={track.track} description={track.description} icon={track.icon} />
			{/each}
		</div>
	</section>

	<!-- Sponsors -->
	<section id="sponsors" class="containerr my-16">
		<div class="flex justify-center mb-5"><SectionHeader title={'Sponsors'} /></div>
		<SponsorBento />
	</section>
	<!-- FAQ's -->
	<section id="faq" class="containerr my-16">
		<div class="flex justify-center mb-5"><SectionHeader title={"FAQ's"} /></div>
		<div class="hidden justify-center gap-1 lg:flex">
			<div class="flex flex-col w-1/2 mt-1 ">
				{#each faq as question, index}
				<!-- svelte-ignore a11y-no-static-element-interactions -->
					<div
					class="my-0.5 "
						on:click={() => {
							activeFaq = index;
						}}
						on:keypress={() => {
							activeFaq = index;
						}}
					>
						<FaqElement question={question.q} answer={question.a} active={index == activeFaq} show={index % 2 == 0} />
					</div>
				{/each}
			</div>
			<div class="flex flex-col w-1/2 ">
				{#each faq as question, index}
				<!-- svelte-ignore a11y-no-static-element-interactions -->
					<div
					class="my-0.5"
						on:click={() => {
							activeFaq = index;
						}}
						on:keypress={() => {
							activeFaq = index;
						}}
					>
						<FaqElement question={question.q} answer={question.a} active={index == activeFaq} show={index % 2 != 0} />
					</div>
				{/each}
			</div>
		</div>
		<div class="grid lg:hidden grid-cols-1 gap-1">
			{#each faq as question, index}
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					on:click={() => {
						activeFaq = index;
					}}
					on:keypress={() => {
						activeFaq = index;
					}}
				>
					<FaqElement question={question.q} answer={question.a} active={index == activeFaq} show={true} />
				</div>
			{/each}
		</div>
	</section>
	<!-- Team -->
	<section id="team" class="containerr my-16">
		<div class="flex justify-center mb-5"><SectionHeader title={'Meet the team'} /></div>
		<div class="flex justify-center items-center md:gap-10 gap-5 flex-wrap mt-6">
			{#each members as member}
				<MemberPic source={member.source} linkedIn={member.linkedIn} name={member.name} />
			{/each}
		</div>
	</section>
</main>

<style>
	.containerr {
		@apply px-2;
	}

	section {
		@apply my-24;
	}
</style>
