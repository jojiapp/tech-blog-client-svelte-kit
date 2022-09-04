import Post from '../model/post';
import DateFormatter from '../../common/formatter/DateFormatter';

class PostCreateMarkdown {
	private markdown: string;
	private category: string;
	private createdAt: Date;

	private constructor(markdown: string, category: string, createdAt: Date) {
		this.markdown = markdown;
		this.category = category;
		this.createdAt = createdAt;
	}

	public static from(category: string) {
		return new PostCreateMarkdown('', category, new Date());
	}

	public toPostMarkdown(): Post {
		return new Post(
			this.getTitle(),
			this.getContent(),
			this.getCategory(),
			this.createdAt,
			new Date()
		);
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

	public getCreatedAt(): string {
		return DateFormatter.getYYYY_MM_DD_HH_mm(this.createdAt);
	}

	public setCreatedAt(createdAt: string): PostCreateMarkdown {
		this.createdAt = DateFormatter.toYYYY_MM_DD_HH_mm(createdAt);
		return this;
	}
}

export default PostCreateMarkdown;
