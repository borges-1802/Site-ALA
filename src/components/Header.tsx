import React from 'react';

const Header: React.FC = () => {
    function toggleSmallMenu() {
        const element = document.getElementById('small-menu');
        if (element) {
            element.classList.toggle('hidden');
        }
    }

    return (
        <header className="relative flex justify-between items-center px-8 py-4 bg-(--bg-header) text-(--white) shadow-md font-sans">
            <div className="text-2xl font-bold">
                Laboratórios de Álgebra Linear Algoritmica
            </div>
            <nav className='hidden md:flex gap-6'>
                <ul className="flex gap-5 list-none">
                    <li>
                        <a href="#laboratorios" className="text-(--white) hover:text-blue-300 font-semibold transition-colors">
                            Laboratórios
                        </a>
                    </li>
                    <li>
                        <a href="#ementa" className="text-(--white) hover:text-blue-300 font-semibold transition-colors">
                            Ementa
                        </a>
                    </li>
                    <li>
                        <a href="#sobre" className="text-(--white) hover:text-blue-300 font-semibold transition-colors">
                            Sobre
                        </a>
                    </li>
                    <li>
                        <a href="https://ic.ufrj.br/" className="text-(--white) hover:text-blue-300 font-semibold transition-colors">
                            Site IC/UFRJ
                        </a>
                    </li>
                </ul>
            </nav>
            <button className="md:hidden p-2" onClick={toggleSmallMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            <div id='small-menu' className="md:hidden mobile-menu hidden absolute top-full left-0 w-full flex flex-col gap-4 bg-(--bg-header) shadow-lg px-6 py-4">
                <a href="#laboratorios"
                    className="text-(--white) font-semibold mr-auto ml-2 text-md py-2 rounded" transition-colors>
                    Laboratórios
                </a>
                <a href="#ementa" className="text-(--white) font-semibold mr-auto ml-2 text-md py-2 rounded">
                    Ementa
                </a>
                <a href="#sobre" className="text-(--white) font-semibold mr-auto ml-2 text-md py-2 rounded">
                    Sobre
                </a>
                <a href="https://ic.ufrj.br/" className="text-(--white) font-semibold mr-auto ml-2 text-md py-2 rounded">
                    Site IC/UFRJ
                </a>
            </div>
        </header>
    );
};

export default Header;