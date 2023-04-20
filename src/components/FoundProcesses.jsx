import ProcessCard from './ProcessCard'

export default function FoundProcesses({ processes = [] }) {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-3'>
			{processes.map(({ id, estado, id_estado: idEstado, code, name, municipio, fecha_publicacion: fechaPub }) => {
				return (
					<ProcessCard
						key={id}
						status={estado}
						statusId={idEstado}
						code={code}
						name={name}
						munic={municipio}
						date={fechaPub}
					/>
				)
			})}
		</div>
	)
}
