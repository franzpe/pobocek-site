export function blogDateFormatter(date: string): string {
	const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	const d: Date = new Date(date);
	return d.toLocaleDateString('en-US', options);
}
