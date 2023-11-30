<script>
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';
</script>

<div class="md:mx-12 lg:mx-24 xl:mx-40 2xl:mx-56 mx-4">
	<Navbar />
	<slot />
	<Footer />
</div>
