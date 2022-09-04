<script lang="ts">
	import PostItem from '../../model/post-item';

	export let postItems: PostItem[];
</script>

<section>
	{#each postItems as post}
		<div class="flex border-t-2 border-gray-800 py-12">
			<div class="mr-24 flex w-48 items-center">
				<img src={post.getThumbnailUrl()} alt="thumbnail" class="rounded" />
			</div>
			<div class="flex flex-8 flex-col justify-between">
				<h3 class="text-2xl font-bold">{post.getTitle()}</h3>
				<div class="text-gray-400">{post.getSummary()}</div>
				<div class="text-primary-500">#{post.getCategory()}</div>
				<div class="text-gray-400">{post.getCreatedAt()}</div>
			</div>
		</div>
	{/each}
</section>
