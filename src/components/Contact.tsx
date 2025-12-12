export function Contact() {
    return (
        <section id="contato" className="container mb-12 sm:mb-16 grid lg:grid-cols-2 gap-8">
            <div>
                <h1 className="font-serif text-4xl text-verde-300 mb-4">Nossos Contatos</h1>
                <p className="text-gray-400">Tem interesse em passar uma temporada conosco? Entre em contato.</p>
                <div className="grid gap-4">
                    <div>
                        <span className="h-0.5 w-6 bg-verde-400 inline-block"></span>
                        <h2 className="mb-2 text-2xl text-verde-300 font-serif">Base</h2>
                        <p className="text-gray-400">Avenida São João, Vila Joana, Jundiaí - SP - CEP 13216000</p>
                    </div>
                    <div>
                        <span className="h-0.5 w-6 bg-verde-400 inline-block"></span>
                        <h2 className="mb-2 text-2xl text-verde-300 font-serif">Email</h2>
                        <p className="text-gray-400">maryam8944@uorak.com</p>
                    </div>
                    <div>
                        <span className="h-0.5 w-6 bg-verde-400 inline-block"></span>
                        <h2 className="mb-2 text-2xl text-verde-300 font-serif">Telefone</h2>
                        <p className="text-gray-400">17 23123636</p>
                    </div>
                </div>
            </div>
            <form action="" className="grid gap-4 rounded-xl bg-verde-900 shadow-2xl p-4 lg:p-8">
                <div className="grid gap-1">
                    <label htmlFor="nome" className="text-white">
                        Nome
                    </label>
                    <input
                        type="text"
                        className="rounded-md border-2 border-verde-800 bg-verde-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-verde-400 focus:border-b-verde-900"
                        placeholder="Insira seu nome completo"
                    />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="grid gap-1">
                        <label htmlFor="email" className="text-white">
                            Email
                        </label>
                        <input
                            type="email"
                            className="rounded-md border-2 border-verde-800 bg-verde-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-verde-400 focus:border-b-verde-900"
                            placeholder="Insira seu nome email"
                        />
                    </div>
                    <div className="grid gap-1">
                        <label htmlFor="telefone" className="text-white">
                            Telefone
                        </label>
                        <input
                            type="text"
                            className="rounded-md border-2 border-verde-800 bg-verde-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-verde-400 focus:border-b-verde-900"
                            placeholder="Insira seu nome telefone"
                        />
                    </div>
                </div>
                <div className="grid gap-1">
                    <label htmlFor="telefone" className="text-white">
                        Mensagem
                    </label>
                    <textarea
                        id="mensagem"
                        name="mensagem"
                        rows={5}
                        typeof="text"
                        className="rounded-md border-2 border-verde-800 bg-verde-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-verde-400 focus:border-b-verde-900"
                    ></textarea>
                </div>
                <button className="place-self-end bg-verde-400 text-verde-900 inline-block rounded-full px-4 py-2">Enviar email</button>
            </form>
        </section>
    );
}
