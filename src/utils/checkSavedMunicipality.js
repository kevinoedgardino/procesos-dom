/**
 *
 * @param {Array} munic
 * @returns true when the municipality was found, false when the municipality wasn't found
*/
export const checkIfSaved = (munic) => {
	const savedMunicipalities = JSON.parse(localStorage.getItem('savedMunicipalities')) ?? []
	const saved = savedMunicipalities.find(({ id_mun: idMun }) => idMun === munic.id_mun)
	return !(saved === undefined)
}
