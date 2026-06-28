import type { FarDeck } from "./types";

export const sampleDeck: FarDeck = {
	title: "Learn The FAR",
	description:
		"A starter flashcard deck for core Federal Acquisition Regulation concepts. This sample data is bundled with the app and can be replaced by a fuller FAR import later.",
	sourceUrl: "https://www.acquisition.gov/browse/index/far",
	parts: [
		{
			id: "part-1",
			label: "FAR Part 1",
			title: "Federal Acquisition Regulations System",
			sourceUrl: "https://www.acquisition.gov/far/part-1",
		},
		{
			id: "part-2",
			label: "FAR Part 2",
			title: "Definitions of Words and Terms",
			sourceUrl: "https://www.acquisition.gov/far/part-2",
		},
		{
			id: "part-6",
			label: "FAR Part 6",
			title: "Competition Requirements",
			sourceUrl: "https://www.acquisition.gov/far/part-6",
		},
		{
			id: "part-7",
			label: "FAR Part 7",
			title: "Acquisition Planning",
			sourceUrl: "https://www.acquisition.gov/far/part-7",
		},
		{
			id: "part-10",
			label: "FAR Part 10",
			title: "Market Research",
			sourceUrl: "https://www.acquisition.gov/far/part-10",
		},
		{
			id: "part-15",
			label: "FAR Part 15",
			title: "Contracting by Negotiation",
			sourceUrl: "https://www.acquisition.gov/far/part-15",
		},
	],
	cards: [
		{
			id: "far-1-102-vision",
			partId: "part-1",
			citation: "FAR 1.102",
			prompt: "What is the vision for the Federal Acquisition System?",
			answer:
				"To deliver best value products or services to the customer while maintaining the public's trust and fulfilling public policy objectives.",
			tags: ["vision", "best-value", "public-trust"],
			sourceUrl: "https://www.acquisition.gov/far/1.102",
		},
		{
			id: "far-1-102-2-performance",
			partId: "part-1",
			citation: "FAR 1.102-2",
			prompt: "What are the four performance standards for the Federal Acquisition System?",
			answer:
				"Satisfy the customer in terms of cost, quality, and timeliness; minimize administrative operating costs; conduct business with integrity, fairness, and openness; and fulfill public policy objectives.",
			tags: ["performance-standards", "customer", "integrity"],
			sourceUrl: "https://www.acquisition.gov/far/1.102-2",
		},
		{
			id: "far-2-101-acquisition",
			partId: "part-2",
			citation: "FAR 2.101",
			prompt: "In broad terms, what does acquisition include under FAR 2.101?",
			answer:
				"Acquisition includes the process of acquiring supplies or services with appropriated funds, beginning when agency needs are established and ending with contract completion and closeout.",
			tags: ["definitions", "acquisition-lifecycle"],
			sourceUrl: "https://www.acquisition.gov/far/2.101",
		},
		{
			id: "far-6-101-competition",
			partId: "part-6",
			citation: "FAR 6.101",
			prompt: "What is the general competition policy in FAR Part 6?",
			answer:
				"Contracting officers shall promote and provide for full and open competition in soliciting offers and awarding Government contracts unless an exception applies.",
			tags: ["competition", "full-and-open"],
			sourceUrl: "https://www.acquisition.gov/far/6.101",
		},
		{
			id: "far-7-102-policy",
			partId: "part-7",
			citation: "FAR 7.102",
			prompt: "Why does the FAR require acquisition planning?",
			answer:
				"Agencies must perform acquisition planning and conduct market research for all acquisitions to promote full and open competition and ensure the Government meets its needs effectively, economically, and timely.",
			tags: ["planning", "market-research", "competition"],
			sourceUrl: "https://www.acquisition.gov/far/7.102",
		},
		{
			id: "far-10-001-policy",
			partId: "part-10",
			citation: "FAR 10.001",
			prompt: "What is the role of market research before developing new requirements?",
			answer:
				"Market research helps agencies determine whether commercial products, commercial services, or nondevelopmental items can meet agency needs before developing new specifications or solicitations.",
			tags: ["market-research", "commercial-products"],
			sourceUrl: "https://www.acquisition.gov/far/10.001",
		},
		{
			id: "far-15-101-best-value",
			partId: "part-15",
			citation: "FAR 15.101",
			prompt: "What does best value mean in negotiated acquisitions?",
			answer:
				"Best value means the expected outcome of an acquisition that provides the greatest overall benefit in response to the requirement, using an appropriate source selection approach.",
			tags: ["negotiation", "source-selection", "best-value"],
			sourceUrl: "https://www.acquisition.gov/far/15.101",
		},
		{
			id: "far-15-306-discussions",
			partId: "part-15",
			citation: "FAR 15.306",
			prompt: "What are discussions in the FAR Part 15 source selection process?",
			answer:
				"Discussions are exchanges with offerors in the competitive range that are tailored to each offeror and, at a minimum, address deficiencies, significant weaknesses, and adverse past performance information to which the offeror has not yet had an opportunity to respond.",
			tags: ["discussions", "competitive-range", "source-selection"],
			sourceUrl: "https://www.acquisition.gov/far/15.306",
		},
	],
};
