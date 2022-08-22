<script lang="ts">
	import MarkdownEditor from '../../../../lib/markdown-editor/MarkdownEditor.svelte';
	import Category from '$lib/category/Category.svelte';
</script>

<div class="mb-4">
	<Category />
</div>
<MarkdownEditor markdown="# 제목" />
