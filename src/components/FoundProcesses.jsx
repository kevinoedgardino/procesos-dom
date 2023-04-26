import { useEffect, useState } from 'react'
import { QUERY } from '../utils/globalData'
import ProcessCard from './ProcessCard'
import Loader from './Loader'

export default function FoundProcesses({ processes = [], openModal, moreProcesses, total }) {
	const [currentPage, setCurrentPage] = useState(1)
	const [loading, setLoading] = useState(false)

	const getMoreProcesses = () => {
		setCurrentPage(currentPage + 1)
		moreProcesses({ page: currentPage + 1 })
		setLoading(true)
	}

	useEffect(() => {
		setLoading(false)
	}, [processes])

	return (
		<div>
			{processes === QUERY.ERROR
			? (
				<div className='flex justify-center'>
					<p className='text-center'>Algo salió mal :(</p>
				</div>
			)
			: (
				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-3'>
					{processes.map((data) => {
						return <ProcessCard key={data.id} process={data} event={openModal} />
					})}
				</div>
			)}
			{
			total.totalPages > 0 && currentPage < total.totalPages
				? <div className='flex justify-center'>
					{!loading
					? <button type='button' onClick={() => getMoreProcesses()} className='text-blue-500 text-sm'><i className="fa-solid fa-chevron-down"></i> Mostrar más (Total: {total.totalElements})</button>
					: <Loader />}
				</div>
				: null}
		</div>
	)
}
