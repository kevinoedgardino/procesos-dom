import { plotStatusColor } from '../utils/statusColors'

export default function PlotTable({ data = [] }) {
	return (
		<table className='cont-item border-collapse w-[80rem] lg:w-fit border border-slate-500 bg-slate-800 text-sm shadow-sm'>
			<thead className='bg-slate-700'>
				<tr>
					<th className='w-1/2 border border-slate-600 font-semibold p-3 text-slate-200 text-left'>
						Lotes del Proceso
					</th>
					<th className='border border-slate-600 font-semibold p-3 text-slate-200 text-left'>
						Empresa Ganadora
					</th>
					<th className='border border-slate-600 font-semibold p-3 text-slate-200 text-left'>
						Monto
					</th>
					<th className='border border-slate-600 font-semibold p-3 text-slate-200 text-left'>
						Plazo
					</th>
					<th className='border border-slate-600 font-semibold p-3 text-slate-200 text-left'>
						Estado
					</th>
				</tr>
			</thead>
			<tbody>
				{data.map(({ id, description, nameProvider, amount, period, idStatusPlot, statusPlot }) => (
					<tr key={id}>
						<td className='border border-slate-700 p-3 text-slate-400'>
							{description}
						</td>
						<td className='border border-slate-700 p-3 text-slate-400'>
							{nameProvider}
						</td>
						<td className='border border-slate-700 p-3 text-slate-400'>{amount ? `$${amount}` : ''}</td>
						<td className='border border-slate-700 p-3 text-slate-400'>{period ? `${period} días` : ''}</td>
						<td className={plotStatusColor[idStatusPlot] + ' p-3 border border-slate-700'}>{statusPlot}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
