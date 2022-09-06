import DateFormatter from '../../common/formatter/DateFormatter';

class Post {
	private readonly id: string;
	private readonly title: string;
	private readonly contentMarkdown: string;
	private readonly category: string;
	private readonly createdAt: Date;
	private readonly updatedAt: Date;

	constructor(
		id: string,
		title: string,
		contentMarkdown: string,
		category: string,
		createdAt: Date,
		updatedAt: Date
	) {
		this.id = id;
		this.title = title;
		this.contentMarkdown = contentMarkdown;
		this.category = category;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	public getId(): string {
		return this.id;
	}

	public getTitle(): string {
		return this.title;
	}

	public getContentMarkdown(): string {
		return this.contentMarkdown;
	}

	public getCategory(): string {
		return this.category;
	}

	public getCreatedAt(): string {
		return DateFormatter.getKO_YYYY_MM_DD(this.createdAt);
	}

	public getUpdatedAt(): string {
		return DateFormatter.getKO_YYYY_MM_DD(this.createdAt);
	}

	public isSameDate(): boolean {
		return this.getCreatedAt() === this.getUpdatedAt();
	}
}

export default Post;
