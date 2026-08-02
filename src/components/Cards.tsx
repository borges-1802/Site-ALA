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
}

const Cards: React.FC<LabCardProps> = ({ title, image, link, disabled = false, createdBy, modifiedBy, plataform , subject, expectedTime}) => {

    if (disabled) {
        return (
            <div className="flex flex-col items-center gap-6 p-6 rounded-lg border w-full bg-linear-to-b from-[#243a51] to-[#000418] border-gray-800 cursor-not-allowed opacity-60">
                <div className="">
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
                
                {/* Mensagem simples no lugar da lista de ícones */}
                <div className="w-full flex justify-center items-center py-4">
                    <span className="text-gray-400 text-lg font-semibold">
                        Laboratório Indisponível
                    </span>
                </div>
            </div>
        );
    }

    return (
        <a href={link} className={`flex flex-col items-center gap-6 p-6 rounded-lg transition-all border w-full
            ${disabled
                    ? "bg-[#1a1a1a] border-gray-800 cursor-not-allowed opacity-60"
                    : "bg-linear-to-b from-primary to-secondary hover:border-gray-600 cursor-pointer"
                }`}>
                <div className="">
                <h3 className="text-xl font-semibold text-white mb-2 font-sans text-center">
                    {title}
                </h3>

                {/*{link && (
                    <a
                        href={link}
                        className="flex items-center gap-2 text-[#61dafb] font-bold text-sm hover:underline"
                    >
                        <span>📖</span>
                        <span>Ver Lab</span>
                    </a>
                )}
                {disabled && (
                    <span className="text-gray-500 text-sm font-semibold">
                        Indisponível
                    </span>
                )}*/}
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