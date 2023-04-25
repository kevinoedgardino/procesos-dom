import { statusTextColor } from '../utils/statusColors'

export default function ProcessCard({ process, event }) {
	return (
        <div aria-label="Más detalles" role="button" tabIndex={0} onClick={() => event(true, process)} className="block bg-[#22344961] w-80 lg:w-96 p-2 self-center h-min rounded shadow-[0 0 0 1px #000] border-[#30363d] border-2 hover:brightness-110 active:brightness-125 cursor-pointer">
            <header className="mb-1">
                <div className="w-full flex justify-between mb-1 text-xs font-medium">
                    <h3 aria-label='Estado del proceso' className={statusTextColor[process.id_estado]}>
                        <i className="fa-solid fa-circle-info me-1"></i>
                        <span>{process.estado}</span>
                    </h3>
                    <h3 aria-label='Código del proceso' className="text-slate-600">{process.code}</h3>
                </div>
                <h2 title={process.name} className="w-full text-left text-md mt-1 font-bold leading-5"><span className="line-clamp-3">{process.name}</span></h2>
            </header>
            <p title={process.munic} className="w-full text-left text-sm text-slate-400 font-light line-clamp-3">{process.municipio}</p>
            <footer className="w-full flex justify-between mt-2 text-xs font-medium">
                <h4 className="text-slate-600"><i className="fa-solid fa-calendar me-1"></i><span>{process.fecha_publicacion}</span></h4>
                <h4 className="text-slate-600"><span>Más detalles<i className="ms-1 fa-solid fa-circle-chevron-right"></i></span></h4>
            </footer>
        </div>
    )
}
