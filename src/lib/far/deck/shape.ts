import type { QuizQuestion } from "../types";
import { SHAPE_ADVANCED } from "./shape/advanced";
import { SHAPE_CORE } from "./shape/core";
import { SHAPE_FUNDAMENTALS } from "./shape/fundamentals";

export const SHAPE_QUESTIONS: QuizQuestion[] = [
	...SHAPE_FUNDAMENTALS,
	...SHAPE_CORE,
	...SHAPE_ADVANCED
];
