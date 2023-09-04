<script lang="ts">
	import TypeWriter from "../components/TypeWriter.svelte";


</script>


<svelte:head>
    <title>GrizzHacks</title>
</svelte:head>


<div class="flex justify-center items-center w-screen h-screen overflow-hidden flex-col gap-2">
    <div class="flex gap-1 lg:w-1/4 w-1/2">
    <img src="/favicon.svg" alt="GrizzHacks">
    <p class="text-3xl text-indigo-500 md:text-6xl">6</p>
    </div>
    <h3 class="md:text-4xl text-2xl font-bold"><TypeWriter words={["Rebooted"]}/></h3>
    
    
    <a href="https://forms.gle/U5kEnKz1xzQzJb9F8" class="rounded-md lg:text-3xl text-xl text-neutral-400 mt-8 font-semibold underline underline-offset-4 hover:underline-offset-8 transition-all">Become a coordinator</a>
    

</div>