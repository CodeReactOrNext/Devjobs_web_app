import JobsData from 'data/data.json';
import { JobProps } from 'Job/JobCard/JobCard.type';
import Button from 'UI/Button/Button';
import {
  StyledFooterButtonContainer,
  StyledFooterContent,
  StyledFooterDetails,
  StyledFooterSecondaryText,
  StyledJobViewCompany,
  StyledJobViewFooter,
} from './JobViewFooter.style';

const JobViewFooter = ({ job }: { job: JobProps }) => (
  <StyledJobViewFooter>
    <StyledFooterContent>
      <StyledFooterDetails>
        <StyledJobViewCompany>{job.company}</StyledJobViewCompany>
        <StyledFooterSecondaryText>So Digital Inc.</StyledFooterSecondaryText>
      </StyledFooterDetails>
      <StyledFooterButtonContainer>
        <Button width="full">Apply now</Button>
      </StyledFooterButtonContainer>
    </StyledFooterContent>
  </StyledJobViewFooter>
);

export default JobViewFooter;
