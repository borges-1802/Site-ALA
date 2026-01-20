import Header from './components/Header';
import ListaLabs from './components/ListaLabs';

export function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f172a] text-slate-200">
      <Header />

      <main className="flex-1">
        <section className="bg-[#1e293b] py-16 px-6 border-b border-slate-700">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              ICP115 - Álgebra Linear Algorítmica
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed italic">
              Relatório da disciplina ministrada pela professora Juliana Vianna Valério no Instituto de Computação (IC/UFRJ) durante o período 2025.2.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#labs" className="bg-[#61dafb] text-slate-900 px-6 py-3 rounded-md font-bold hover:bg-cyan-300 transition-colors">
                Ver Laboratórios
              </a>
              <a href="#equipe" className="border border-slate-500 px-6 py-3 rounded-md font-bold hover:bg-slate-700 transition-colors">
                Equipe
              </a>
            </div>
          </div>
        </section>

        <section id="labs" className="container mx-auto p-8">
          <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-[#61dafb] pl-4">
            Laboratórios Desenvolvidos
          </h2>
          <ListaLabs />
        </section>
      </main>

      <footer className="p-8 bg-[#0f172a] text-center text-sm text-slate-500 border-t border-slate-800">
        © 2026 - Instituto de Computação - UFRJ
      </footer>
    </div>
  );
}