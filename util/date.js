export const getFormatedDate = (date) => {
    return date.toISOString().slice(0, 10);
};

export const getDateMinusDays = (date, days) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
};

// export function getFormatedDate(date) {
//     return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
// }

// export function getDateMinusDays(date, days) {
//     return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
// }