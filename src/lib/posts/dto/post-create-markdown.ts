import Post from '../model/post';

class PostCreateMarkdown {
	private markdown: string;
	private category: string;

	constructor(markdown: string, category: string) {
		this.markdown = markdown;
		this.category = category;
	}

	public static init(category: string) {
		return new PostCreateMarkdown('', category);
	}

	public getTitle(): string {
		const title = this.markdown
			.match(/^#\s.*\n/gi)
			?.join('')
			.replace('# ', '');
		return title ? title : '';
	}

	public getContent(): string {
		return this.markdown.replace(`# ${this.getTitle()}`, '');
	}

	public getMarkdown(): string {
		return this.markdown;
	}

	public setMarkdown(markdown: string): PostCreateMarkdown {
		this.markdown = markdown;
		return this;
	}

	public getCategory(): string {
		return this.category;
	}

	public setCategory(category: string): PostCreateMarkdown {
		this.category = category;
		return this;
	}

	public toPostMarkdown(): Post {
		return new Post(this.getTitle(), this.getContent(), this.getCategory(), new Date(), new Date());
	}
}

export default PostCreateMarkdown;
