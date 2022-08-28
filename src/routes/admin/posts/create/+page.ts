import type { PageLoad } from '../../../../../.svelte-kit/types/src/routes/admin/posts/create/$types';
import type { PostCreatePage } from '$lib/posts/type/post-page-types';
import PostMarkdown from '../../../../lib/posts/component/markdown/post-markdown';

export const load: PageLoad<PostCreatePage> = () => {
	return {
		postMarkdown: new PostMarkdown('', '', new Date(), new Date()),
		categories: ['Java', 'Spring', 'Junit']
	};
};
