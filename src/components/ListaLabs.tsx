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
    description: "Introdução ao conceito de vetor diretor utilizando o Colab.",
    image: false,
    link: "https://drive.google.com/drive/folders/1fslfXjXfsggQLMiLwYtv2NZdwLQd4Syo?usp=sharing"
  },
  {
    title: "Laboratório de Autocoisas",
    description: "Estudo de autovalores e autovetores com conceitos de Transformações Lineares. Feito por: Juliana Valério.",
    image: false,
    link: "https://drive.google.com/drive/folders/1UnvjvpY7ywrtLMn8A-sw3EHUx62qg34j?usp=sharing"
  },
  {
    title: "Laboratório de Vibrações",
    description: "Entender propriedades de autocoisas do sistema físico de forma matricial e manipular matematicamente. Feito por: Kauã Melo.",
    image: false,
    link: "https://drive.google.com/drive/folders/1DvaIiCLeikuZNG6VVZ2inVUSoop_WDSN?usp=sharing"
  },
  {
    title: "A Cifra de Hill e o Algoritmo de Gauss-Jordan",
    description: "Entender propriedades de autocoisas do sistema de forma matricial e manipular utilizando física. Feito por: Kauã Melo.",
    image: false,
    link: "https://drive.google.com/drive/folders/1BnPn9ddukA0s2EAdLvb94AvhPzLuC2nJ?usp=sharing"
  },
  {
    title: "Laboratório de Tranformações Lineares em 2D",
    description: "Interagir com as transformações lineares através de animações no colab.",
    image: false,
    link: "https://drive.google.com/drive/folders/19iFaa4zjA3fOOo1eu65FQuLBvBryXfU_?usp=sharing"
  },
  {
    title: "Laboratório de QR e Sinais Ortogonais",
    description: "Estudo da aplicação do algoritmo de Gram-Schmidt modificado, com interpretação de vetores ortogonais. Feito por: Yuri Castro (Desenvolvido após o período da disciplina).",
    image: false,
    link: "https://drive.google.com/drive/folders/11qWVoj2WZSV6PUvdRK6EGVmycP1XAttK?usp=sharing"
  },
  {
    title: "Laboratório de Tranformações Lineares no ℝⁿ",
    description: "Aplicação de Transformações Lineares em espaços n-dimensionais utilizando o Colab. Feito por: João Victor Borges.",
    image: false,
    link: "https://drive.google.com/drive/folders/1N_tjtTDtT8V5L83Bj7hzbbir7653a2Px?usp=sharing"
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
        />
      ))}
    </div>
  );
}