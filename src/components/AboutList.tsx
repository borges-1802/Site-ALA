import { Mail, BookOpen, Linkedin } from "lucide-react";

export default function ContatosEquipe() {
  const equipe = [
    {
      nome: "Juliana Vianna Valério",
      cargo: "Professora",
      email: "juvianna@ic.ufrj.br",
      linkedin: false,
      lattes: false,
    },
    {
      nome: "Halisson Souza",
      cargo: "Monitor",
      email: "halisonpqs@ic.ufrj.br",
      linkedin: false,
      lattes: false,
    },
    {
      nome: "João Victor Borges",
      cargo: "Monitor",
      email: "joaovbn@ic.ufrj.br",
      linkedin: "https://www.linkedin.com/in/jo%C3%A3o-victor-borges-453020272/",
      lattes: "https://lattes.cnpq.br/1656015756108559",
    },
    {
      nome: "Kauã Melo",
      cargo: "Monitor",
      email: "kauamelo@ic.ufrj.br",
      linkedin: false,
      lattes: "http://lattes.cnpq.br/4383561860883564",
    },
    {
      nome: "Lucas Noblat",
      cargo: "Monitor",
      email: "lucasan@ic.ufrj.br",
      linkedin: false,
      lattes: false,
    },
    {
      nome: "Yuri Castro",
      cargo: "Monitor",
      email: "yuriicc@ic.ufrj.br",
      linkedin: false,
      lattes: false,
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {equipe.map((pessoa) => (
        <div
          key={pessoa.nome}
          className="bg-white border rounded-xl p-4 shadow-sm flex flex-col items-center text-center"
        >
          <h4 className="font-semibold text-gray-800">
            {pessoa.nome}
          </h4>
          <span className="text-sm text-gray-500 mb-3">
            {pessoa.cargo}
          </span>
          <div className="flex gap-4">
            {pessoa.email && (
              <a
                href={`mailto:${pessoa.email}`}
                title="Enviar e-mail"
                className="text-gray-500 hover:text-blue-600 transition"
              >
                <Mail size={18} />
              </a>
            )}

            {pessoa.lattes && (
              <a
                href={pessoa.lattes as string}
                title="Lattes"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-blue-600 transition"
              >
                <BookOpen size={18} />
              </a>
            )}

            {pessoa.linkedin && (
              <a
                href={pessoa.linkedin as string}
                title="LinkedIn"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-blue-600 transition"
              >
                <Linkedin size={18} />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
