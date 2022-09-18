export type JobProps = {
    id: number;
	position: string;
	logo: string;
	logoBackground: string;
	postedAt: string;
	contract: string;
	company: string;
	location: string;
	website: string;
	description: string;
	requirements: {
		content: string;
		items: string[];
	};
	role: {
		content: string;
		items: string[];
	};
};
