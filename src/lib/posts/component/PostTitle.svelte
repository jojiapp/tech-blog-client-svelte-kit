<script lang="ts">
	import { post } from '$lib/posts/store/post-stores.js';
</script>

<div class="mb-12 flex flex-col items-center justify-center border-b-2 border-gray-800 pb-12">
	<h1
		class="md:leading-14 p-4 text-3xl font-extrabold leading-9 tracking-tight
	 sm:text-4xl sm:leading-10 md:text-5xl"
	>
		[{$post.getCategory()}] {$post.getTitle()}
	</h1>
	<div class="flex text-gray-400">
		<div>{$post.getUpdatedAt()}</div>
	</div>
</div>
