import floresta from "../assets/floresta.jpg";
import wildbeast from "../assets/parceiros/wildbeast.svg";
import videoChuva from "../assets/video_chuva.mp4";
import videoSol from "../assets/video_sol.mp4";

interface IBannerProps {
    temperatura: number;
}
export function Banner({ temperatura }: IBannerProps) {
    const videoAtual = temperatura > 19 ? videoSol : videoChuva;
    return (
        <main className="container">
            <div className="from-verde-950/80 relative overflow-hidden rounded-2xl bg-gradient-to-t px-8 sm:pt-64 pb-8 text-white sm:px-4 pt-12">
                <img className="absolute inset-0 -z-10 size-full object-cover" src={floresta} alt="Banner" />
                <video
                    className="absolute inset-0 animate-fade-in -z-10 size-full object-cover"
                    src={videoAtual}
                    width="1280"
                    height="720"
                    muted
                    playsInline
                    loop
                    autoPlay
                ></video>
                <div className="sm:bg-verde-950 bg-verde-950/60 mb-8 flex flex-col items-start gap-2 rounded-xl p-4 pl-4 sm:inline-flex sm:flex-row sm:items-center sm:gap-8 sm:rounded-full sm:py-1 sm:pr-1">
                    Vagas para dezembro abertas
                    <a className="bg-verde-400 text-verde-900 inline-block rounded-full px-4 py-2" href="">
                        Reserve Hoje
                    </a>
                </div>
                <h1 className="mb-8 sm:mb-20 max-w-screen-sm font-serif text-4xl sm:text-5xl text-balance">
                    Venha experimentar a Vida na Floresta
                </h1>
                <div className="sm:flex items-end justify-between text-sm">
                    <p className="max-sm:mb-4">
                        Melhores locais para visitar{" "}
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
