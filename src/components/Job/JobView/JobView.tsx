import JobsData from 'data/data.json';
import {
  StyledJobViewBackdrop,
  StyledJobViewContainer,
} from './JobView.styled';
import { useParams } from 'react-router-dom';
import JobViewFooter from './JobViewFooter/JobViewFooter';
import JobViewHeader from './JobViewHeader/JobViewHeader';
import JobViewMain from './JobViewMain/JobViewMain';

const JobView = () => {
  const { id } = useParams();
  const jobViewData = JobsData.filter((item) => item.id === Number(id!));

  return (
    <>
      {jobViewData.map((job) => (
        <StyledJobViewBackdrop key={job.id}>
          <StyledJobViewContainer onClick={(e) => e.stopPropagation()}>
            <JobViewHeader job={job} />
            <JobViewMain job={job} />
          </StyledJobViewContainer>
          <JobViewFooter job={job} />
        </StyledJobViewBackdrop>
      ))}
    </>
  );
};

export default JobView;
