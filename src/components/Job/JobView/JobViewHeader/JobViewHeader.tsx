import { getImageUrl } from 'Job/helpers/GetImageUrl';
import { JobProps } from 'Job/JobCard/JobCard.type';
import Button from 'UI/Button';
import {
  StyledButtonContainer,
  StyledJobViewCompany,
  StyledJobViewDetails,
  StyledJobViewDetailsContainer,
} from '../JobView.styled';
import {
  StyledJobViewHeader,
  StyledJobViewHeaderContent,
  StyledJobViewWebsite,
  StyledLogoContainer,
} from './JobViewHeader.styled';

const JobViewHeader = ({ job }: { job: JobProps }) => (
  <StyledJobViewHeader>
    <StyledJobViewHeaderContent>
      <StyledLogoContainer bgColor={job.logoBackground}>
        <img src={getImageUrl(job.logo)} />
      </StyledLogoContainer>
      <StyledJobViewDetailsContainer>
        <StyledJobViewDetails>
          <StyledJobViewCompany>{job.company}</StyledJobViewCompany>
          <StyledJobViewWebsite>{job.website}</StyledJobViewWebsite>
        </StyledJobViewDetails>
        <StyledButtonContainer>
          <Button>Company Site</Button>
        </StyledButtonContainer>
      </StyledJobViewDetailsContainer>
    </StyledJobViewHeaderContent>
  </StyledJobViewHeader>
);

export default JobViewHeader;
