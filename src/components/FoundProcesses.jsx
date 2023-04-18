import ProcessCard from './ProcessCard'

export default function FoundProcesses() {
	return (
		<div className='grid grid-cols-3 gap-4 mb-3'>
			<ProcessCard />
			<ProcessCard />
			<ProcessCard />
			<ProcessCard />
			<ProcessCard />
		</div>
	)
}
