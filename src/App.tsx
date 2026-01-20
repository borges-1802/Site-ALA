import Header from './components/Header'
import ListaLabs from './components/ListaLabs'
import UfrjLogo from './assets/ufrj.png'
import ICLogo from './assets/iclogo.png'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-1">
        <section className="bg-white border-b">
          <div className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="justify-self-start">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  ICP115 - Álgebra Linear Algorítmica
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl">
                  Esta página reúne os laboratórios, implementações e materiais
                  desenvolvidos na disciplina Álgebra Linear Algorítmica do
                  Instituto de Computação da UFRJ no período 2025.2 e serve como
                  relatório da aplicação da disciplina no período.
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

        <section className="container mx-auto px-6 pb-12 py-10 gap-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Laboratórios
          </h2>
          <ListaLabs />
        </section>
      </main>

      <footer className="p-4 bg-white text-center text-sm text-gray-500 border-t">
        © 2026 — Instituto de Computação — UFRJ
      </footer>
    </div>
  )
}
