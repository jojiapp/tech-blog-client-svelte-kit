import DateFormatter from '../../common/formatter/DateFormatter';

class PostItemDTO {
	private readonly id: string;
	private readonly title: string;
	private readonly summary: string;
	private readonly category: string;
	private readonly thumbnailUrl: string;
	private readonly createdAt: Date;

	constructor(
		id: string,
		title: string,
		summary: string,
		category: string,
		thumbnailUrl: string,
		createdAt: Date
	) {
		this.id = id;
		this.title = title;
		this.summary = summary;
		this.category = category;
		this.thumbnailUrl = thumbnailUrl;
		this.createdAt = createdAt;
	}

	public getId(): string {
		return this.id;
	}

	public getTitle(): string {
		return this.title;
	}

	public getSummary(): string {
		return this.summary;
	}

	public getCategory(): string {
		return '#' + this.category;
	}

	public getThumbnailUrl(): string {
		return this.thumbnailUrl;
	}

	public getCreatedAt(): string {
		return DateFormatter.getKO_YYYY_MM_DD(this.createdAt);
	}

	public getPostUrl(): string {
		return `/blog/${this.getId()}`;
	}
}

export default PostItemDTO;
