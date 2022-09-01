<script lang="ts">
	import authors from '../data/authors.json';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faGithub } from '/node_modules/@fortawesome/free-brands-svg-icons';

	const year = new Date().getFullYear();
</script>

<div class="mt-16">
	<div class="mb-4 flex items-center justify-center gap-2 text-gray-400">
		<a href={authors.github} target="_blank" class="text-white">
			<Fa icon={faGithub} size="1.5rem" />
		</a>
		<div>•</div>
		<div>jojiapp@gmail.com</div>
	</div>
	<div class="flex items-center justify-center gap-2 text-sm text-gray-400">
		<div>{authors.name}</div>
		<div>•</div>
		<div>@ {year}</div>
		<div>•</div>
		<div>{authors.title}</div>
	</div>
</div>
