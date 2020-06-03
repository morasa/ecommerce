
export const DateFormat = () => {
    const date = new Date();
    const timestamp = date.getTime().toString();
    const dd = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const formatedDate = `${dd} ${month} ${year}`;
    return { timestamp, formatedDate }
}