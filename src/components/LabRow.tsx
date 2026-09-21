import { Ban, ExternalLink, FileText } from 'lucide-react';
import type { LabCardProps } from './Cards';
import { difficultyLabels, difficultyStyles } from './difficulty';

export default function LabRow({
    title, description, link, docsLink, disabled = false,
    createdBy, modifiedBy, plataform, subject, expectedTime, difficulty
}: LabCardProps) {
    const detalhes = [subject, plataform, expectedTime].filter(Boolean);
    const pessoas = [
        createdBy && `Criado por ${createdBy}`,
        modifiedBy && `Padronizado por ${modifiedBy}`
    ].filter(Boolean);

    return (
        <li className={`rounded-xl border p-4 shadow-sm flex flex-col md:flex-row md:items-center gap-4 transition-all ${disabled
            ? "bg-linear-to-b from-[#243a51] to-[#000418] border-gray-800 opacity-60"
            : "bg-linear-to-b from-primary to-secondary border-transparent hover:border-gray-600"
            }`}>
            <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h4 className={`font-semibold ${disabled ? "text-gray-400" : "text-white"}`}>
                        {title}
                    </h4>
                    {difficulty && (
                        <span className={`px-2 py-0.5 text-xs font-bold rounded-full border backdrop-blur-sm ${difficultyStyles[difficulty]}`}>
                            {difficultyLabels[difficulty]}
                        </span>
                    )}
                    {disabled && (
                        <span className="px-2 py-0.5 text-xs font-bold rounded-full border bg-slate-500/20 text-slate-300 border-slate-500/50">
                            Em breve
                        </span>
                    )}
                </div>

                {detalhes.length > 0 && (
                    <p className="text-sm text-slate-200">{detalhes.join(" · ")}</p>
                )}
                {pessoas.length > 0 && (
                    <p className="text-sm text-slate-300">{pessoas.join(" · ")}</p>
                )}
                {description && (
                    <p className="text-sm text-slate-300 italic mt-1">{description}</p>
                )}
            </div>

            <div className="flex flex-wrap gap-2 shrink-0 md:justify-end">
                {disabled ? (
                    <span className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-400">
                        <Ban size={16} />
                        Indisponível
                    </span>
                ) : (
                    <>
                        {link && (
                            <a
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition-colors"
                            >
                                <ExternalLink size={16} />
                                Abrir no Colab
                            </a>
                        )}
                        {docsLink && (
                            <a
                                href={docsLink}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-3 py-2 rounded-md border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
                            >
                                <FileText size={16} />
                                Ver roteiro
                            </a>
                        )}
                    </>
                )}
            </div>
        </li>
    );
}
