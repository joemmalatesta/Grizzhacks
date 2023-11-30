<script lang="ts">
	import FaqElement from '../../components/FaqElement.svelte';
	import MemberPic from '../../components/MemberPic.svelte';
	import SectionHeader from '../../components/SectionHeader.svelte';
	const members = [
		{
			name: 'Joe',
			source: '/team/joe.avif',
			linkedIn: 'https://www.linkedin.com/in/joe-malatesta/'
		},
		{
			name: 'Amelio',
			source: '/team/amelio.avif',
			linkedIn: 'https://www.linkedin.com/in/amelio-mansour/'
		},
		{
			name: 'Jacob',
			source: '/team/jacob.avif',
			linkedIn: 'https://www.linkedin.com/in/jacob-souro/'
		},
		{
			name: 'Dom',
			source: '/team/dommy.avif',
			linkedIn: 'https://www.linkedin.com/in/dominick-kalaj-42980624b/'
		},
		{
			name: 'Halee',
			source: '/team/halee.avif',
			linkedIn: 'https://www.linkedin.com/in/halee-tisler/'
		},
		{
			name: 'Jacob',
			source: '/team/grot.avif',
			linkedIn: 'https://www.linkedin.com/in/jacob-grot-b3302b1b0/'
		},
		{
			name: 'Bethany',
			source: '/team/bethany.avif',
			linkedIn: 'https://www.linkedin.com/in/bethany-goss-77bg/'
		},
		{
			name: 'Chris',
			source: '/team/chris.avif',
			linkedIn: 'https://www.linkedin.com/in/christopheracastillo/'
		},
		{
			name: 'Domenic',
			source: '/team/dom.avif',
			linkedIn: ''
		},
		{
			name: 'Josh',
			source: '/team/josh.avif',
			linkedIn: 'https://www.linkedin.com/in/joshua-pagonas-0896511a4/'
		},
		{
			name: 'Noah',
			source: '/team/noah.avif',
			linkedIn: 'https://www.linkedin.com/in/noahsabaj/'
		},
		{
			name: 'Sam',
			source: '/team/sam.avif',
			linkedIn: 'https://www.linkedin.com/in/samuelhjung/'
		}
	];

	const faq = [
		{
			q: 'What is a hackathon?',
			a: 'A Hackathon is a 24 hour engineering event where developers, designers, and managers build innovative software and hardware projects to compete for prizes.'
		},
		{
			q: 'What can I expect from at GrizzHacks?',
			a: "During the 24 hour event, you will be free to develop your project the whole time, but if you need a break we will have events, games, and workshops for you to partake in."
		},
		{
			q: 'Who can attend?',
			a: `Anyone currently enrolled in College (school/major doesn't matter) or anyone who has graduated within the last year are free to apply. All participants must adhere to the	<a class="text-indigo-400 hover:text-indigo-600" href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'>MLH code of conduct</a>`
		},
		{
			q: 'How many people can be in a team?',
			a: "Each team may have 1-4 participants. If you don't have a team, you can participate solo or join a team looking for an extra member. There is a dedicated channel in our discord for team formation."
		},
		{
			q: "What if I don't finish?",
			a: "You can present whatever you finish and explain what you would do if you had more time. We understand you can't get every feature added in 24 hours and won't mark you down for it."
		},
		{
			q: "Will food be provided?",
			a: "We got you covered! We'll have four meals throughout the event with all dietary restrictions accounted for."
		},
		{
			q: "How do prizes work?",
			a: `After hacking is done, each team will present their project to a group of judges who will agree on winners. There are multiple prizes that your project may be in contention for`
		},

		
		
		// {
		// 	q: 'Am I able to bring anyone that will not participate in the Hackathon? (Family, friends, etc.)',
		// 	a: 'Only participants may be there during the “hacking” time, but others may be invited to the award ceremony at the end of the Hackathon (after judging).'
		// },
		// {
		// 	q: 'Am I able to leave at any time? Will I be able to return at any time?',
		// 	a: 'Yes, you may leave and return at any time for any reason.'
		// },
		// {
		// 	q: 'What is the sleeping situation?',
		// 	a: 'You are allowed to leave for the night to sleep. Alternatively, we will have a room set up for sleeping if you plan on staying overnight.'
		// },
		// {
		// 	q: 'What should I bring with me? (Money, snacks, clothes, etc.)',
		// 	a: 'Food and snacks will be provided but make sure to bring your school ID, laptop, phone, CHARGERS, deodorant, toothbrush, and overnight necessities.'
		// },
		{
			q: 'When is the application deadline?',
			a: 'Applications will remain open until March 8th or until all available spots are filled. We review applications on a rolling basis so get yours in ASAP!'
		},
		{
			q: 'Will there be travel reimbursement?',
			a: 'More information will be provided soon.'
		},
		{
			q: 'Where/When is GrizzHacks?',
			a: 'Oakland University Engineering Center. There is free parking outside of the building or in a nearby parking garage.'
		},
		{
			q: 'Other questions?',
			a: `You can email <a class="text-indigo-400 hover:text-indigo-600" href="mailto:grizzhacksou@gmail.com">Grizzhacksou@gmail.com</a> with any other questions`
		}
	];
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class=" flex flex-col justify-center items-center">
	<div class="py-5">
		<SectionHeader title={"FAQ's"} />
	</div>
	<div class="grid lg:grid-cols-2 grid-cols-1 w-full gap-1">
		{#each faq as question}
			<div>
				<FaqElement question={question.q} answer={question.a} />
			</div>
		{/each}
	</div>

	<div class="py-5">
		<SectionHeader title={'Meet the team'} />
	</div>
	<div class="flex justify-center items-center md:gap-10 gap-5 flex-wrap">
		{#each members as member}
			<MemberPic source={member.source} linkedIn={member.linkedIn} name={member.name} />
		{/each}
	</div>
</div>
