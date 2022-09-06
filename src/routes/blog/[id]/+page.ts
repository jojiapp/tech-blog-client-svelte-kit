import Post from '$lib/posts/dto/post';
import { error } from '@sveltejs/kit';
import type { PageLoad } from '../../../../.svelte-kit/types/src/routes/blog/[id]/$types';

export type PostPage = {
	post: Post;
};
export const load: PageLoad<PostPage> = async ({ params }) => {
	if (!params.id) {
		error(404, 'Not found');
	}

	// todo: 게시글 조회

	return {
		post: new Post(
			'1',
			'Chapter 10. 람다를 이용한 도메인 전용 언어',
			'## 부제목',
			'Java',
			new Date(),
			new Date()
		)
	};
};
