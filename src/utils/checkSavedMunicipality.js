/**
 * Check the localStorage item `savedMunicipalities` to find whether the municipality
 * given is stored or not.
 * @param {object} munic
 * @returns {boolean} true when the municipality was found, false when the municipality wasn't found
*/
export const checkIfSaved = (munic) => {
	const savedMunicipalities = JSON.parse(localStorage.getItem('savedMunicipalities')) ?? []
	const saved = savedMunicipalities.find(({ id_mun: idMun }) => idMun === munic.id_mun)
	return !(saved === undefined)
}
