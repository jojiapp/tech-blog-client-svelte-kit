import dayjs from 'dayjs';

class DateFormatter {
	private static KO_YYYY_MM_DD = 'YYYY년 MM월 DD일';
	private static YYYY_MM_DD = 'YYYY-MM-DD';

	public static getKO_YYYY_MM_DD(date: Date) {
		return this.getFormatDate(date, this.KO_YYYY_MM_DD);
	}

	public static getYYYY_MM_DD(date: Date) {
		return this.getFormatDate(date, this.YYYY_MM_DD);
	}

	private static getFormatDate(date: Date, format: string): string {
		return dayjs(date).format(format);
	}
}

export default DateFormatter;
