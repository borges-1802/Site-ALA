import Cards from './Cards';

const labs = [
  {
    title: "Laboratório de Introdução a Álgebra Linear Algorítmica",
    image: "./src/assets/iclogo.png",
    createdBy: "Juliana Valério",
    plataform: "Scilab",
    link: "https://colab.research.google.com/drive/1k9iE4Og6jx-4MHp6aKWaXqOL7tJnU5iV?authuser=1",
    expectedTime: "1 hora e 30 minutos",
    subject: "Introdução à Álgebra Linear Algorítmica",
    disabled: false,
    difficulty: "facil",
  },
  {

    title: "Vetor Diretor",
    image: "./src/assets/iclogo.png",
    createdBy: "Juliana Valério",
    plataform: "Scilab",
    link: "https://colab.research.google.com/drive/1KSnxepNhL33d2wxXCCbDarNCKF8mAAgd?usp=sharing",
    expectedTime: "1 hora e 30 minutos",
    subject: "Introdução à Álgebra Linear Algorítmica",
    disabled: false,
    difficulty: "facil",
  },
  {
    title: "Laboratório de Tranformações Lineares em 2D",
    description: "Ao longo deste laboratório, vocês vão interagir com as transformações lineares através de animações. As tarefas serão baseadas na análise e intuição que tiverem ao verem as animações que vocês mesmo irão controlar.",
    //image: false,
    link: "https://colab.research.google.com/drive/1TdCWWTyznx5cXPhNqXZbk75grRJDCK4n?usp=sharing",
    disabled: true
  },/*
  {
    title: "Laboratório de Autocoisas",
    //image: false,
    disabled: true
  },
  {
    title: "Laboratório de Vibrações",
    //image: false,
    disabled: true
  },
  {
    title: "A Cifra de Hill e o Algoritmo de Gauss-Jordan",
    //image: false,
    disabled: true
  },
  {
    title: "Laboratório de QR e Sinais Ortogonais",
    //image: false,
    disabled: true
  },
  {
    title: "Laboratório de Tranformações Lineares no ℝⁿ",
    //image: false,
    disabled: true
  }*/
  
];

export default function LabsList() {
  return (
    <div className="w-full flex flex-col gap-6 lg:grid md:grid-cols-2 2xl:grid-cols-3 md:gap-8 justify-items-center items-stretch">
      {labs.map((lab, index) => (
        <Cards 
          key={index}
          title={lab.title}
          image={lab.image}
          createdBy={lab.createdBy}
          modifiedBy={lab.modifiedBy}
          subject={lab.subject}
          link={lab.link}
          plataform={lab.plataform}
          disabled={lab.disabled}
          expectedTime={lab.expectedTime}
          difficulty={lab.difficulty}
        />
      ))}
    </div>
  );
}