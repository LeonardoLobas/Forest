import canoagem from "../assets/canoagem.jpg";
import vidaSelvagem from "../assets/vida-selvagem.jpg";
import obsNoturna from "../assets/observacao-noturna.jpg";

export function Experience() {
    return (
        <section id="experiencias" className="container mb-12 sm:mb-16 grid sm:grid-cols-2 gap-8">
            <div className="bg-verde-900 p-6 sm:p-8 rounded-xl">
                <p className="mb-4  text-verde-200 uppercase tracking-widest test-sm">Experiência Exclusivas</p>
                <h2 className="mb-8 text-white font-serif  text-balance  text-3xl sm:text-4xl lg:text-5xl capitalize">Escolha sua proxima aventura</h2>
                <h3 className="text-white text-xl flex items-center gap-4 before:h-0.5 before:w-6 before:bg-verde-400 hover:before:w-10 before:transition-[width]">
                    Observação Noturna
                </h3>
                <p className="mb-8 text-balance text-gray-400 pl-10">Explore a vida selvagem</p>
                <h3 className="text-white text-xl flex items-center gap-4 before:h-0.5 before:w-6 before:bg-verde-400 hover:before:w-10 before:transition-[width]">
                    Vida Selvagem
                </h3>
                <p className="mb-8 text-balance text-gray-400 pl-10">Observe a vida selvagem</p>
                <h3 className="text-white text-xl flex items-center gap-4 before:h-0.5 before:w-6 before:bg-verde-400 hover:before:w-10 before:transition-[width]">
                    Canoagem
                </h3>
                <p className="mb-8 text-balance text-gray-400 pl-10">Conquiste novos horizontes</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="group relative  cursor-pointer rounded-xl overflow-hidden">
                    <img className="size-full object-cover transition-transform group-hover:scale-110" src={canoagem} alt="Canoagem" />
                    <div className="absolute flex items-end p-4 inset-0 bg-gradient-to-t transition-opacity from-verde-950/80 opacity-0 group-hover:opacity-100">
                        <span className="text-white">Canoagem</span>
                    </div>
                </div>
                <div className="group relative row-span-2  cursor-pointer rounded-xl overflow-hidden">
                    <img className="size-full object-cover transition-transform group-hover:scale-110" src={obsNoturna} alt="obsNoturna" />
                    <div className="absolute flex items-end p-4 inset-0 bg-gradient-to-t transition-opacity from-verde-950/80 opacity-0 group-hover:opacity-100">
                        <span className="text-white">Observação noturna</span>
                    </div>
                </div>
                <div className="group relative  cursor-pointer rounded-xl overflow-hidden">
                    <img className="size-full object-cover transition-transform group-hover:scale-110" src={vidaSelvagem} alt="vidaSelvagem" />
                    <div className="absolute flex items-end p-4 inset-0 bg-gradient-to-t transition-opacity from-verde-950/80 opacity-0 group-hover:opacity-100">
                        <span className="text-white">Vida selvagem</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
