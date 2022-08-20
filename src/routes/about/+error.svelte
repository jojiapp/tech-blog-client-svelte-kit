<script lang="ts">
	/** @type {import('./$types').LayoutData} */
	import { page } from '$app/stores';
</script>

<h1>{$page.status}: {$page.error.message}</h1>
