import dayjs from 'dayjs';

class DateFormatter {
	private static KO_YYYY_MM_DD = 'YYYY년 MM월 DD일';
	private static YYYY_MM_DD_HH_mm = 'YYYY-MM-DD HH:mm';

	public static getKO_YYYY_MM_DD(date: Date): string {
		return this.getFormatDate(date, this.KO_YYYY_MM_DD);
	}

	public static getYYYY_MM_DD_HH_mm(date: Date): string {
		return this.getFormatDate(date, this.YYYY_MM_DD_HH_mm);
	}

	private static getFormatDate(date: Date, format: string): string {
		return dayjs(date).format(format);
	}

	public static toYYYY_MM_DD_HH_mm(date: string): Date {
		return dayjs(date, this.YYYY_MM_DD_HH_mm).toDate();
	}
}

export default DateFormatter;
