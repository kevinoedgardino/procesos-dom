import { useState } from 'react'
import SearchBar from './SearchBar'
import FoundProcesses from './FoundProcesses'

export default function Processes() {
    const [municipalitySelected, setMunicipalitySelected] = useState({})

    const getMunicSelected = (munic) => {
        setMunicipalitySelected(munic)
    }

    const checkIfSaved = (munic, arrayData) => {
		const saved = arrayData.find(({ id_mun: idMun }) => idMun === munic.id_mun)
		return !(saved === undefined)
	}

    const saveMunicipality = () => {
        const savedMunic = JSON.parse(window.localStorage.getItem('savedMunicipalities'))
        const isSaved = checkIfSaved(municipalitySelected, savedMunic ?? [])

        if (!isSaved) {
            const newSavedMunic = savedMunic ? [...savedMunic, municipalitySelected] : [municipalitySelected]
            window.localStorage.setItem('savedMunicipalities', JSON.stringify(newSavedMunic))
        }
    }

    return (
        <div>
            <SearchBar municSelected={getMunicSelected} saveMunicipality={saveMunicipality} />
            <br />
            <FoundProcesses />
        </div>
    )
}
