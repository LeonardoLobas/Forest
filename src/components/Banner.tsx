import floresta from "../assets/floresta.jpg";
import wildbeast from "../assets/parceiros/wildbeast.svg";
export function Banner() {
    return (
        <main className="container">
            <div className="text-white pt-64 px-8 pb-8 bg-gradient-to-t from-verde-950/80 relative rounded-2xl overflow-hidden">
                <img className="absolute inset-0 size-full object-cover -z-10" src={floresta} alt="Banner" />
                <div className="bg-verde-950 inline-flex gap-8 mb-8 items-center py-1 pr-1 rounded-full pl-4">
                    Vagas para dezembro abertas
                    <a className="bg-verde-400 text-verde-900 py-2 px-4 inline-block  rounded-full" href="">
                        Reserve Hoje
                    </a>
                </div>
                <h1 className="font-serif text-balance mb-20 max-w-screen-sm text-5xl">Venha experimentar a Vida na Floresta</h1>
                <div className="text-sm flex justify-between items-end">
                    <p>
                        Melhores locais para visitar
                        <a className="underline decoration-2 underline-offset-2 hover:no-underline" href="./">
                            2049
                        </a>
                    </p>
                    <div className="uppercase">
                        <p>Recomendado por</p>
                        <p className="flex items-center gap-4">
                            <img src={wildbeast} alt="Wildbeast" />
                            <span>|</span>
                            Revista Nacional
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
