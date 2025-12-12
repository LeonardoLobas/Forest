export function Footer() {
    return (
        <footer className="container pb-8">
            <div className="bg-verde-900 rounded-xl p-6 sm:p-12 mb-8">
                <div></div>
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
