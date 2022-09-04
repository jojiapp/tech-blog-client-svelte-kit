<script lang="ts">
	import { postCategoryChoice, postMarkdown, post } from '$lib/posts/store/post-stores';
	import postAPI from '$lib/posts/api/post-api';
	import PostWriter from '../../../../lib/posts/component/writer/PostWriter.svelte';

	export let data;
	postCategoryChoice.set(data.postCategory);
	postMarkdown.set(data.postMarkdown);
	post.set($postMarkdown.toPostMarkdown());

	const handleSubmit = () => {
		postAPI.createPost($postMarkdown);
	};
</script>

<PostWriter {handleSubmit} />
