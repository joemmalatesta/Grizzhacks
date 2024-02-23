<script lang="ts">
	import { sponsors } from '$lib/sponsors';
</script>

<!-- LARGE SCREEN SIZE -->
<div class="hidden xl:grid grid-cols-8 grid-rows-4 gap-1.5 p-4">
	<!-- LCA. Gold -->
	<a
		href={sponsors[3].link}
		class="p-6 col-span-2 row-span-2 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#D4AF37]/40 hover:via-[#D4AF37]/80 hover:to-[#D4AF37]/40 hover:bg-gradient-to-bl"
	>
		<img src="sponsors/{sponsors[3].logo}" alt="{sponsors[3].name} Logo" class="" />
	</a>

	<!-- Frich. Bronze -->
	<a
		href={sponsors[12].link}
		class="p-6 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
	>
		<img src="sponsors/{sponsors[12].logo}" alt="{sponsors[12].name} Logo" class="" />
	</a>
	
	<!-- NordPack. Bronze -->
	<a
		href={sponsors[13].link}
		class="p-6 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
	>
	<img src="sponsors/{sponsors[13].logo}" alt="{sponsors[13].name} Logo" class="w-10" />
	<img src="sponsors/{sponsors[15].logo}" alt="{sponsors[15].name} Logo" class="w-10" />
	<img src="sponsors/{sponsors[14].logo}" alt="{sponsors[14].name} Logo" class="w-10" />
	</a>

	<!-- MLH. Bronze -->
	<a
		href={sponsors[1].link}
		class="p-6 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
	>
		<img src="sponsors/{sponsors[1].logo}" alt="{sponsors[1].name} Logo" class="w-24" />
	</a>

	<!-- Github. Bronze -->
	<a
		href={sponsors[5].link}
		class="p-6 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
	>
		<img src="sponsors/{sponsors[6].logo}" alt="{sponsors[5].name} Logo" class="" />
	</a>

		<!-- OUCU. Gold -->
		<a
		href={sponsors[11].link}
		class="p-6 col-span-2 row-span-2 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#D4AF37]/40 hover:via-[#D4AF37]/80 hover:to-[#D4AF37]/40 hover:bg-gradient-to-bl"
	>
		<img src="sponsors/{sponsors[11].logo}" alt="{sponsors[11].name} Logo" class="w-60" />
	</a>

	<!-- <a
		href={sponsors[2].link}
		class="p-6 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
	>
		<p class="font-bold">Coming soon...</p>
	</a> -->
	
	
	

	<!-- Center -->
	<div
		class="p-6 col-span-4 row-span-2 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex flex-col gap-4 relative items-center justify-center rounded-md"
	>
		<img
			class="absolute top-0 left-0 w-full h-full object-cover rounded-lg -z-10"
			src="sponsors-min.webp"
			alt="GrizzHacks sponsors"
		/>
		<h5 class="font-bold text-2xl text-center">These guys make GrizzHacks possible!</h5>
		<p class="text-center text-lg">
			Our sponsors enable us to bring an unparalleled experience to Oakland University year after
			year. If you want to help us continue to empower creativity, collaboration, and
			entrepreneurship among students, contact <a
				class="text-indigo-400 underline underline-offset-2 hover:underline-offset-4 transition-all"
				href="mailto:grizzhacksou@gmail.com">grizzhacksou@gmail.com</a
			>
		</p>
	</div>

	

	<!-- Whisker. Gold -->
	<a
		href={sponsors[8].link}
		class="p-6 col-span-2 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#C0C0C0]/30 hover:via-[#C0C0C0]/70 hover:to-[#C0C0C0]/30 hover:bg-gradient-to-bl"
	>
		<img src="sponsors/{sponsors[8].logo}" alt="{sponsors[8].name} Logo" class="w-60" />

		<!-- <p class="2xl:text-5xl text-2xl font-bold text-center">Coming Soon</p> -->
	</a>

	<!-- Pepsi. Bronze -->
	<!-- <a
		href={sponsors[16].link}
		class="p-6 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
	>
		<img src="sponsors/{sponsors[16].logo}" alt="{sponsors[16].name} Logo" class="w-20" />
	</a> -->
	

	<!-- ROSE HOUSE BRUNCH. SILVER -->
	<a
		href={sponsors[10].link}
		class="p-6 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#C0C0C0]/30 hover:via-[#C0C0C0]/70 hover:to-[#C0C0C0]/30 hover:bg-gradient-to-bl"
	>
		<img src="sponsors/{sponsors[10].logo}" alt="{sponsors[10].name} Logo" class="w-24" />
	</a>
	<a
			href={sponsors[16].link}
			class="md:p-4 p-2 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
		>
			<img src="sponsors/{sponsors[16].logo}" alt="{sponsors[16].name} Logo" class="md:w-20 2xl:w-24" />
		</a>

	

	
	
	<!-- BORG WARNER -->
	<a
		href={sponsors[0].link}
		class="p-6 col-span-2 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#C0C0C0]/30 hover:via-[#C0C0C0]/70 hover:to-[#C0C0C0]/30 hover:bg-gradient-to-bl"
	>
		<img src="sponsors/{sponsors[0].logo}" alt="{sponsors[0].name} Logo" class="w-60" />
	</a>

	<!-- Tim Hortons.  -->
	<a
		href={sponsors[2].link}
		class="p-6 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
	>
		<img src="sponsors/{sponsors[2].logo}" alt="{sponsors[2].name} Logo" class="" />
	</a>

	<!-- COMERICA. BRONZE -->
	<a
		href={sponsors[4].link}
		class="p-6 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
	>
		<img src="sponsors/{sponsors[4].logo}" alt="{sponsors[4].name} Logo" class="" />
	</a>

	<!-- ECHO 3D.  -->
	<a
		href={sponsors[5].link}
		class="p-6 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
	>
		<img src="sponsors/{sponsors[5].logo}" alt="{sponsors[5].name} Logo" class="" />
	</a>

	<!-- VERCEL -->
	<a
		href={sponsors[7].link}
		class="p-6 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
	>
		<img src="sponsors/{sponsors[7].logo}" alt="{sponsors[7].name} Logo" class="" />
	</a>

	<!-- 365 -->
	<a
		href={sponsors[9].link}
		class="p-6 col-span-2 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#C0C0C0]/30 hover:via-[#C0C0C0]/70 hover:to-[#C0C0C0]/30 hover:bg-gradient-to-bl"
	>
		<img src="sponsors/{sponsors[9].logo}" alt="{sponsors[9].name} Logo" class="w-24" />
	</a>

	
</div>

<!--
    Bronze
    hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl

    Silver
    hover:from-[#C0C0C0]/30 hover:via-[#C0C0C0]/70 hover:to-[#C0C0C0]/30 hover:bg-gradient-to-bl

    Gold
    hover:from-[#D4AF37]/40 hover:via-[#D4AF37]/80 hover:to-[#D4AF37]/40 hover:bg-gradient-to-bl
-->

<!-- SMALL SCREEN SIZE -->
<div class="flex xl:hidden flex-col gap-2">
	<!-- GOLD -->
	<a
		href={sponsors[3].link}
		class="p-6 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#D4AF37]/40 hover:via-[#D4AF37]/80 hover:to-[#D4AF37]/40 hover:bg-gradient-to-bl"
	>
		<img src="sponsors/{sponsors[3].logo}" alt="{sponsors[3].name} Logo" class="w-48" />
	</a>
	<a
		href={sponsors[11].link}
		class="p-6 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#D4AF37]/40 hover:via-[#D4AF37]/80 hover:to-[#D4AF37]/40 hover:bg-gradient-to-bl"
	>
		<img src="sponsors/{sponsors[11].logo}" alt="{sponsors[11].name} Logo" class="w-36" />
	</a>
	<!-- SILVER -->
	<div class="grid grid-cols-2 gap-2 w-full">
		<a
			href={sponsors[10].link}
			class="col-span-1 p-6 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#C0C0C0]/30 hover:via-[#C0C0C0]/70 hover:to-[#C0C0C0]/30 hover:bg-gradient-to-bl"
		>
			<img src="sponsors/{sponsors[10].logo}" alt="{sponsors[10].name} Logo" class="w-20" />
		</a>
		<a
			href={sponsors[9].link}
			class="p-6 col-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#C0C0C0]/30 hover:via-[#C0C0C0]/70 hover:to-[#C0C0C0]/30 hover:bg-gradient-to-bl"
		>
			<img src="sponsors/{sponsors[9].logo}" alt="{sponsors[9].name} Logo" class="w-20" />
		</a>
	</div>
	<!-- SILVER -->
	<div class="grid grid-cols-4 gap-2 w-full">
		<a
			href={sponsors[0].link}
			class="col-span-2 p-6 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#C0C0C0]/30 hover:via-[#C0C0C0]/70 hover:to-[#C0C0C0]/30 hover:bg-gradient-to-bl"
		>
			<img src="sponsors/{sponsors[0].logo}" alt="{sponsors[0].name} Logo" class="w-44" />
		</a>
		<a
			href={sponsors[8].link}
			class="col-span-2 p-6 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#C0C0C0]/30 hover:via-[#C0C0C0]/70 hover:to-[#C0C0C0]/30 hover:bg-gradient-to-bl"
		>
			<img src="sponsors/{sponsors[8].logo}" alt="{sponsors[8].name} Logo" class="w-44" />
		</a>
		<a
			href={sponsors[1].link}
			class="md:p-4 p-2 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
		>
			<img src="sponsors/{sponsors[1].logo}" alt="{sponsors[1].name} Logo" class="w-24" />
		</a>
		<a
			href={sponsors[6].link}
			class="md:p-4 p-2 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
		>
			<img src="sponsors/{sponsors[6].logo}" alt="{sponsors[6].name} Logo" class="w-24" />
		</a>
		<a
			href={sponsors[12].link}
			class="md:p-4 p-2 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
		>
			<img src="sponsors/{sponsors[12].logo}" alt="{sponsors[12].name} Logo" class="md:w-32 w-28" />
		</a>
		<a
			href={sponsors[13].link}
			class="md:p-4 p-2 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-around rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
		>
			<img src="sponsors/{sponsors[13].logo}" alt="{sponsors[13].name} Logo" class="md:w-12 w-24" />
			<img src="sponsors/{sponsors[15].logo}" alt="{sponsors[15].name} Logo" class="w-12 hidden md:block" />
			<img src="sponsors/{sponsors[14].logo}" alt="{sponsors[14].name} Logo" class="w-12 hidden md:block" />
		</a>
	</div>
	<!-- BRONZE -->
	<div class="grid grid-cols-4 gap-2 w-full">
		<a
			href={sponsors[2].link}
			class="md:p-4 p-2 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
		>
			<img src="sponsors/{sponsors[2].logo}" alt="{sponsors[2].name} Logo" class="w-24" />
		</a>
		<a
			href={sponsors[4].link}
			class="md:p-4 p-2 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
		>
			<img src="sponsors/{sponsors[4].logo}" alt="{sponsors[4].name} Logo" class="w-24" />
		</a>
		<a
			href={sponsors[5].link}
			class="md:p-4 p-2 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
		>
			<img src="sponsors/{sponsors[5].logo}" alt="{sponsors[5].name} Logo" class="" />
		</a>
		<a
			href={sponsors[7].link}
			class="md:p-4 p-2 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
		>
			<img src="sponsors/{sponsors[7].logo}" alt="{sponsors[7].name} Logo" class="" />
		</a>
		<a
			href={sponsors[16].link}
			class="md:p-4 p-2 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
		>
			<img src="sponsors/{sponsors[16].logo}" alt="{sponsors[16].name} Logo" class="w-12" />
		</a>
		<a
			href="https://grizzhacks.org"
			class="md:p-4 p-2 col-span-1 row-span-1 bg-neutral-950/80 ring-1 ring-neutral-800/30 flex items-center justify-center rounded-md hover:from-[#CD7F32]/40 hover:via-[#CD7F32]/80 hover:to-[#CD7F32]/40 hover:bg-gradient-to-bl"
		>
			<p class="font-bold">Coming Soon...</p>
		</a>
	</div>
</div>
