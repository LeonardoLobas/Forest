import { useState } from "react";
import logoImg from "../assets/forest.svg";
import { AnimatePresence, motion } from "motion/react";

export function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="container items-center flex justify-between gap-8 py-8">
            <a href="./">
                <img src={logoImg} alt="Forest" />
            </a>
            <nav className="hidden lg:block z-40">
                <ul className="text-white text-xl flex flex-wrap gap-8">
                    <li>
                        <a className="hover:underline py-2 block hover:underline-offset-8" href="#acomodacoes">
                            Acomodações
                        </a>
                    </li>
                    <li>
                        <a className="hover:underline py-2 block hover:underline-offset-8" href="#eventos">
                            Eventos
                        </a>
                    </li>
                    <li>
                        <a className="hover:underline py-2 block hover:underline-offset-8" href="#experiencias">
                            Experiências
                        </a>
                    </li>
                    <li>
                        <a className="hover:underline py-2 block hover:underline-offset-8" href="#contato">
                            Contato
                        </a>
                    </li>
                </ul>
            </nav>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: "easeInOut", duration: 0.3 }}
                        id="mobile-menu"
                        className="lg:hidden z-40 flex items-center fixed w-full inset-0"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-verde-950/40 backdrop-blur-md"
                        />
                        <motion.ul className="text-white z-50 divide-y-2 p-8 cursor-pointer divide-white/10 w-full text-2xl absolute">
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ ease: "easeInOut", duration: 0.3, delay: 0.1 }}
                            >
                                <a className="hover:bg-white/10 p-4 block" href="#acomodacoes">
                                    Acomodações
                                </a>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ ease: "easeInOut", duration: 0.3, delay: 0.2 }}
                            >
                                <a className="hover:bg-white/10 p-4 block" href="#eventos">
                                    Eventos
                                </a>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ ease: "easeInOut", duration: 0.3, delay: 0.3 }}
                            >
                                <a className="hover:bg-white/10 p-4 block" href="#experiencias">
                                    Experiências
                                </a>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ ease: "easeInOut", duration: 0.3, delay: 0.4 }}
                            >
                                <a className="hover:bg-white/10 p-4 block" href="#contato">
                                    Contato
                                </a>
                            </motion.li>
                        </motion.ul>
                    </motion.nav>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-3 cursor-pointer bg-verde-400 text-verde-900 rounded-full px-4 py-2 lg:hidden"
            >
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
