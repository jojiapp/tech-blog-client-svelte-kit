import dayjs from 'dayjs';

class DateFormatter {
	private static KO_YYYY_MM_DD = 'YYYY년 MM월 DD일';

	public static getKOYYYYMMDD(date: Date) {
		return dayjs(date).format(DateFormatter.KO_YYYY_MM_DD);
	}
}

export default DateFormatter;
