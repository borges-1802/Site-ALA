import Tabela from "./Tabela";

export default function Ementa() {
    return (
        <section id="ementa" className="bg-white border-t">
            <div className="container mx-auto px-6 pb-12 py-10 gap-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-10">
                    Ementa
                </h2>

                {/* LISTA */}
                <div className="space-y-6">

                    <p className="text-(--bg-header) text-lg font-semibold mb-4">
                        A Ementa original da disciplina ICP115 - Álgebra Linear Algorítmica no SIGA abrange:
                    </p>
                    <p className="text-gray-600 mt-1">
                        Vetores no plano, base e combinação linear. Transformações lineares e matrizes no plano. Autovalores e autovetores para operadores do plano. Diagonalização e mudança de variáveis em dimensão dois. Sistemas lineares e eliminação gaussiana. Rn e seus subespaços. Interseção, soma e complemento de subespaços. Dependência e independência linear. Base e coordenadas. Transformações lineares e matrizes. Mudança de base. Autovalores e autovetores e diagonalização de operadores.
                    </p>

                    <p className="text-(--bg-header) text-lg font-semibold mb-4">
                        E o cronograma da disciplina para este semestre foi organizado em dois grandes tópicos:
                    </p>

                    {/* ITEM */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-xl p-6 shadow-sm border space-y-6">

                            <div className="flex gap-4 items-start">
                                <h3 className="text-lg font-semibold text-gray-800">
                                    Álgebra Linear no Espaço Bidimensional
                                </h3>
                            </div>

                            <div className="flex justify-center">
                                <Tabela
                                    headers={["Semana", "Conteúdo"]}
                                    rows={[
                                        ["Semana 01", "Apresentação do Curso e Ferramentas"],
                                        ["Semana 02", "Vetores e Produto Escalar"],
                                        ["Semana 03", "Matrizes e Transformações Lineares"],
                                        ["Semana 04", "Operadores, Composição Matricial, Determinantes"],
                                        ["Semana 05", "Autovalores e Autovetores"],
                                        ["Semana 06", "Operações de Matrizes e Aplicações"],
                                        ["Semana 07", "Aplicações de Álgebra Linear no Plano"],
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm border space-y-6">

                            <div className="flex gap-4 items-start">
                                <h3 className="text-lg font-semibold text-gray-800">
                                    Álgebra Linear no ℝⁿ
                                </h3>
                            </div>

                            <div className="flex justify-center">
                                <Tabela
                                    headers={["Semana", "Conteúdo"]}
                                    rows={[
                                        ["Semana 10", "Sistema Linear e Sistema Triangular"],
                                        ["Semana 11", "Matriz Elementar e Eliminação Gaussiana"],
                                        ["Semana 12", "Matriz Elementar, Eliminação Gaussiana e A = LU"],
                                        ["Semana 13", "Determinante e Inversa de Matrizes"],
                                        ["Semana 14", "Subespaço, Base e Ortogonalização (Gram-Schmidt)"],
                                        ["Semana 15", "Gram-Schmidt e Transformações Lineares"],
                                        ["Semana 16", "Transformações Lineares e Revisão"],
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-(--bg-header) text-lg font-semibold mb-4">
                            O material foi baseado na apostila do curso de Álgebra Linear do professor do MIT, G. Strang, e na apostila do professor Severino Collier, que pode ser encontrada no link: <a href="https://ic.ufrj.br/~collier/index.html" className="text-blue-600 underline">Site do Collier</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
