import JobsData from '../../../data/data.json';
import JobCard from '../JobCard/JobCard';
import { StyledJobsContainer, StyledJobsList } from './JobList.styled';
import { useContext, useState } from 'react';
import Button from '../../Button/Button';
import FilterContext from '../../../contexts/filter-context';

const JobList = () => {
  const [loadMore, setLoadMore] = useState<number>(12);
  const { filterByTitle, filterByLocation, filterByFullTime } =
    useContext(FilterContext);

  return (
    <StyledJobsContainer>
      <StyledJobsList>
        {JobsData.filter(job => {
          const filterText =
            job.position.toLowerCase().includes(filterByTitle) &&
            job.location.toLowerCase().includes(filterByLocation);
          if (filterByFullTime) {
            return filterText && job.contract === 'Full Time';
          } else return filterText;
        }).map((job, index) => {
          if (index < loadMore) {
            return (
              <JobCard
                job={job}
              />
            );
          }
        })}
      </StyledJobsList>
      <Button
        onClick={() => (loadMore === 12 ? setLoadMore(16) : setLoadMore(12))}
      >
        {loadMore === 12 ? 'Load more' : 'Load less'}
      </Button>
    </StyledJobsContainer>
  );
};

export default JobList;
