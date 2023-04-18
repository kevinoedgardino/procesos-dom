import { useState } from 'react'
import SearchBar from './SearchBar'
import FoundProcesses from './FoundProcesses'

export default function Processes() {
    const [municipalitySelected, setMunicipalitySelected] = useState('')

    const getMunicSelected = (munic) => {
        setMunicipalitySelected(munic)
    }

    return (
        <div>
            <p>{municipalitySelected}</p>
            <SearchBar muniSelected={getMunicSelected} />
            <br />
            <FoundProcesses />
        </div>
    )
}
