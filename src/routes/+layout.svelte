<script>
	import '../app.css';
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
</script>

<div class="mx-auto max-w-5xl ">
	<Header />
	<slot />
	<Footer />
</div>
