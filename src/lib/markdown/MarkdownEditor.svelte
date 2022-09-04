<script lang="ts">
	import { onMount } from 'svelte';
	import { postMarkdown } from '../posts/store/post-stores';

	import '@toast-ui/editor/dist/toastui-editor.css';
	import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

	import 'prismjs/themes/prism.css';
	import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
	import postAPI from '../posts/api/post-api';

	let markdownEditorEl;
	let markdownEditor;

	const handleImageUpload = async (blob, callback) => {
		const fileUrl = await postAPI.saveImage(blob);
		callback(fileUrl);
	};

	onMount(async () => {
		const Editor = (await import('@toast-ui/editor')).default;
		const codeSyntaxHighlight = (
			await import(
				'@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js'
			)
		).default;

		markdownEditor = new Editor({
			el: markdownEditorEl,
			initialValue: $postMarkdown.getMarkdown(),
			height: '80vh',
			initialEditType: 'markdown',
			previewStyle: 'tab',
			theme: 'dark',
			plugins: [codeSyntaxHighlight],
			events: {
				change: (editorType) => $postMarkdown.setMarkdown(markdownEditor.getMarkdown())
			},
			hooks: {
				addImageBlobHook: handleImageUpload
			}
		});
	});
</script>

<div bind:this={markdownEditorEl} />
