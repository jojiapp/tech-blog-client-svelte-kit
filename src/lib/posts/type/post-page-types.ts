import type PostMarkdown from '../component/markdown/post-markdown';

export type PostCreatePage = {
	postMarkdown: PostMarkdown;
	categories: string[];
};
