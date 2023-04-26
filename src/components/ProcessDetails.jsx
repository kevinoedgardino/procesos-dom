import Loader from './Loader'
import PlotTable from './PlotTable'
import { statusTextColor } from '../utils/statusColors'

export default function ProcessDetails({ show, process }) {
	return (
		<dialog className='bg-black/50 text-white fixed top-0 left-0 w-full h-screen z-50 flex flex-col justify-center items-center'>
			<article className='bg-darkBlue w-[99.99%] h-fit md:max-w-10/12 md:w-10/12 p-2 opacity-100 border-[#30363d] border-2 rounded-sm text-left overflow-y-scroll'>
				<div className='cont-item flex flex-col lg:flex-row md:m-3'>
					<div>
						<h3 className='text-slate-600 p-2'>{process.code}</h3>
						<h1 className='p-2 font-bold max-w-[40rem] text-[1.3rem]'>{process.name}</h1>
					</div>
					<div>
						<hr className='ms-2 w-40 md:w-80 border-slate-400' />
						<h3 className='p-2'>
							Estado:
							<span className={statusTextColor[process.id_estado]}> {process.estado}</span>
						</h3>
						<h3 className='p-2'>
							Tipo de proceso: <span className='text-slate-300'>{process.tipo}</span>
						</h3>
						<h3 className='p-2'>
							Enfoque: <span className='text-slate-300'>{process.enfoque}</span>
						</h3>
						<div className='p-2 block max-w-[40rem]'>
							<h2>Departamento:</h2>
							<p className='text-slate-300'>{process.departamento}</p>
						</div>
						<div className='p-2 block max-w-[40rem]'>
							<h2>Municipio:</h2>
							<p className='text-slate-300'>{process.municipio}</p>
						</div>
						<hr className='ms-2 w-40 md:w-80 border-slate-400 my-3 mb-5' />
					</div>
				</div>
				<div className='w-full overflow-x-scroll'>
					<Loader />
				</div>
				<footer class='relative mt-3 bottom-0 left-0 w-full h-fit flex justify-center'>
					<div class='flex flex-col gap-1 justify-center w-3/4'>
						<hr class='w-full flex m-auto border-slate-600' />
						<p class='text-center text-xs italic text-slate-600 mb-1'>
							Para ver la información completa de este proceso, dirígete al sitio web oficial: <a href={'https://sistemas.obrasmunicipales.gob.sv/procesos/detalle/' + process.id} class='decoration-clone text-cyan-500' target='_blank'>sistemas.obrasmunicipales.gob.sv/procesos/detalle/{process.id}</a>.
						</p>
					</div>
				</footer>
			</article>
			<button
				type='button'
				onClick={() => show(false, {})}
				className='bg-darkBlue p-3 mt-3 rounded-sm font-semibold border-[#30363d] border-2'
			>
				Cerrar
			</button>
		</dialog>
	)
}
