import PostDTO from './postDTO';
import DateFormatter from '../../common/formatter/DateFormatter';

class PostMarkdownDTO {
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
		return new PostMarkdownDTO('', '', category, new Date(), new Date());
	}

	public static from(id: string, markdown: string, category: string, createdAt: Date) {
		return new PostMarkdownDTO(id, markdown, category, createdAt, new Date());
	}

	public toPostMarkdown(): PostDTO {
		return new PostDTO(
			this.getId(),
			this.getTitle(),
			this.getContentMarkdown(),
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

	public getContentMarkdown(): string {
		return this.markdown.replace(`# ${this.getTitle()}`, '');
	}

	public getMarkdown(): string {
		return this.markdown;
	}

	public setMarkdown(markdown: string): PostMarkdownDTO {
		this.markdown = markdown;
		return this;
	}

	public getCategory(): string {
		return this.category;
	}

	public setCategory(category: string): PostMarkdownDTO {
		this.category = category;
		return this;
	}

	public getCreatedAt(): string {
		return DateFormatter.getYYYY_MM_DD_HH_mm(this.createdAt);
	}

	public setCreatedAt(createdAt: string): PostMarkdownDTO {
		this.createdAt = DateFormatter.toYYYY_MM_DD_HH_mm(createdAt);
		return this;
	}

	public getUpdatedAt(): string {
		return DateFormatter.getYYYY_MM_DD_HH_mm(this.updatedAt);
	}

	public setUpdatedAt(updatedAt: Date): PostMarkdownDTO {
		this.updatedAt = updatedAt;
		return this;
	}
}

export default PostMarkdownDTO;
