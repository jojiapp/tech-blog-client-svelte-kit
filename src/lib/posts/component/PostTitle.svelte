<script lang="ts">
	import { postMarkdown } from '../store/post-create-stores';
</script>

<div class="flex flex-col items-center justify-center">
	<div class="text-neutral-400">{$postMarkdown.getUpdateAt()}</div>
	<h1
		class="md:leading-14 p-4 text-3xl font-extrabold leading-9 tracking-tight
	 sm:text-4xl sm:leading-10 md:text-5xl"
	>
		[{$postMarkdown.getCategory()}] {$postMarkdown.getTitle()}
	</h1>
</div>
