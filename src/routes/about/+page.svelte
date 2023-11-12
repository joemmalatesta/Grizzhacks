<script lang="ts">
	import MemberPic from '../../components/MemberPic.svelte';
	import SectionHeader from '../../components/SectionHeader.svelte';
	const members = [
		{
			name: 'Joe',
			source: '/team/joe.jpg',
			linkedIn: 'https://www.linkedin.com/in/joe-malatesta/'
		},
		{
			name: 'Amelio',
			source: '/team/amelio.jpg',
			linkedIn: 'https://www.linkedin.com/in/amelio-mansour/'
		},
		{
			name: 'Jacob',
			source: '/team/jacob.avif',
			linkedIn: 'https://www.linkedin.com/in/jacob-souro/'
		},
		{
			name: 'Halee',
			source: '/team/halee.jpg',
			linkedIn: 'https://www.linkedin.com/in/halee-tisler/'
		},
		{
			name: 'Jacob',
			source: '/team/grot.jpg',
			linkedIn: 'https://www.linkedin.com/in/jacob-grot-b3302b1b0/'
		},
		{
			name: 'Bethany',
			source: '/team/bethany.avif',
			linkedIn: 'https://www.linkedin.com/in/bethany-goss-77bg/'
		},
		{
			name: 'Chris',
			source: '/team/chris.jpg',
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
			source: '/team/noah.jpg',
			linkedIn: 'https://www.linkedin.com/in/noahsabaj/'
		},
		{
			name: 'Sam',
			source: '/team/sam.jpg',
			linkedIn: 'https://www.linkedin.com/in/samuelhjung/'
		}
	];
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class=" flex flex-col justify-center items-center">
	<div class="py-5">
		<SectionHeader title={'Meet the team'} />
	</div>
	<div class="flex justify-center items-center gap-10 flex-wrap">
		{#each members as member}
			<MemberPic source={member.source} linkedIn={member.linkedIn} name={member.name} />
		{/each}
	</div>
</div>
