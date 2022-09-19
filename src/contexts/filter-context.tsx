import React, { createContext, useState } from 'react';

interface FilterContextType {
	filterByTitle: string;
	setFilterByTitle: React.Dispatch<React.SetStateAction<string>>;
	filterByLocation: string;
	setFilterByLocation: React.Dispatch<React.SetStateAction<string>>;
	filterByFullTime: boolean;
	setFilterByFullTime: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterContext = createContext<FilterContextType>({
	filterByTitle: '',
	setFilterByTitle: () => {},
	filterByLocation: '',
	setFilterByLocation: () => {},
	filterByFullTime: false,
	setFilterByFullTime: () => {},
});

type Props = {
	children?: React.ReactNode;
};

export const FilterContextProvider = ({ children }: Props) => {
	const [filterByTitle, setFilterByTitle] = useState<string>('');
	const [filterByLocation, setFilterByLocation] = useState<string>('');
	const [filterByFullTime, setFilterByFullTime] = useState<boolean>(false);

	return (
		<FilterContext.Provider
			value={{
				filterByTitle,
				setFilterByTitle,
				filterByLocation,
				setFilterByLocation,
				filterByFullTime,
				setFilterByFullTime,
			}}
		>
			{children}
		</FilterContext.Provider>
	);
};

export default FilterContext;
