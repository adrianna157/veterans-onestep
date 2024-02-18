export function formatDateTime(dateTimeStr: string) {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    const date = new Date(dateTimeStr);
    return date.toLocaleString(undefined, options);
}