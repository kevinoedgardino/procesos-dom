import { API_URL } from '../domain/domain'
const url = new URL(API_URL)

/**
 *
 * @param {Number} idDep
 * @param {Number} idMun
 * @param {Number} page
 * @returns Array of processes found
 */
export default async function getProcesses(idDep, idMun, page) {
	url.searchParams.set('id_departamento', idDep)
	url.searchParams.set('id_municipio', idMun)
	url.searchParams.set('flagMethod', false)
	url.searchParams.set('rol', false)
	url.searchParams.set('pagina', page)
	url.searchParams.set('elementos_por_pagina', 10)

	const res = await fetch(url)
	const totalPages = res.headers.get('total_paginas')
	const totalElements = res.headers.get('total_elements')
	const data = await res.json()

	return { data, totalPages, totalElements }
}
