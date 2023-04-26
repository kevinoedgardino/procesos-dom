import { useState } from 'react'
import SearchBar from './SearchBar'
import FoundProcesses from './FoundProcesses'
import getProcesses from '../api/services/getProcesses'
import ProcessDetails from '../components/ProcessDetails'
import Loader from './Loader'
import { QUERY } from '../utils/globalData'
import { checkIfSaved } from '../utils/checkSavedMunicipality'

export default function Processes() {
    const [municipalitySelected, setMunicipalitySelected] = useState({})
    const [processes, setProcesses] = useState([])
    const [openInfoModal, setOpenInfoModal] = useState(false)
    const [modalData, setModalData] = useState({})
    const [loading, setLoading] = useState(false)
    const [total, setTotal] = useState({ totalElements: 0, totalPages: 0 })

    const getMunicSelected = async (munic) => {
        if (munic.id_mun && (municipalitySelected.id_mun !== munic.id_mun)) {
            setMunicipalitySelected(munic)
            setLoading(true)
            try {
                const { data, totalPages, totalElements } = await getProcesses(munic.id_dep, munic.id_mun, 1)
                setProcesses(data)
                setTotal({ totalElements, totalPages })
                setLoading(false)
            } catch (error) {
                setProcesses(QUERY.ERROR)
                setLoading(false)
            }
        }
    }

    const getMoreProcesses = async ({ page }) => {
        try {
            const { data } = await getProcesses(municipalitySelected.id_dep, municipalitySelected.id_mun, page)
            setProcesses([...processes, ...data])
        } catch (error) {

        }
    }

    const saveOrDeleteMunicipality = () => {
        const savedMunic = JSON.parse(window.localStorage.getItem('savedMunicipalities'))
        const isSaved = checkIfSaved(municipalitySelected, savedMunic ?? [])

        if (!isSaved) {
            const newSavedMunic = savedMunic ? [...savedMunic, municipalitySelected] : [municipalitySelected]
            window.localStorage.setItem('savedMunicipalities', JSON.stringify(newSavedMunic))
            return
        }

        const deleteMunic = savedMunic.filter(m => m.id_mun !== municipalitySelected.id_mun)
        window.localStorage.setItem('savedMunicipalities', JSON.stringify(deleteMunic))
    }

    const showModal = (show, data) => {
        const { classList } = document.getElementById('cont-main')
        setModalData(data)
        setOpenInfoModal(show)
        show ? classList.add('overflow-y-hidden') : classList.remove('overflow-y-hidden')
    }

    return (
        <div className={loading ? 'w-full' : ''}>
            <SearchBar municSelected={getMunicSelected} saveOrDeleteMunicipality={saveOrDeleteMunicipality} />
            <br />
            {loading
            ? <Loader />
            : <FoundProcesses
                processes={processes}
                openModal={showModal}
                moreProcesses={getMoreProcesses}
                total={total}
            />}
            {openInfoModal && <ProcessDetails process={modalData} show={showModal} />}
        </div>
    )
}
