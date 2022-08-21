<script lang="ts">
	import { onMount } from 'svelte';
	import '@toast-ui/editor/dist/toastui-editor.css';
	import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

	import 'prismjs/themes/prism.css';
	import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';

	export let markdown: string;
	let markdownEditorEl;
	let markdownEditor;

	onMount(async () => {
		const Editor = (await import('@toast-ui/editor')).default;
		const codeSyntaxHighlight = (
			await import(
				'@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js'
			)
		).default;

		markdownEditor = new Editor({
			el: markdownEditorEl,
			initialValue: markdown,
			height: '80vh',
			initialEditType: 'markdown',
			previewStyle: 'tab',
			theme: 'dark',
			plugins: [codeSyntaxHighlight]
		});
	});
</script>

<div bind:this={markdownEditorEl} />
