import type { QuizQuestion } from "../types";
import { BID_NO_BID_ADVANCED } from "./bid-no-bid/advanced";
import { BID_NO_BID_CORE } from "./bid-no-bid/core";
import { BID_NO_BID_FUNDAMENTALS } from "./bid-no-bid/fundamentals";

export const BID_NO_BID_QUESTIONS: QuizQuestion[] = [
	...BID_NO_BID_FUNDAMENTALS,
	...BID_NO_BID_CORE,
	...BID_NO_BID_ADVANCED,
];
