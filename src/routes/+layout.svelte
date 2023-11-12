<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
</script>

<div class="md:mx-12 lg:mx-40 xl:mx-56 mx-4 mt-6">
	<Navbar />
	<slot />
</div>
