import JobsData from '../../data/data.json';
import JobCard from './JobCard/JobCard';
import { StyledJobsContainer, StyledJobsList } from './JobList.styled';
import { useContext, useState } from 'react';
import Button from '../UI/Button/Button';
import FilterContext from '../../contexts/filter-context';
import { JOB_LIST_SHOWING_ITEMS } from '../../constants/constans';

const JobList = () => {
	const [loadMore, setLoadMore] = useState<number>(JOB_LIST_SHOWING_ITEMS);
	const { filterByTitle, filterByLocation, filterByFullTime } =
		useContext(FilterContext);

	const buttonHandler = () => {
		loadMore === JOB_LIST_SHOWING_ITEMS ? setLoadMore(prevState => prevState + JOB_LIST_SHOWING_ITEMS) : setLoadMore(JOB_LIST_SHOWING_ITEMS);
	};

	return (
		<StyledJobsContainer>
			<>
				<StyledJobsList>
					{JobsData.filter((job) => {
						const filterText =
							job.position.toLowerCase().includes(filterByTitle) &&
							job.location.toLowerCase().includes(filterByLocation);
						if (filterByFullTime) {
							return filterText && job.contract === 'Full Time';
						} else return filterText;
					}).map((job, index) => {
						if (index < loadMore) {
							return <JobCard key={job.id} job={job} />;
						}
					})}
				</StyledJobsList>
				<Button onClick={() => buttonHandler()}>
					{loadMore === JOB_LIST_SHOWING_ITEMS ? 'Load more' : 'Load less'}
				</Button>
			</>
		</StyledJobsContainer>
	);
};

export default JobList;
