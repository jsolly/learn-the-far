import type { QuizQuestion } from "../types";
import { IDIQ_VEHICLE_QUESTIONS } from "./vehicle/idiq";
import { MAS_VEHICLE_QUESTIONS } from "./vehicle/mas";
import { STRATEGY_VEHICLE_QUESTIONS } from "./vehicle/strategy";

export const VEHICLE_QUESTIONS: QuizQuestion[] = [
	...STRATEGY_VEHICLE_QUESTIONS,
	...MAS_VEHICLE_QUESTIONS,
	...IDIQ_VEHICLE_QUESTIONS,
];
