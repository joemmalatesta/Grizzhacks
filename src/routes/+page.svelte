<script lang="ts">
	import TypeWriter from "../components/TypeWriter.svelte";


</script>


<svelte:head>
    <title>GrizzHacks</title>
</svelte:head>


<div class="flex justify-center items-center w-screen h-screen overflow-hidden flex-col gap-2">
    <div class="flex flex-col justify-center items-center mx-3">
    <img src="/Grizzhacks.png" alt="GrizzHacks" >
    <h3 class="md:text-2xl text-xl font-bold"><TypeWriter words={["Rebooted"]}/></h3>
    </div>
    
    <h3 class="md:text-3xl text-xl md:w-[35rem]  text-center text-neutral-400 my-5">Oakland University's Hackathon is back March 9-10th</h3>
    
    
    <a href="https://tally.so/r/3XorWP" class="flex items-center rounded-md lg:text-3xl text-xl text-indigo-400 mb-10 font-semibold underline underline-offset-4 hover:underline-offset-8 transition-all">Notify me when I can register <img src="/arrow.svg" alt="Arrow" class="mx-2 md:w-8 w-6 rotate-90"></a>
    
    <h3 class="md:text-xl md:w-[30rem] text-center">Interested in becoming a sponsor? Reach out to <a class="text-indigo-400 underline underline-offset-4 hover:underline-offset-8 transition-all" href="mailto:grizzhacksou@gmail.com">grizzhacksou@gmail.com</a> for more information</h3>

</div>