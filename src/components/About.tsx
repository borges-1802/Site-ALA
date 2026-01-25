import AboutList from "./AboutList";

export default function Sobre() {
  return (
    <section id="sobre" className=" border-t">
      <div className="container mx-auto px-6 pb-12 py-10 gap-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Sobre</h2>

        <div className="grid gap-6">
          {/* Proposta */}
          <div className="bg-white rounded-xl p-6 shadow-sm border lg:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Proposta e objetivos da disciplina
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A proposta da disciplina de Álgebra Linear Algorítmica é ter{" "}
              <strong>uma aula prática por semana</strong>, na qual os estudantes
              aplicam os conceitos teóricos e utilizam ferramentas computacionais
              para resolver problemas de diferentes áreas do conhecimento que
              têm a álgebra linear como base. E como <strong>principais objetivos:</strong>
            </p>
            <ul className="text-gray-600 leading-relaxed list-disc pl-5 space-y-2">
              <li>
                Construir laboratórios práticos, instigantes e modernos que
                contextualizem a álgebra linear em problemas atuais.
              </li>
              <li>
                Tornar o estudo da disciplina mais interessante e útil, conectando
                teoria e prática.
              </li>
              <li>
                Envolver estudantes e monitores na construção do material.
              </li>
            </ul>
            </div>


    

          {/* Equipe e colaborações */}
          <div className="bg-white rounded-xl p-6 shadow-sm border space-y-4 lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-800">
              Equipe
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Nossa equipe atual é composta pela professora e por cinco monitores da disciplina:
            </p>

            <AboutList />
            
          </div>

          
        </div>
      </div>
    </section>
  )
}
