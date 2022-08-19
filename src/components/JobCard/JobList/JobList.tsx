import JobsData from '../../../data/data.json';
import JobCard from '../JobCard/JobCard';
import { StyledJobsContainer, StyledJobsList } from './JobList.styled';
import { useState } from 'react';
import Button from '../../Button/Button';

const JobList = () => {
	const [loadMore, setLoadMore] = useState<number>(12);

	return (
		<StyledJobsContainer>
			<StyledJobsList>
				{JobsData.map((job, index) => {
					if (index < loadMore) {
						return (
							<JobCard
								key={job.id}
								position={job.position}
								postedAt={job.postedAt}
								logo={job.logo}
								location={job.location}
								backgroundColor={job.logoBackground}
								company={job.company}
								contract={job.contract}
							/>
						);
					}
				})}
			</StyledJobsList>
			<Button onClick={() => loadMore === 12 ? setLoadMore(16) : setLoadMore(12)}>{loadMore === 12 ? 'Load more' : 'Load less'}</Button>
		</StyledJobsContainer>
	);
};

export default JobList;
