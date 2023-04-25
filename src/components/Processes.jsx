import { useState } from 'react'
import SearchBar from './SearchBar'
import FoundProcesses from './FoundProcesses'
import getProcesses from '../api/services/getProcesses'
import ProcessDetails from '../components/ProcessDetails'

export default function Processes() {
    const [municipalitySelected, setMunicipalitySelected] = useState({})
    const [processes, setProcesses] = useState([])
    const [openInfoModal, setOpenInfoModal] = useState(false)
    const [modalData, setModalData] = useState({})

    const getMunicSelected = async (munic) => {
        setMunicipalitySelected(munic)
        const data = await getProcesses(munic.id_dep, munic.id_mun, 1)
        setProcesses(data)
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

    const showModal = (show, data) => {
        const { classList } = document.getElementById('cont-main')
        setModalData(data)
        setOpenInfoModal(show)
        show ? classList.add('overflow-y-hidden') : classList.remove('overflow-y-hidden')
    }

    return (
        <div>
            <SearchBar municSelected={getMunicSelected} saveMunicipality={saveMunicipality} />
            <br />
            <FoundProcesses processes={processes} openModal={showModal} />
            {openInfoModal && <ProcessDetails process={modalData} show={showModal} />}
        </div>
    )
}
