import { useState } from 'react'
import SearchBar from './SearchBar'
import FoundProcesses from './FoundProcesses'
import getProcesses from '../api/services/getProcesses'
import ProcessDetails from '../components/ProcessDetails'
import Loader from './Loader'
import { QUERY } from '../utils/globalData'

export default function Processes() {
    const [municipalitySelected, setMunicipalitySelected] = useState({})
    const [processes, setProcesses] = useState([])
    const [openInfoModal, setOpenInfoModal] = useState(false)
    const [modalData, setModalData] = useState({})
    const [loading, setLoading] = useState(false)

    const getMunicSelected = async (munic) => {
        setMunicipalitySelected(munic)
        setLoading(true)
        try {
            const data = await getProcesses(munic.id_dep, munic.id_mun, 1)
            setProcesses(data)
            setLoading(false)
        } catch (error) {
            setProcesses(QUERY.ERROR)
            setLoading(false)
        }
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
        <div className={loading ? 'w-full' : ''}>
            <SearchBar municSelected={getMunicSelected} saveMunicipality={saveMunicipality} />
            <br />
            {loading ? <Loader /> : <FoundProcesses processes={processes} openModal={showModal} />}
            {openInfoModal && <ProcessDetails process={modalData} show={showModal} />}
        </div>
    )
}
