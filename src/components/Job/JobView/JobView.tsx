import JobsData from 'data/data.json';
import {
  StyledJobViewBackdrop,
  StyledJobViewContainer,
} from './JobView.styled';
import { useParams } from 'react-router-dom';
import JobViewFooter from './JobViewFooter/JobViewFooter';
import JobViewHeader from './JobViewHeader/JobViewHeader';
import JobViewMain from './JobViewMain/JobViewMain';
import Msg404 from 'UI/Msg404/Msg404';

const JobView = () => {
  const { id } = useParams();
  const jobViewData = JobsData.filter((item) => item.id === Number(id!));

  if (!jobViewData.length) {
    return <Msg404 />;
  }

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
