import Post from '../model/post';
import DateFormatter from '../../common/formatter/DateFormatter';

class PostMarkdown {
	private readonly id: string;
	private markdown: string;
	private category: string;
	private createdAt: Date;
	private updatedAt: Date;

	protected constructor(
		id: string,
		markdown: string,
		category: string,
		createdAt: Date,
		updatedAt: Date
	) {
		this.id = id;
		this.markdown = markdown;
		this.category = category;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	public static init(category: string) {
		return new PostMarkdown('', '', category, new Date(), new Date());
	}

	public static from(id: string, markdown: string, category: string, createdAt: Date) {
		return new PostMarkdown(id, markdown, category, createdAt, new Date());
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

	public getId(): string {
		return this.id;
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

	public setMarkdown(markdown: string): PostMarkdown {
		this.markdown = markdown;
		return this;
	}

	public getCategory(): string {
		return this.category;
	}

	public setCategory(category: string): PostMarkdown {
		this.category = category;
		return this;
	}

	public getCreatedAt(): string {
		return DateFormatter.getYYYY_MM_DD_HH_mm(this.createdAt);
	}

	public setCreatedAt(createdAt: string): PostMarkdown {
		this.createdAt = DateFormatter.toYYYY_MM_DD_HH_mm(createdAt);
		return this;
	}

	public getUpdatedAt(): string {
		return DateFormatter.getYYYY_MM_DD_HH_mm(this.updatedAt);
	}

	public setUpdatedAt(updatedAt: Date): PostMarkdown {
		this.updatedAt = updatedAt;
		return this;
	}
}

export default PostMarkdown;
