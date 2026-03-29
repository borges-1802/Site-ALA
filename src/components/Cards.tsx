import React from 'react';
interface LabCardProps {
    title: string;
    description?: string;
    /*image: string;*/
    link?: string;
    disabled?: boolean;
}

const Cards: React.FC<LabCardProps> = ({ title, description, /*image,*/ link, disabled }) => {
    return (
        <div className={`flex flex-col md:flex-row items-start gap-6 p-6 rounded-lg transition-all border 
            ${disabled
                    ? "bg-[#1a1a1a] border-gray-800 cursor-not-allowed opacity-60"
                    : "bg-[#222222] border-transparent hover:border-gray-600 cursor-pointer"
                }`}>

            {/*
            IMAGEM
            <div className="w-full md:w-1/3 bg-black rounded overflow-hidden aspect-video flex items-center justify-center border border-gray-800">
                <img src={image} alt={title} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
            </div>*/}

            <div className="flex-1 text-left">
                <h3 className="text-xl font-semibold text-white mb-2 font-sans">
                    {title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {description}
                </p>

                {link && (
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
                )}
            </div>
        </div>
    );
};

export default Cards;