<script lang="ts">
	import { onMount } from 'svelte';
	import { postMarkdown } from '$lib/posts/store/post-create-stores';

	import '@toast-ui/editor/dist/toastui-editor.css';
	import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

	import 'prismjs/themes/prism.css';
	import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';

	let markdownEditorEl;
	let markdownEditor;
	let markdown;

	// todo: 저장 버튼 클릭 시, 마크다운 내용을 스토어에 넣어야하는데, 저장 누른걸 어떻게 감지하지

	onMount(async () => {
		const Editor = (await import('@toast-ui/editor')).default;
		const codeSyntaxHighlight = (
			await import(
				'@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js'
			)
		).default;

		markdownEditor = new Editor({
			el: markdownEditorEl,
			initialValue: $postMarkdown.getContent(),
			height: '80vh',
			initialEditType: 'markdown',
			previewStyle: 'tab',
			theme: 'dark',
			plugins: [codeSyntaxHighlight],
			events: {
				change: (editorType) => $postMarkdown.setContent(markdownEditor.getMarkdown())
			}
		});
	});
</script>

<div bind:this={markdownEditorEl} />
