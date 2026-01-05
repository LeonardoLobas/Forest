import forest from "../assets/forest.svg";
export function Footer() {
    return (
        <footer className="container pb-8">
            <div className="grid gap-8 lg:grid-cols-2 bg-verde-900 rounded-xl p-6 sm:p-12 mb-8">
                <div className="flex gap-12 max:sm:flex-col max-sm:gap-4">
                    <div>
                        <h3 className="text-white font-serif text-xl mb-4">Endereço</h3>
                        <p className="text-gray-400">
                            Rua dos Carijós, 222 <br /> Belo Horizonte
                        </p>
                    </div>
                    <div className="justify-self-end">
                        <h3 className="text-white font-serif text-xl mb-4">Contato</h3>
                        <p className="text-gray-400">
                            contato@forest.com <br /> +55 21 9999-9999
                        </p>
                    </div>
                </div>
                <div className="justify-self-end">
                    <img className="mb-4" src={forest} alt="forest" />
                    <p className="text-gray-400">Conecte-se com a natureza</p>
                </div>
            </div>
            <div className="text-gray-400 flex items-center justify-between gap-8 text-sm max-sm:flex-col-reverse">
                <p>© 2025 Fores. Todos direitos reservados.</p>
                <ul className="flex gap-8">
                    <li>
                        <a className="hover:text-verde-300" href="#">
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a className="hover:text-verde-300" href="#">
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a className="hover:text-verde-300" href="#">
                            Facebook
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
