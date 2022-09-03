<script>
	import '../app.css';
	import Header from '$lib/global/header/Header.svelte';
	import Footer from '$lib/global/footer/Footer.svelte';
</script>

<div class="mx-auto max-w-5xl ">
	<Header />
	<slot />
	<Footer />
</div>
