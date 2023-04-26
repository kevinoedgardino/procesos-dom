import { useState } from 'react'
import municipalities from '../data/municipalities.json'
import SearchList from './SearchList'
import { LIST_TYPE } from '../utils/globalData'
import { checkIfSaved } from '../utils/checkSavedMunicipality'

export default function SearchBar({ municSelected, saveOrDeleteMunicipality }) {
	const [municipality, setMunicipality] = useState('')
	const [inputFocus, setInputFocus] = useState(false)
	const [isSaved, setIsSaved] = useState(false)

	const savedMunicipalities = JSON.parse(localStorage.getItem('savedMunicipalities')) ?? []

	const inputMunicipality = (data) => {
		setMunicipality(data)
		setIsSaved(false)
		municSelected({})
	}

	const selectMunicipality = ({ mun }) => {
		municSelected(mun)
		setMunicipality(mun.name)
		setInputFocus(false)
		const savedCheck = checkIfSaved(mun)
		setIsSaved(savedCheck)
	}

	return (
		<form className='flex justify-center w-full h-16 relative' onSubmit={(e) => e.preventDefault()}>
			<div className='grid justify-center w-fit m-auto absolute'>
				<div className='flex justify-center'>
					<div className='w-70 md:w-96 flex items-center'>
						<input
							className='w-full p-4 pr-10 bg-blue-950 text-white border-2 border-gray-500 outline-none drop-shadow-black transition ease-in-out duration-500 focus:bg-gray-800'
							type='text'
							placeholder='Escribe el nombre de tu municipio'
							value={municipality}
							onChange={(e) => inputMunicipality(e.target.value)}
							onFocus={() => setInputFocus(true)}
							onBlur={() => setTimeout(() => setInputFocus(false), 400)}
							name='municipio'
							list='options'
							title='Escribe el nombre de tu municipio'
							autoComplete='off'
						/>
						<span className='relative right-9'>
							<i className='fa-sharp fa-solid fa-magnifying-glass'></i>
						</span>
					</div>
					<button
						title='Guardar municipio'
						className='w-[4rem] bg-blue-950 flex justify-center items-center text-lg border-2 border-gray-500 drop-shadow-black hover:bg-gray-800 transition ease-in-out duration-600'
						onClick={() => {
							saveOrDeleteMunicipality()
							setIsSaved(!isSaved)
						}}
					>
						{isSaved
						? (
							<i className='fa-solid fa-bookmark'></i>
						)
						: (
							<i className='fa-regular fa-bookmark'></i>
						)}
					</button>
				</div>
				{municipality.length > 0
				? (
					<SearchList
						listType={LIST_TYPE.SEARCH_RESULT}
						inputFocus={inputFocus}
						municipality={municipality}
						municipalities={municipalities}
						selectMunicipality={selectMunicipality}
					/>
				)
				: (
					<SearchList
						listType={LIST_TYPE.SAVED_MUNICIPALITIES}
						inputFocus={inputFocus}
						municipality={municipality}
						savedMunicipality={savedMunicipalities}
						selectMunicipality={selectMunicipality}
					/>
				)}
			</div>
		</form>
	)
}
