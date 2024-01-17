<script lang="ts">
    export let name: string;
    export let logo: string;
    export let tier: string;
    export let link: string;

    let size: string
    if (tier == 'bronze'){
        size = "2xl:w-42 lg:w-36 w-20"
    }
    else if (tier == 'silver'){
        size = "2xl:w-52 lg:w-40 w-24"
    }
    else if (tier =='gold'){
        size = "2xl:w-56 lg:w-44 w-28"
    }else if (tier == 'platinum'){
        size = "2xl:w-60 lg:w-48 w-32"
    }
</script>


<a href="{link}" class="">
    <img src="sponsors/{logo}" alt="{name} logo" class="{size}">
</a>

<!-- At some point, make a diff component piece for each one -->