<script lang="ts">
	import { marked } from 'marked';
	import prism from 'prismjs';
	import 'prismjs/themes/prism-dark.css';
	import '$lib/global/css/prism';
	import '$lib/global/css/prism.css';

	export let markdown;

	function getLanguageHighlight(code: string, lang: string) {
		return prism.highlight(code, prism.languages[lang], lang);
	}

	function getDefaultLanguageHighlight(code: string) {
		return prism.highlight(code, prism.languages.log, 'log');
	}

	marked.setOptions({
		langPrefix: 'language-',
		highlight: function (code, lang) {
			try {
				return getLanguageHighlight(code, lang);
			} catch {
				return getDefaultLanguageHighlight(code);
			}
		},
		gfm: true
	});

	let html = marked.parse(markdown);
</script>

{@html html}
