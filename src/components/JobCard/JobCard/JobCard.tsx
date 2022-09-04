import { useContext } from 'react';
import JobViewContext from '../../../contexts/jobView-context';
import { Job } from '../../../types/JobCard';
import {
	StyledCompanyName,
	StyledContainer,
	StyledDetails,
	StyledDot,
	StyledInfo,
	StyledLocation,
	StyledLogo,
	StyledLogoContainer,
	StyledTitle,
} from './JobCard.styled';

type Props = {
	job: Job;
};

const JobCard = ({ job }: Props) => {
	const { selectedJob, setSelectedJob } = useContext(JobViewContext);

	return (
		<>
			<StyledContainer
				onClick={() => {
					setSelectedJob(job.id);
				}}>
				<StyledLogoContainer bgColor={job.logoBackground}>
					<StyledLogo src={`src/${job.logo}`} />
				</StyledLogoContainer>
				<StyledInfo>
					<StyledDetails>
						{job.postedAt} <StyledDot contract={job.contract} /> {job.contract}
					</StyledDetails>
					<StyledTitle>{job.position}</StyledTitle>
					<StyledCompanyName>{job.company}</StyledCompanyName>
					<StyledLocation>{job.location}</StyledLocation>
				</StyledInfo>
			</StyledContainer>
		</>
	);
};

export default JobCard;
