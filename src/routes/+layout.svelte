<script>
	import '../app.css';
	import Header from '$lib/common/header/Header.svelte';
	import Footer from '$lib/common/footer/Footer.svelte';
</script>

<div class="mx-auto max-w-5xl ">
	<Header />
	<slot />
	<Footer />
</div>
