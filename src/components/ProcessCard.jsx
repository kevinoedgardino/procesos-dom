export default function ProcessCard() {
	return (
        <article className="block bg-[#22344961] w-96 p-2 rounded shadow-[0 0 0 1px #000] border-[#30363d] border-2">
            <header className="mb-1">
                <div className="w-full flex justify-between mb-1 text-xs font-medium">
                    <h3 className=" text-blue-400">
                        <i class="fa-solid fa-circle-info me-1"></i>
                        <span>En recepción de ofertas</span>
                    </h3>
                    <h3 className="text-slate-600">DOM-CP-70/2023</h3>
                </div>
                <h2 className="text-left text-md font-bold leading-5">EQUIPAMIENTO DE POZO EN CANTÓN SAN JOSÉ CAPULÍN, MUNICIPIO DE SANTA ROSA GUACHIPILÍN, DEPARTAMENTO DE SANTA ANA</h2>
            </header>
            <p className="text-left text-sm text-slate-400 font-light">San Rafael, San Salvador, San Miguel, Dulce Nombre de María, San Franciso Morazán, San Fernando</p>
            <footer className="w-full flex justify-between mt-2 text-xs font-medium">
                <h4 className="text-slate-600"><i class="fa-solid fa-calendar me-1"></i><span>14-04-2023</span></h4>
                <h4 className="text-slate-600"><span>Más detalles<i class="ms-1 fa-solid fa-circle-chevron-right"></i></span></h4>
            </footer>
        </article>
    )
}
