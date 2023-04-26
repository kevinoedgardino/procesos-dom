import { API_URL_2 } from '../domain/domain'

/**
 *
 * @param {Number} idProc
 * @returns Array of plots if the process
 */
export default async function getProcessPlot(idProc) {
    const url = new URL(`${API_URL_2}/public/${idProc}/plot`)

	const res = await fetch(url)
	const data = await res.json()

	return data
}
