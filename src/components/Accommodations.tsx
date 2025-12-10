import casa1 from "../assets/casa1.jpg";
import casa2 from "../assets/casa2.jpg";
import casa3 from "../assets/casa3.jpg";
export function Accommodations() {
    return (
        <section id="acomodacoes" className="container grid lg:grid-cols-[2fr_3fr] gap-8 mb-12 sm:mb-16 pt-16">
            <div className="content-end bg-[url('/src/assets/padrao.svg')] bg-no-repeat bg-contain bg-left-bottom">
                <h2 className="text-white mb-8 text-4xl font-serif lg:text-5xl space-y-4 ">Refúgio Natural</h2>
                <ul className="text-gray-200 *:flex *:items-center *:gap-4">
                    <li>
                        <span className="h-0.5 w-6 inline-block bg-verde-400"></span>Experimente a natureza de perto
                    </li>
                    <li>
                        <span className="h-0.5 w-6 inline-block bg-verde-400"></span>Conecte-se com a natureza
                    </li>
                    <li>
                        <span className="h-0.5 w-6 inline-block bg-verde-400"></span>Desconecte-se do digital
                    </li>
                    <li>
                        <span className="h-0.5 w-6 inline-block bg-verde-400"></span>Observe a vida selvagem
                    </li>
                    <li>
                        <span className="h-0.5 w-6 inline-block bg-verde-400"></span>Escolha a sua cabine preferida
                    </li>
                </ul>
            </div>
            <div className="grid grid-cols-[2fr_1fr] gap-4 sm:gap-8">
                <div className="col-span-full grid *:col-start-1 *:row-start-1">
                    <img className="h-52  w-full object-cover rounded-xl" src={casa1} alt="Casa 1" />
                    <span className="m-2 uppercase self-start justify-self-end text-white rounded-full bg-verde-950/60 px-4 py-2">Ruby</span>
                </div>
                <div className=" grid *:col-start-1 *:row-start-1">
                    <img className="  size-full object-cover rounded-xl" src={casa2} alt="Casa 2" />
                    <span className="m-2 uppercase self-start justify-self-end text-white rounded-full bg-verde-950/60 px-4 py-2">Emerald</span>
                </div>
                <div className=" grid *:col-start-1 *:row-start-1">
                    <img className="  size-full object-cover rounded-xl" src={casa3} alt="Casa 3" />
                    <span className="m-2 uppercase self-start justify-self-end text-white rounded-full bg-verde-950/60 px-4 py-2">Shapire</span>
                </div>
            </div>
        </section>
    );
}
