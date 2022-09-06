import DateFormatter from '../../common/formatter/DateFormatter';

class Post {
	private readonly title: string;
	private readonly content: string;
	private readonly category: string;
	private readonly createdAt: Date;
	private readonly updatedAt: Date;

	constructor(title: string, content: string, category: string, createdAt: Date, updatedAt: Date) {
		this.title = title;
		this.content = content;
		this.category = category;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	public getTitle(): string {
		return this.title;
	}

	public getContent(): string {
		return this.content;
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