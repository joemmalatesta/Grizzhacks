<script>
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';
</script>

<div class="containerr">
	<Navbar />
</div>
<slot />
<div class="bg-indigo-700">
	<div class="containerr">
		<Footer />
	</div>
</div>
