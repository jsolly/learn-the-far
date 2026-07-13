import type { QuizQuestion } from "../types";
import { PROPOSE_ADVANCED } from "./propose/advanced";
import { PROPOSE_CORE } from "./propose/core";
import { PROPOSE_FUNDAMENTALS } from "./propose/fundamentals";

export const PROPOSE_QUESTIONS: QuizQuestion[] = [
	...PROPOSE_FUNDAMENTALS,
	...PROPOSE_CORE,
	...PROPOSE_ADVANCED,
];
