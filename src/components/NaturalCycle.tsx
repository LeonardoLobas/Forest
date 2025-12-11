import manha from "../assets/manha.svg";
import dia from "../assets/dia.svg";
import noite from "../assets/noite.svg";
export function NaturalCycle() {
    return (
        <section className=" container bg-[url('/src/assets/padrao.svg')] bg-no-repeat bg-contain bg-center mb-12 sm:mb-16 sm:py-16">
            <p className="mb-4 text-center text-verde-200 uppercase tracking-widest test-sm">Ciclo da natureza</p>
            <h2 className="mb-8 text-white font-serif mx-auto text-balance text-center max-w-screen-md text-4xl sm:text-6xl">Ritmo da floresta</h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <div className="grid gap-4 bg-verde-900 p-6 sm:p-8 rounded-xl flex-1 transition-transform sm:hover:-translate-y-2">
                    <div className="bg-verde-400 flex size-10 items-center justify-center rounded-full">
                        <img src={manha} alt="manha" />
                    </div>
                    <h3 className="font-serif text-2xl text-white">Amanhecer</h3>
                    <p className="text-gray-400">Desperte com o canto dos pássaros e participe das nossa caminhadas ao ar livre</p>
                    <span className="text-verde-300">05:40 - 07:00</span>
                </div>
                <div className="grid gap-4 bg-verde-900 p-6 sm:p-8 rounded-xl flex-1 transition-transform sm:translate-y-12 sm:hover:translate-y-10">
                    <div className="bg-verde-400 flex size-10 items-center justify-center rounded-full">
                        <img src={dia} alt="dia" />
                    </div>
                    <h3 className="font-serif text-2xl text-white">Meio-Dia</h3>
                    <p className="text-gray-400">Explore trilhas e atividades ao ar livre sob o sol da floresta</p>
                    <span className="text-verde-300">12:00 - 14:00</span>
                </div>
                <div className="grid gap-4 bg-verde-900 p-6 sm:p-8 rounded-xl flex-1 transition-transform sm:hover:-translate-y-2">
                    <div className="bg-verde-400 flex size-10 items-center justify-center rounded-full">
                        <img src={noite} alt="noite" />
                    </div>
                    <h3 className="font-serif text-2xl text-white">Anoitecer</h3>
                    <p className="text-gray-400">Relaxe ao som da natureza e observe as estrelas no céu da floresta</p>
                    <span className="text-verde-300">18:00 - 20:00</span>
                </div>
            </div>
        </section>
    );
}
