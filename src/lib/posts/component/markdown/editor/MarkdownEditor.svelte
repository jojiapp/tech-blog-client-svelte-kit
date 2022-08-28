<script lang="ts">
	import { onMount } from 'svelte';
	import { postMarkdown } from '$lib/posts/store/post-create-stores';

	import '@toast-ui/editor/dist/toastui-editor.css';
	import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

	import 'prismjs/themes/prism.css';
	import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';

	let markdownEditorEl;
	let markdownEditor;

	const handleImageUpload = (blob, callback) => {
		console.log(blob);
		callback('https://jojiapp.github.io/static/images/logo.png', 'logo.png');
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
			initialValue: $postMarkdown.getContent(),
			height: '80vh',
			initialEditType: 'markdown',
			previewStyle: 'tab',
			theme: 'dark',
			plugins: [codeSyntaxHighlight],
			events: {
				change: (editorType) => $postMarkdown.setContent(markdownEditor.getMarkdown())
			},
			hooks: {
				addImageBlobHook: handleImageUpload
			}
		});
	});
</script>

<div bind:this={markdownEditorEl} />
