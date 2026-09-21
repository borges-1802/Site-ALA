import { useState } from 'react';
import type { ReactNode } from 'react';
import { LayoutGrid, List } from 'lucide-react';
import Cards from './Cards';
import LabRow from './LabRow';
import type { LabCardProps } from './Cards';

type Lab = LabCardProps;
type Visualizacao = 'cards' | 'lista';

// Parte 1 — Álgebra Linear no Espaço Bidimensional
const parte1: Lab[] = [
  {
    title: "Laboratório de Introdução a Álgebra Linear Algorítmica",
    subject: "Introdução à Álgebra Linear Algorítmica",
    createdBy: "Juliana Valério",
    plataform: "Scilab",
    link: "https://colab.research.google.com/drive/1k9iE4Og6jx-4MHp6aKWaXqOL7tJnU5iV?usp=sharing",
    expectedTime: "1 hora e 30 minutos",
    difficulty: "facil",
  },
  {
    title: "Base e Combinação Linear",
    subject: "Vetores e Produto Escalar",
    disabled: true,
  },
  {
    title: "Vetor Diretor",
    description: "Nosso objetivo nesse laboratório é explorar a relação entre a equação vetorial e cartesiana e também o produto escalar.",
    subject: "Introdução à Álgebra Linear Algorítmica",
    createdBy: "Juliana Valério",
    modifiedBy: "Thiago Ferraco",
    plataform: "Scilab",
    link: "https://colab.research.google.com/drive/1KSnxepNhL33d2wxXCCbDarNCKF8mAAgd?usp=sharing",
    expectedTime: "1 hora e 30 minutos",
    difficulty: "facil",
  },
  {
    title: "Laboratório de Transformações Lineares em 2D",
    description: "Ao longo deste laboratório, vocês vão interagir com as transformações lineares através de animações. As tarefas serão baseadas na análise e intuição que tiverem ao verem as animações que vocês mesmo irão controlar.",
    subject: "Operadores, Composição Matricial e Determinantes",
    modifiedBy: "Thiago Ferraco",
    plataform: "Google Colab",
    link: "https://colab.research.google.com/drive/1TdCWWTyznx5cXPhNqXZbk75grRJDCK4n?usp=sharing",

    disabled: true,
  },
  {
    title: "Laboratório de Autocoisas",
    subject: "Autovalores e Autovetores",
    modifiedBy: "Luiz Camporês",
    plataform: "Google Colab",
    link: "https://colab.research.google.com/drive/1GhIIowwVJC_auoeCt9d_6O2rauj98B0k?usp=sharing",
  },
  {
    title: "Laboratório de Aplicações",
    subject: "Operações de Matrizes e Aplicações",
    disabled: true,
  },
  {
    title: "Cadeia de Markov e PageRank",
    subject: "Aplicações de Álgebra Linear",
    modifiedBy: "Kauã Melo",
    disabled: true,
  },
  {
    title: "Laboratório de Vibrações",
    subject: "Aplicações de Álgebra Linear",
    modifiedBy: "Kauã Melo",
    plataform: "Google Colab",
    disabled: false,
    difficulty: "facil",
    link: "https://colab.research.google.com/drive/1au3kFpXgnO-0xj8qqAD8mh635lO5P3m0?usp=sharing",
  },
  {
    title: "Encaixando Peças com Transformações Lineares",
    subject: "Transformações Lineares e Matrizes",
    createdBy: "Lucas Noblat",
    plataform: "Google Colab",
    disabled: true,
  },
  {
    title: "Cores em Álgebra Linear Algorítmica",
    subject: "Aplicações de Álgebra Linear",
    createdBy: "Lucas Noblat",
    plataform: "Google Colab",
    disabled: true,
  },
  {
    title: "Introdução à Álgebra Linear Aplicada em Computação",
    subject: "Introdução à Álgebra Linear Algorítmica",
    createdBy: "Lucas Noblat",
    plataform: "Google Colab",
    disabled: true,
  },
];

// Parte 2 — Álgebra Linear no ℝⁿ
const parte2: Lab[] = [
  {
    title: "Resolução de Sistema Triangular",
    subject: "Sistema Linear e Sistema Triangular",
    plataform: "Scilab",
    disabled: true,
  },
  {
    title: "Eliminação Gaussiana e Aplicação Ax = b",
    subject: "Matriz Elementar e Eliminação Gaussiana",
    disabled: true,
  },
  {
    title: "Decomposição A = LU",
    subject: "Matriz Elementar, Eliminação Gaussiana e A = LU",
    disabled: true,
  },
  {
    title: "A Cifra de Hill e o Algoritmo de Gauss-Jordan",
    description: "O aluno deve fazer a sua própria implementação no Colab e entregar.",
    subject: "Subespaço, Base e Ortogonalização (Gram-Schmidt)",
    modifiedBy: "Luiz Camporês",
    disabled: true,
  },
  {
    title: "Algoritmo QR e Sinais Ortogonais",
    description: "O aluno deve fazer a sua própria implementação no Colab e entregar.",
    subject: "Gram-Schmidt e Transformações Lineares",
    modifiedBy: "Luiz Camporês",
    disabled: true,
  },
  {
    title: "Laboratório de Transformações Lineares no ℝⁿ",
    subject: "Transformações Lineares e Revisão",
    disabled: false,
    createdBy: "João Victor Borges",
    link: "https://colab.research.google.com/drive/1hSKZoPAKSychxfZWqyfsks5SCy6iEVld?usp=sharing",
  },
];

function BotaoVisualizacao({
  ativo, onClick, icone, rotulo
}: {
  ativo: boolean;
  onClick: () => void;
  icone: ReactNode;
  rotulo: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={ativo}
      className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-colors ${
        ativo
          ? "bg-primary text-white"
          : "bg-white text-slate-600 hover:bg-slate-100"
      }`}
    >
      {icone}
      {rotulo}
    </button>
  );
}

function SecaoLabs({ titulo, labs, visualizacao }: { titulo: string; labs: Lab[]; visualizacao: Visualizacao }) {
  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold text-slate-900 mb-6 border-l-4 border-slate-400 pl-4">
        {titulo}
      </h3>
      {visualizacao === 'cards' ? (
        <div className="w-full flex flex-col gap-6 lg:grid md:grid-cols-2 2xl:grid-cols-3 md:gap-8 justify-items-center items-stretch">
          {labs.map((lab) => (
            <Cards key={lab.title} {...lab} />
          ))}
        </div>
      ) : (
        <ul className="w-full flex flex-col gap-3">
          {labs.map((lab) => (
            <LabRow key={lab.title} {...lab} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default function LabsList() {
  const [visualizacao, setVisualizacao] = useState<Visualizacao>('cards');

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full flex justify-end">
        <div
          role="group"
          aria-label="Modo de visualização dos laboratórios"
          className="inline-flex rounded-lg border border-slate-300 overflow-hidden shadow-sm"
        >
          <BotaoVisualizacao
            ativo={visualizacao === 'cards'}
            onClick={() => setVisualizacao('cards')}
            icone={<LayoutGrid size={16} />}
            rotulo="Cards"
          />
          <BotaoVisualizacao
            ativo={visualizacao === 'lista'}
            onClick={() => setVisualizacao('lista')}
            icone={<List size={16} />}
            rotulo="Lista"
          />
        </div>
      </div>

      <div className="w-full flex flex-col gap-12">
        <SecaoLabs titulo="Álgebra Linear no Espaço Bidimensional" labs={parte1} visualizacao={visualizacao} />
        <SecaoLabs titulo="Álgebra Linear no ℝⁿ" labs={parte2} visualizacao={visualizacao} />
      </div>
    </div>
  );
}
