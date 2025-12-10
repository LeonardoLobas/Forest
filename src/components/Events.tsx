export function Events() {
    return (
        <section id="eventos" className="mb-12 sm:mb-16 py-12 sm:py-16 bg-verde-900">
            <div className="container">
                <p className="mb-4 text-center text-verde-200 uppercase tracking-widest test-sm">Conecte-se com a natureza</p>
                <h2 className="mb-8 text-white font-serif mx-auto text-balance text-center max-w-screen-md text-4xl sm:text-6xl">
                    Cada Som, Cada Momento, Uma Nova Descoberta
                </h2>
                <div className="overflow-x-auto snap-x snap-mandatory pb-4 grid grid-cols-[repeat(3,minmax(300px,1fr))] gap-4 sm:gap-8">
                    <div>
                        <div className="gap-4 grid snap-center text-gray-300 bg-verde-800 p-6 sm:p-8 rounded-xl">
                            <h3 className="text-verde-300 text-2xl font-serif">Lua nova</h3>
                            <div>
                                <p className="font-serif text-5xl">23</p>
                                <p className=" text-xl">Março 2049</p>
                            </div>
                            <p className=" text-balance">Melhor período para observação astronômica. O céu estará claro e as estrelas visíveis</p>
                            <a href="#contato" className="justify-self-start self-end bg-verde-400 text-verde-900 inline-block rounded-full px-4 py-2">
                                Reservar 23/03
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="gap-4 grid snap-center text-gray-300 bg-verde-800 p-6 sm:p-8 rounded-xl">
                            <h3 className="text-verde-300 text-2xl font-serif">Aurora Boreal</h3>
                            <div>
                                <p className="font-serif text-5xl">15</p>
                                <p className=" text-xl">Abril 2049</p>
                            </div>
                            <p className=" text-balance">Melhor período para observação astronômica. O céu estará claro e as estrelas visíveis</p>
                            <a href="#contato" className="justify-self-start self-end bg-verde-400 text-verde-900 inline-block rounded-full px-4 py-2">
                                Reservar 15/04
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="gap-4 grid snap-center text-gray-300 bg-verde-800 p-6 sm:p-8 rounded-xl">
                            <h3 className="text-verde-300 text-2xl font-serif">Chuva de Meteoros</h3>
                            <div>
                                <p className="font-serif text-5xl">18</p>
                                <p className=" text-xl">Agosto 2049</p>
                            </div>
                            <p className=" text-balance">Melhor período para observação astronômica. O céu estará claro e as estrelas visíveis</p>
                            <a href="#contato" className="justify-self-start self-end bg-verde-400 text-verde-900 inline-block rounded-full px-4 py-2">
                                Reservar 18/08
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
