<script lang="ts">
	import { onMount } from 'svelte';

	//Use in async
	// @ts-ignore
	const sleep = (milliseconds) => {
		return new Promise((resolve) => setTimeout(resolve, milliseconds));
	};

	export let words = ['We are so back'];
	let output = '';
	let wordIndex = 0;
	let letterIndex = 0;

	//Delete word letter by letter
	async function deleteWord() {
		let word = words[wordIndex];
		//Delete letters one at a time, with a wait
		for (let i = word.length - 1; i >= 0; i--) {
			output = output.slice(0, -1);
			await sleep(60);
		}
		letterIndex = 0;
	}

	async function type() {
		//initial part could probably be put in a different function
		let word = words[wordIndex];
		while (letterIndex < word.length) {
			output += word[letterIndex];
			letterIndex++;
			await sleep(60);
		}
		// Word sits for a second before deleting
		await sleep(1400);
		await deleteWord();
		await sleep(200);

		// Loop through all possible words and restart at end
		if (wordIndex < words.length - 1) {
			wordIndex++;
		} else {
			wordIndex = 0;
		}

		//Loop forever!
		await type();
	}

	onMount(async () => {
		await sleep(200);
		await type();
	});
</script>

<div class="flex text-neutral-400">
	{output}<span class=" blink text-neutral-400">|</span>
</div>

<style>
	.blink {
		animation: blink-animation 1s steps(5, start) infinite;
		-webkit-animation: blink-animation 1s steps(5, start) infinite;
	}
	@keyframes blink-animation {
		to {
			visibility: hidden;
		}
	}
	@-webkit-keyframes blink-animation {
		to {
			visibility: hidden;
		}
	}
</style>
