import React, { createContext, useState } from 'react';

interface FilterContextType {
	selectedJob: null | number;
	setSelectedJob: React.Dispatch<React.SetStateAction<null | number>>;
}

const JobViewContext = createContext<FilterContextType>({
	selectedJob: null,
	setSelectedJob: () => {},
});

type Props = {
	children?: React.ReactNode;
};

export const JobViewContextProvider = ({ children }: Props) => {
	const [selectedJob, setSelectedJob] = useState<null | number>(null);

	return (
		<JobViewContext.Provider
			value={{
				selectedJob,
				setSelectedJob,
			}}>
			{children}
		</JobViewContext.Provider>
	);
};

export default JobViewContext;
