import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';
import { difficultyLabels, difficultyStyles } from './difficulty';
import type { Difficulty } from './difficulty';
import ICLogo from '../assets/iclogo.png';
import DisabledIcon from '../assets/disabled.svg';
import UserIcon from '../assets/user.svg';
import UserModIcon from '../assets/userMod.svg';
import CodeIcon from '../assets/code.svg';
import NotebookIcon from '../assets/notebook.svg';
import StopwatchIcon from '../assets/stopwatch.svg';

export interface LabCardProps {
    title: string;
    description?: string;
    image?: string;
    link?: string;
    docsLink?: string;
    disabled?: boolean;
    plataform?: string;
    createdBy?: string;
    modifiedBy?: string;
    subject?: string;
    expectedTime?: string;
    difficulty?: Difficulty;
}

function InfoRow({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
    return (
        <div className="w-full flex items-center gap-2">
            {icon}
            <p className="text-base text-[#cbdefc88] font-bold">{children}</p>
        </div>
    );
}

function InfoIcon({ src, alt }: { src: string; alt: string }) {
    return <img src={src} alt={alt} className="w-7.5 h-7.5 shrink-0" />;
}

const Cards: React.FC<LabCardProps> = ({
    title, description, image, link, docsLink, disabled = false,
    createdBy, modifiedBy, plataform, subject, expectedTime, difficulty
}) => {
    return (
        <div className={`flex flex-col items-center gap-6 p-6 rounded-lg border w-full relative transition-all
            ${disabled
                ? "bg-linear-to-b from-[#243a51] to-[#000418] border-gray-800 opacity-60"
                : "bg-linear-to-b from-primary to-secondary border-transparent hover:border-gray-600"
            }`}>

            {difficulty && (
                <span className={`absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full border backdrop-blur-sm ${difficultyStyles[difficulty]}`}>
                    {difficultyLabels[difficulty]}
                </span>
            )}

            {disabled && (
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full border bg-slate-500/20 text-slate-300 border-slate-500/50">
                    Em breve
                </span>
            )}

            {/* mt-6 descola o título do topo e evita colisão com as tags */}
            <div className="mt-6 w-full px-2">
                <h3 className={`text-xl font-semibold mb-2 font-sans text-center ${disabled ? "text-gray-400" : "text-white"}`}>
                    {title}
                </h3>
                {description && (
                    <p className="text-sm text-[#cbdefc88] text-center">
                        {description}
                    </p>
                )}
            </div>

            <div className="rounded-2xl flex-1 flex justify-center items-center">
                <img
                    src={disabled ? DisabledIcon : (image ?? ICLogo)}
                    alt={disabled ? "Laboratório em construção" : title}
                    className="w-48 object-cover rounded-lg"
                />
            </div>

            <div className="w-full flex flex-col gap-2">
                {subject && (
                    <InfoRow icon={<InfoIcon src={NotebookIcon} alt="Assunto" />}>
                        {subject}
                    </InfoRow>
                )}
                {createdBy && (
                    <InfoRow icon={<InfoIcon src={UserIcon} alt="Criado por" />}>
                        {createdBy}
                    </InfoRow>
                )}
                {modifiedBy && (
                    <InfoRow icon={<InfoIcon src={UserModIcon} alt="Padronizado por" />}>
                        {modifiedBy}
                    </InfoRow>
                )}
                {plataform && (
                    <InfoRow icon={<InfoIcon src={CodeIcon} alt="Plataforma" />}>
                        {plataform}
                    </InfoRow>
                )}
                {expectedTime && (
                    <InfoRow icon={<InfoIcon src={StopwatchIcon} alt="Duração estimada" />}>
                        {expectedTime}
                    </InfoRow>
                )}
            </div>

            <div className="w-full flex flex-wrap justify-center gap-3 pt-2">
                {disabled ? (
                    <span className="text-gray-400 text-lg font-semibold py-2">
                        Laboratório Indisponível
                    </span>
                ) : (
                    <>
                        {link && (
                            <a
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors"
                            >
                                <ExternalLink size={18} />
                                Abrir no Colab
                            </a>
                        )}
                        {docsLink && (
                            <a
                                href={docsLink}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
                            >
                                <FileText size={18} />
                                Ver roteiro
                            </a>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Cards;
