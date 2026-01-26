import React from 'react';
interface LabCardProps {
    title: string;
    description: string;
    /*image: string;*/
    link?: string;
}

const Cards: React.FC<LabCardProps> = ({ title, description, /*image,*/ link }) => {
    return (
        <div className={`flex flex-col md:flex-row items-center gap-6 p-6 rounded-lg transition-all cursor-pointer border border-transparent hover:border-gray-600 bg-[#222222]`}>

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
            </div>
        </div>
    );
};

export default Cards;