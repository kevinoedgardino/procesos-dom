import { useState } from 'react'
import municipalities from '../data/municipalities.json'

const removeAccents = (str) => {
	return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

export default function SearchBar({ muniSelected }) {
	const [municipality, setMunicipality] = useState('')
	const [inputFocus, setInputFocus] = useState(false)

	const selectMunicipality = ({ mun }) => {
		muniSelected(mun.name)
		setInputFocus(false)
	}

	return (
		<form className='flex justify-center w-full h-16 relative' onSubmit={(e) => e.preventDefault()}>
			<div className='grid justify-center w-fit m-auto absolute'>
				<div className='w-96 flex items-center'>
					<input
						className='w-full p-4 bg-blue-950 text-white border-2 border-gray-500 outline-none drop-shadow-black transition ease-in-out duration-500 focus:bg-gray-800'
						type='text'
						placeholder='Escribe el nombre de tu municipio'
						onInput={(e) => setMunicipality(e.target.value)}
						onFocus={() => setInputFocus(true)}
						onBlur={() => setTimeout(() => setInputFocus(false), 500)}
						name='municipio'
						list='options'
						title='Escribe el nombre de tu municipio'
					/>
					<span className='relative right-9'>
						<i className='fa-sharp fa-solid fa-magnifying-glass'></i>
					</span>
				</div>
				<div className='w-96 max-h-[192px] overflow-hidden block mt-1'>
					{inputFocus && municipality.length > 0 && (
						<ul className='text-left bg-slate-800'>
							{municipalities.map((m) => {
								const mun = removeAccents(m.name).toLowerCase()
								const munInput = removeAccents(municipality).toLowerCase()
								if (mun.includes(munInput)) {
									return (
										<li
											key={m.id_mun}
											onClick={() => selectMunicipality({ mun: m })}
											className='h-15 p-3 hover:bg-slate-900 cursor-pointer'
										>
											{m.name}
										</li>
									)
								}
								return null
							})}
						</ul>
					)}
				</div>
			</div>
		</form>
	)
}
