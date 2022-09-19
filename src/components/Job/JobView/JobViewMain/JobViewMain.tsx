import {
  StyledDetails,
  StyledDot,
  StyledLocation,
  StyledTitle,
} from 'Job/JobCard/JobCard.styled';
import { JobProps } from 'Job/JobCard/JobCard.type';
import Button from 'UI/Button';
import {
  StyledJobRequirement,
  StyledJobRequirementText,
  StyledJobViewContent,
  StyledJobViewContentDetails,
  StyledJobViewContentDetailsContainer,
  StyledJobViewContentHeader,
  StyledJobViewInfo,
  StyledJobViewRequirements,
  StyledRequirementDot,
  StyledRoleItemIndex,
} from '../JobView.styled';

const JobViewMain = ({ job }: { job: JobProps }) => (
  <StyledJobViewContent>
    <StyledJobViewContentHeader>
      <StyledJobViewContentDetailsContainer>
        <StyledJobViewContentDetails>
          <StyledDetails>
            {job.postedAt} <StyledDot contract={job.contract} /> {job.contract}
          </StyledDetails>
          <StyledTitle>{job.position}</StyledTitle>
          <StyledLocation>{job.location}</StyledLocation>
        </StyledJobViewContentDetails>
        <Button width="full">Apply now</Button>
      </StyledJobViewContentDetailsContainer>
    </StyledJobViewContentHeader>

    <StyledJobViewInfo>{job.description}</StyledJobViewInfo>
    <StyledJobRequirementText>Requirements</StyledJobRequirementText>
    <StyledJobViewInfo>{job.requirements.content}</StyledJobViewInfo>

    <StyledJobViewRequirements>
      {job.requirements.items.map((item, index) => (
        <StyledJobRequirement key={index}>
          <StyledRequirementDot />
          {item}
        </StyledJobRequirement>
      ))}
    </StyledJobViewRequirements>
    <StyledJobRequirementText>What You Will Do</StyledJobRequirementText>
    <StyledJobViewInfo>{job.role.content}</StyledJobViewInfo>
    {job.role.items.map((item, index) => (
      <StyledJobRequirement key={index}>
        <StyledRoleItemIndex>{index}</StyledRoleItemIndex>
        {item}
      </StyledJobRequirement>
    ))}
  </StyledJobViewContent>
);

export default JobViewMain;
