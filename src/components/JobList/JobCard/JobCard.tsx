import { Job } from '../../../types/JobCard.type';

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
	StyledLink,
} from './JobCard.styled';

type Props = {
	job: Job;
};

const JobCard = ({ job }: Props) => {
	return (
		<StyledLink to={`jobs/${job.id}`}>
			<StyledContainer>
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
		</StyledLink>
	);
};

export default JobCard;
