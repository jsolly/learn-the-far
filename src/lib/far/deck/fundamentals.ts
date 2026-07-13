import type { QuizQuestion } from "../types";
import { CONTRACT_FUNDAMENTALS } from "./fundamentals/contracts";
import { CRAFT_FUNDAMENTALS } from "./fundamentals/craft";
import { FAR_MAP_FUNDAMENTALS } from "./fundamentals/far-map";
import { MONEY_FUNDAMENTALS } from "./fundamentals/money";
import { PLAYERS_FUNDAMENTALS } from "./fundamentals/players";

export const FUNDAMENTALS_QUESTIONS: QuizQuestion[] = [
	...PLAYERS_FUNDAMENTALS,
	...MONEY_FUNDAMENTALS,
	...CONTRACT_FUNDAMENTALS,
	...CRAFT_FUNDAMENTALS,
	...FAR_MAP_FUNDAMENTALS,
];
