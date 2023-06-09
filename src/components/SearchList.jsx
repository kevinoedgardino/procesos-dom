import { LIST_TYPE } from '../utils/globalData'

const removeAccents = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

export default function SearchList(
    {
        listType,
        inputFocus = false,
        municipality = '',
        municipalities = [],
        savedMunicipality = [],
        selectMunicipality
    }) {
	return (
		<div className='w-[21rem] md:w-96 max-h-[192px] overflow-y-scroll block mt-1'>
		{ listType === LIST_TYPE.SEARCH_RESULT
            ? inputFocus && (
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
			)
            : listType === LIST_TYPE.SAVED_MUNICIPALITIES
            ? inputFocus && (
				<ul className='text-left bg-slate-800'>
                    <p className='text-center p-1 bg-slate-900 font-semibold'>Municipios Guardados</p>
					{savedMunicipality.map((m) => {
                        return (
                            <li
                                key={m.id_mun}
                                onClick={() => selectMunicipality({ mun: m })}
                                className='h-15 p-3 hover:bg-slate-900 cursor-pointer'
                            >
                                {m.name}
                            </li>
                        )
					})}
				</ul>
			)
            : null
        }
		</div>
	)
}
