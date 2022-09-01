import dayjs from 'dayjs';

class PostDateFormatter {
	private static KO_YYYY_MM_DD = 'YYYY년 MM월 DD일';

	public static getKPYYYYMMDD(date: Date) {
		return dayjs(date).format(PostDateFormatter.KO_YYYY_MM_DD);
	}
}
