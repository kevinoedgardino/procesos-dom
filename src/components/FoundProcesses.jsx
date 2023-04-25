import ProcessCard from './ProcessCard'

export default function FoundProcesses({ processes = [], openModal }) {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-3'>
			{processes.map((data) => {
				return (
					<ProcessCard
						key={data.id}
						process={data}
						event={openModal}
					/>
				)
			})}
		</div>
	)
}
