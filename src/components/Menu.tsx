import logoImg from "../assets/forest.svg";

const mobileButton = document.getElementById("mobile-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileButton?.addEventListener("click", () => {
    mobileMenu?.classList.toggle("hidden");
    mobileMenu?.classList.toggle("flex");
});
mobileMenu?.addEventListener("click", () => {
    mobileMenu?.classList.add("hidden");
    mobileMenu?.classList.remove("flex");
});
export function Menu() {
    return (
        <header className="container items-center flex justify-between gap-8 py-8">
            <a href="./">
                <img src={logoImg} alt="Forest" />
            </a>
            <nav id="mobile-menu" className=" lg:block z-40 hidden items-center max-lg:fixed max-lg:w-full max-lg:inset-0">
                <div className="fixed inset-0 lg:hidden bg-verde-950/40 backdrop-blur-md"></div>
                <ul className="text-white max-lg:z-50 max-lg:divide-y-2 max-lg:p-8 *:cursor-pointer max-lg:divide-white/10 max-lg:w-full text-2xl max-lg:absolute lg:text-xl lg:flex lg:flex-wrap lg:gap-8">
                    <li>
                        <a className="lg:hover:underline max-lg:hover:bg-white/10 lg:py-2 p-4 block lg:hover:underline-offset-8" href="#acomodacoes">
                            Acomodações
                        </a>
                    </li>
                    <li>
                        <a className="lg:hover:underline max-lg:hover:bg-white/10 lg:py-2 p-4 block lg:hover:underline-offset-8" href="#eventos">
                            Eventos
                        </a>
                    </li>
                    <li>
                        <a className="lg:hover:underline max-lg:hover:bg-white/10 lg:py-2 p-4 block lg:hover:underline-offset-8" href="#experiencias">
                            Experiências
                        </a>
                    </li>
                    <li>
                        <a className="lg:hover:underline max-lg:hover:bg-white/10 lg:py-2 p-4 block lg:hover:underline-offset-8" href="#contato">
                            Contato
                        </a>
                    </li>
                </ul>
            </nav>
            <button id="mobile-button" className="flex items-center gap-3 cursor-pointer bg-verde-400 text-verde-900  rounded-full px-4 py-2 lg:hidden">
                Menu{" "}
                <span className="h-3 w-4 flex flex-col justify-between *:h-0.5 *:rounded-md *:bg-verde-800">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </button>
        </header>
    );
}
