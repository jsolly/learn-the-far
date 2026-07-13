import type { QuizQuestion } from "../types";
import { FIND_ADVANCED } from "./find/advanced";
import { FIND_CORE } from "./find/core";
import { FIND_FUNDAMENTALS } from "./find/fundamentals";

export const FIND_QUESTIONS: QuizQuestion[] = [
	...FIND_FUNDAMENTALS,
	...FIND_CORE,
	...FIND_ADVANCED
];
