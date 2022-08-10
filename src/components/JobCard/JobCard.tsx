import { Job } from '../../types/JobCard';
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

const JobCard = ({ position, logo, backgroundColor, postedAt, contract, company, location }: Job) => {
	return (
		<StyledContainer>
			<StyledLogoContainer bgColor={backgroundColor}>
				<StyledLogo src={`src/${logo}`} />
			</StyledLogoContainer>
			<StyledInfo>
				<StyledDetails>
					{postedAt} <StyledDot /> {contract}
				</StyledDetails>
				<StyledTitle>{position}</StyledTitle>
				<StyledCompanyName>{company}</StyledCompanyName>
				<StyledLocation>{location}</StyledLocation>
			</StyledInfo>
		</StyledContainer>
	);
};

export default JobCard;
