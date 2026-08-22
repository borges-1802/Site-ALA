import Header from './components/Header'
import ListaLabs from './components/ListaLabs'
import UfrjLogo from './assets/ufrj.png'
import ICLogo from './assets/iclogo.png'
import Ementa from './components/Ementa'
import Sobre from './components/About'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-1">
        <section className="bg-white border-b">
          <div className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-2 gap-2 items-center">
              <div className="justify-self-start">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  ICP115 - Álgebra Linear Algorítmica
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl">
                   
                  Esta página reúne os laboratórios, implementações e materiais desenvolvidos na disciplina Álgebra Linear Algorítmica do Instituto de Computação da UFRJ nos períodos 2025.2, 2026.1 e 2026.2, e serve como relatório da aplicação da disciplina no período.

                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center md:justify-self-end justify-self-center">
                <div className="w-40 h-40 bg-gray-50 rounded-xl flex items-center justify-center">
                  <img
                    src={ICLogo}
                    alt="Logo do Instituto de Computação"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="w-40 h-40 bg-gray-50 rounded-xl flex items-center justify-center">
                  <img
                    src={UfrjLogo}
                    alt="Logo da UFRJ"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="laboratorios" className="bg-slate-50 border-b border-gray-200 py-16">
          <div className="container mx-auto px-6">
            <div className="mb-12 max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 border-l-4 border-blue-600 pl-4">
                Laboratórios Práticos
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Nesta seção estão listados os laboratórios desenvolvidos durante o semestre, com a participação dos monitores João Victor Borges, Kauã Melo, Yuri Castro e Thiago Ferraço, além de laboratórios previamente criados por professores que contribuíram para o material, como os professores Laura Moraes e João Paixão.
              </p>
            </div>
            
            <ListaLabs />
          </div>
        </section>

        <Ementa />

        <Sobre/>
      </main>

      <footer className="p-4 bg-white text-center text-sm text-gray-500 border-t">
        © 2026 - Instituto de Computação - UFRJ
      </footer>
    </div>
  )
}
