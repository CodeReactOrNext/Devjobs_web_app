import { useContext } from 'react';
import JobCard from '../components/Job/JobCard';
import FilterContext from '../contexts/filter-context';
import JobsData from '../data/data.json';

const useJobDataFilter = (loadMore: number) => {
  const { filterByTitle, filterByLocation, filterByFullTime } =
    useContext(FilterContext);

  return JobsData.filter((job) => {
    const filterText =
      job.position.toLowerCase().includes(filterByTitle) &&
      job.location.toLowerCase().includes(filterByLocation);
    if (filterByFullTime) {
      return filterText && job.contract === 'Full Time';
    }
    return filterText;
  }).map((job, index) => {
    if (index < loadMore) {
      return <JobCard key={job.id} job={job} />;
    }
  });
};

export default useJobDataFilter;
