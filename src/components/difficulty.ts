export type Difficulty = 'facil' | 'medio' | 'dificil';

export const difficultyLabels: Record<Difficulty, string> = {
    facil: "Fácil",
    medio: "Médio",
    dificil: "Difícil"
};

export const difficultyStyles: Record<Difficulty, string> = {
    facil: "bg-green-500/20 text-green-400 border-green-500/50",
    medio: "bg-orange-500/20 text-orange-400 border-orange-500/50",
    dificil: "bg-red-500/20 text-red-400 border-red-500/50"
};
