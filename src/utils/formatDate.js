/**
 * Returns a date string with `dd/mm/yyyy` format.
 *
 * @param {string} date - Date string `'yyyy-mm-dd'`
 * @returns {string} Formatted date string
 *
 * @example '02-01-2023' -> '02/01/2023'
 */
export default function formatDate(date) {
    return date.split('-').join('/')
}
