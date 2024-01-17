<script>
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';
</script>

<div class="container">
	<Navbar />
</div>
<slot />
<div class="bg-indigo-700">
	<div class="container">
		<Footer />
	</div>
</div>
