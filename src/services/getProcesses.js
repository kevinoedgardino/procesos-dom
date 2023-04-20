const API_URL = new URL('https://api.obrasmunicipales.gob.sv/api/v1/procesos')

export default async function getProcesses(idDep, idMun, page) {
	API_URL.searchParams.set('id_departamento', idDep)
	API_URL.searchParams.set('id_municipio', idMun)
	API_URL.searchParams.set('flagMethod', false)
	API_URL.searchParams.set('rol', false)
	API_URL.searchParams.set('pagina', page)
	API_URL.searchParams.set('elementos_por_pagina', 10)

	const res = await fetch(API_URL)
	// const totalElements = res.headers.get('total_elementos')
	const data = await res.json()
	return data
}
