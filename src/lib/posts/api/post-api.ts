import type PostCreateMarkdown from '../dto/post-create-markdown';

class PostAPI {
	createPost = async (postMarkdown: PostCreateMarkdown) => {
		console.log('저장');
		// todo: 게시글 등록
		return 1;
	};
}

const postAPI = new PostAPI();

export default postAPI;
