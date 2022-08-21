<script lang="ts">
	const navList = ['Blog', 'Tags', 'Projects', 'About'];
</script>

<nav>
	<ul class="flex h-full items-center font-medium">
		{#each navList as nav}
			<a href="/{nav.toLowerCase()}" class="p-6">{nav}</a>
		{/each}
	</ul>
</nav>
