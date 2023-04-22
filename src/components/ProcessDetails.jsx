import { statusTextColor } from './statusColors'

export default function ProcessDetails({ show = false }) {
	return (
		<dialog
			open={show}
			className='bg-black/50 text-white  absolute top-0 left-0 w-full h-full z-50 flex flex-col justify-center items-center'
		>
			<article className='bg-darkBlue w-[99.99%] h-fit md:max-w-10/12 md:w-10/12 p-2 opacity-100 border-[#30363d] border-2 rounded-sm text-left overflow-y-scroll'>
				<h3 className='text-slate-600 p-2'>Código: DOM-BM-SCC-10/2022</h3>
				<h1 className='p-2 font-bold max-w-[40rem] text-[1.3rem]'>
					SERVICIOS DE CONSULTORIA PARA LA ACTUALIZACION DE INFORMACION Y CIERRES CONTABLES DE LOS
					MUNICIPIO DEL DEPARTAMENTO DE SAN SALVADOR
				</h1>
				<hr className='ms-2 w-40 md:w-80 border-slate-400' />
				<h3 className='p-2'>
					Estado:
					<span className={statusTextColor[7]}> En preparación de ofertas</span>
				</h3>
				<h3 className='p-2'>
					Tipo de proceso: <span className='text-slate-300'>Consultoría</span>
				</h3>
				<h3 className='p-2'>
					Enfoque: <span className='text-slate-300'>Construcción</span>
				</h3>
				<div className='p-2 block max-w-[40rem]'>
					<h2>Departamento:</h2>
					<p className='text-slate-300'>San Salvador</p>
				</div>
				<div className='p-2 block max-w-[40rem]'>
					<h2>Municipio:</h2>
					<p className='text-slate-300'>
						Ayutuxtepeque , Cuscatancingo , Apopa , Guazapa , San Marcos , San Mart\u00edn , Santo
						Tom\u00e1s , El Paisnal , Soyapango , Tonacatepeque , Delgado
					</p>
				</div>
				<hr className='ms-2 w-40 md:w-80 border-slate-400 my-3 mb-5' />
				<div className='w-full overflow-x-scroll'>
					<table className='border-collapse w-[80rem] border border-slate-500 bg-slate-800 text-sm shadow-sm'>
						<thead className='bg-slate-700'>
							<tr>
								<th className='w-1/2 border border-slate-600 font-semibold p-3 text-slate-200 text-left'>Lotes del Proceso</th>
								<th className='border border-slate-600 font-semibold p-3 text-slate-200 text-left'>Empresa Ganadora</th>
								<th className='border border-slate-600 font-semibold p-3 text-slate-200 text-left'>Monto</th>
								<th className='border border-slate-600 font-semibold p-3 text-slate-200 text-left'>Plazo</th>
								<th className='border border-slate-600 font-semibold p-3 text-slate-200 text-left'>Estado</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className='border border-slate-700 p-3 text-slate-400'>OBRAS DE URBANIZACIÓN EN LA COMUNIDAD LOS COCODRILOS, SAN JUAN BOSCO Y GUADALCANAL, MUNICIPIO DE SAN SALVADOR, DEPARTAMENTO DE SAN SALVADOR</td>
								<td className='border border-slate-700 p-3 text-slate-400'>ATACO, SOCIEDAD ANONIMA DE CAPITAL VARIABLE</td>
								<td className='border border-slate-700 p-3 text-slate-400'>$ 2,172,543.51</td>
								<td className='border border-slate-700 p-3 text-slate-400'>180 dias</td>
								<td className='text-amber-500 p-3'>Firma</td>
							</tr>
						</tbody>
					</table>
				</div>
			</article>
			<button type='button' className='bg-darkBlue p-3 mt-3 rounded-sm font-semibold'>
				Cerrar
			</button>
		</dialog>
	)
}
