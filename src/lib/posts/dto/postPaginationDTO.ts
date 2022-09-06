class PostPaginationDTO {
	private readonly currentPage: number;
	private readonly lastPage: number;
	private readonly routeId: string;

	constructor(currentPage: number, lastPage: number, routeId: string) {
		this.currentPage = currentPage;
		this.lastPage = lastPage;
		this.routeId = routeId;
	}

	public getCurrentPage(): number {
		return this.currentPage;
	}

	public getPreviousPage(): string {
		return this.getPage(this.currentPage - 1);
	}

	public getNextPage(): string {
		return this.getPage(this.currentPage + 1);
	}

	private getPage(page: number): string {
		return `/${this.getRouteId()}?page=${page}`;
	}

	public isFirstPage(): boolean {
		return this.getCurrentPage() === 1;
	}

	public isLastPage(): boolean {
		return this.getCurrentPage() >= this.lastPage;
	}

	public getLastPage(): number {
		return this.lastPage;
	}

	public getRouteId(): string {
		return this.routeId;
	}
}

export default PostPaginationDTO;
