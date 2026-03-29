import Cards from './Cards';

const labs = [
  {
    title: "Laboratório de Introdução a Álgebra Linear Algorítmica",
    description: "Apresentação inicial ao collab, scilab e aos conceitos básicos da disciplina de álgebra linear algorítmica. Feito por: Juliana Valério.",
    image: false,
    link: "https://drive.google.com/drive/folders/18u_b4ZUAKPBiSvDPrq4Gj9j5z0Ntjw1_?usp=sharing"
  },
  {
    title: "Vetor Diretor",
    description: "O objetivo é explorar a relação entre a equação vetorial e cartesiana, além de como o produto escalar ajuda a interpretar a reta como um conjunto de pontos que seguem uma mesma condição geométrica.",
    image: false,
    link: "https://colab.research.google.com/drive/1KSnxepNhL33d2wxXCCbDarNCKF8mAAgd?usp=sharing"
  },
  {
    title: "Laboratório de Autocoisas",
    image: false,
    disabled: true
  },
  {
    title: "Laboratório de Vibrações",
    image: false,
    disabled: true
  },
  {
    title: "A Cifra de Hill e o Algoritmo de Gauss-Jordan",
    image: false,
    disabled: true
  },
  {
    title: "Laboratório de Tranformações Lineares em 2D",
    image: false,
    disabled: true
  },
  {
    title: "Laboratório de QR e Sinais Ortogonais",
    image: false,
    disabled: true
  },
  {
    title: "Laboratório de Tranformações Lineares no ℝⁿ",
    image: false,
    disabled: true
  }
];

export default function LabsList() {
  return (
    <div className="space-y-4 max-w-4xl mx-auto p-4">
      {labs.map((lab, index) => (
        <Cards 
          key={index}
          title={lab.title}
          description={lab.description}
          link={lab.link}
          disabled={lab.disabled}
        />
      ))}
    </div>
  );
}