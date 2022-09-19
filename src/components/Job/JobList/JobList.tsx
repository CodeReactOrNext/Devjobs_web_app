import { StyledJobsContainer, StyledJobsList } from './JobList.styled';
import {  useState } from 'react';
import { Button } from '../../UI';

import { JOB_LIST_SHOWING_ITEMS } from 'constants/constans';
import useJobDataFilter from 'hooks/useJobDataFilter';
import { buttonHandler } from './helpers/buttonHandler';

const JobList = () => {
  const [loadMore, setLoadMore] = useState<number>(JOB_LIST_SHOWING_ITEMS);

  return (
    <StyledJobsContainer>
      <StyledJobsList>{useJobDataFilter(loadMore)}</StyledJobsList>
      <Button onClick={() => buttonHandler(loadMore, setLoadMore)}>
        {loadMore === JOB_LIST_SHOWING_ITEMS ? 'Load more' : 'Load less'}
      </Button>
    </StyledJobsContainer>
  );
};

export default JobList;
