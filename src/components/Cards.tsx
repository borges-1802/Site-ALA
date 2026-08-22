import React from 'react';
interface LabCardProps {
    title: string;
    image?: string;
    link?: string;
    disabled?: boolean;
    plataform?: string;
    createdBy?: string;
    modifiedBy?: string;
    subject?: string;
    expectedTime?: string;
    difficulty?: 'facil' | 'medio' | 'dificil';
}

const difficultyStyles = {
    facil: "bg-green-500/20 text-green-400 border-green-500/50",
    medio: "bg-orange-500/20 text-orange-400 border-orange-500/50",
    dificil: "bg-red-500/20 text-red-400 border-red-500/50"
};

const difficultyLabels = {
    facil: "Fácil",
    medio: "Médio",
    dificil: "Difícil"
};

const Cards: React.FC<LabCardProps> = ({ 
    title, image, link, disabled = false, createdBy, 
    modifiedBy, plataform , subject, expectedTime, difficulty 
}) => {

    if (disabled) {
        return (
            <div className="flex flex-col items-center gap-6 p-6 rounded-lg border w-full bg-linear-to-b from-[#243a51] to-[#000418] border-gray-800 cursor-not-allowed opacity-60 relative">
                
                {/* Tag de Dificuldade no modo desabilitado */}
                {difficulty && (
                    <span className={`absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full border ${difficultyStyles[difficulty]}`}>
                        {difficultyLabels[difficulty]}
                    </span>
                )}

                {/* Adicionado mt-6 para dar espaço para a tag */}
                <div className="mt-6">
                    <h3 className="text-xl font-semibold text-gray-400 mb-2 font-sans text-center">
                        {title ? title : "Laboratório Indisponível"}
                    </h3>
                </div>

                <div className="rounded-2xl flex-1 flex justify-center items-center">
                    <img 
                        src="src/assets/disabled.svg" 
                        alt="Laboratório Desabilitado" 
                        className="w-48 object-cover rounded-lg" 
                    />
                </div>
                
                <div className="w-full flex justify-center items-center py-4">
                    <span className="text-gray-400 text-lg font-semibold">
                        Laboratório Indisponível
                    </span>
                </div>
            </div>
        );
    }

    return (
        <a href={link} className={`flex flex-col items-center gap-6 p-6 rounded-lg transition-all border w-full relative
            ${disabled
                    ? "bg-[#1a1a1a] border-gray-800 cursor-not-allowed opacity-60"
                    : "bg-linear-to-b from-primary to-secondary hover:border-gray-600 cursor-pointer"
                }`}>
            
            {/* Tag de Dificuldade */}
            {difficulty && (
                <span className={`absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full border backdrop-blur-sm ${difficultyStyles[difficulty]}`}>
                    {difficultyLabels[difficulty]}
                </span>
            )}

            {/* Adicionado mt-6 para descolar o título do topo e evitar colisão com a tag */}
            <div className="mt-6 w-full px-2 flex-1">
                <h3 className="text-xl font-semibold text-white mb-2 font-sans text-center">
                    {title}
                </h3>
            </div>
                
            {image
            ? <img src={image} alt={title} className="w-48 object-cover rounded-lg" />
            : <div className="rounded-2xl flex-1 flex justify-center items-center">
                <img src="src/assets/iclogo.png" alt="Logo do Instituto de Computação" className="w-48 object-cover rounded-lg" />
            </div>
            }
            
            <div className="w-full flex flex-col gap-2">
                <div className="w-full flex items-center gap-2">
                    <img src="src/assets/user.svg" alt="user" className="w-[30px] h-[30px]" />
                    <p className="text-xl text-[#cbdefc88] font-bold">
                        {createdBy}
                    </p>
                </div>
                {modifiedBy && (
                    <div className="w-full flex items-center gap-2">
                    <img src="src/assets/userMod.svg" alt="user" className="w-[30px] h-[30px]" />
                    <p className="text-xl text-[#cbdefc88] font-bold">
                        {modifiedBy}
                    </p>
                </div>
                )}
                <div className="w-full flex items-center gap-2">
                    <img src="src/assets/code.svg" alt="user" className="w-[30px] h-[30px]" />
                    <p className="text-xl text-[#cbdefc88] font-bold">
                        {plataform}
                    </p>
                </div>
                <div className="w-full flex items-center gap-2">
                    <img src="src/assets/notebook.svg" alt="user" className="w-[30px] h-[30px]" />
                    <p className="text-xl text-[#cbdefc88] font-bold">
                        {subject}
                    </p>
                </div>
                <div className="w-full flex items-center gap-2">
                    <img src="src/assets/stopwatch.svg" alt="user" className="w-[30px] h-[30px]" />
                    <p className="text-xl text-[#cbdefc88] font-bold">
                        {expectedTime}
                    </p>
                </div>
            </div>
            
        </a>
    );
};

export default Cards;