import type { QuizQuestion } from "../types";
import { WIN_PROTEST_ADVANCED } from "./win-protest/advanced";
import { WIN_PROTEST_CORE } from "./win-protest/core";
import { WIN_PROTEST_FUNDAMENTALS } from "./win-protest/fundamentals";

export const WIN_PROTEST_QUESTIONS: QuizQuestion[] = [
	...WIN_PROTEST_FUNDAMENTALS,
	...WIN_PROTEST_CORE,
	...WIN_PROTEST_ADVANCED,
];
