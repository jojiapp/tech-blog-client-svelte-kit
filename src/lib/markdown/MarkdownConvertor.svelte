<script lang="ts">
	import { marked } from 'marked';
	import prism from 'prismjs';

	export let markdown;

	// const renderer = {
	// link(href: string, title: string, text: string) {
	// 	return '';
	// }
	// };

	// marked.use({ renderer });

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

	function getLanguageHighlight(code: string, lang: string) {
		return prism.highlight(code, prism.languages[lang], lang);
	}

	function getDefaultLanguageHighlight(code: string) {
		return prism.highlight(code, prism.languages.log, 'log');
	}

	let html = marked.parse(markdown);
</script>

{@html html}
