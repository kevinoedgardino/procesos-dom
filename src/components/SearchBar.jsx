import { useState } from 'react'
import municipalities from '../data/municipalities.json'

const removeAccents = (str) => {
	return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

export default function SearchBar() {
	const [municipio, setMunicipio] = useState('')
	const [municipioSelected, setMunicipioSelected] = useState('')

	return (
		<>
			<p>Municipio selected: {municipioSelected}</p>
			<form onSubmit={(e) => e.preventDefault()}>
				<div className='grid justify-center'>
					<div className='w-96 flex items-center'>
						<input
							className='w-full p-4 bg-blue-950 text-white outline-none drop-shadow-black transition ease-in-out duration-500 focus:bg-gray-800'
							type='text'
							placeholder='Escribe el nombre de tu municipio'
							onInput={(e) => setMunicipio(e.target.value)}
							name='municipio'
							list='options'
							title='Escribe el nombre de tu municipio'
						/>
						<span className='relative right-9'>
							<i className='fa-sharp fa-solid fa-magnifying-glass'></i>
						</span>
					</div>
                    <div className='w-96 max-h-[192px] overflow-hidden block mt-1'>
                        {
                            municipio.length > 0 && (
                                <ul className='text-left bg-slate-800'>
                                {
                                    municipalities.map(m => {
										const mun = removeAccents(m.name).toLowerCase()
										const munInput = removeAccents(municipio).toLowerCase()
                                        if (mun.includes(munInput)) {
                                            return (
												<li key={m.id_mun} onClick={() => setMunicipioSelected(m.name)} className='h-15 p-3 hover:bg-slate-900 cursor-pointer'>{ m.name }</li>
											)
                                        }
                                        return null
                                    })
                                }
                                </ul>
                            )
                        }
                    </div>
				</div>
			</form>
		</>
	)
}
