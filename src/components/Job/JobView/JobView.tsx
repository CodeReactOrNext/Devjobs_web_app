import JobsData from '../../../data/data.json';
import Button from '../../UI/Button/Button';
import {
	StyledDetails,
	StyledDot,
	StyledLocation,
	StyledTitle,
} from '../JobCard/JobCard.styled';
import {
	StyledButtonContainer,
	StyledFooterButtonContainer,
	StyledFooterContent,
	StyledFooterDetails,
	StyledFooterSecondaryText,
	StyledJobRequirement,
	StyledJobRequirementText,
	StyledJobViewBackdrop,
	StyledJobViewCompany,
	StyledJobViewContainer,
	StyledJobViewContent,
	StyledJobViewContentDetails,
	StyledJobViewContentDetailsContainer,
	StyledJobViewContentHeader,
	StyledJobViewDetails,
	StyledJobViewDetailsContainer,
	StyledJobViewFooter,
	StyledJobViewHeader,
	StyledJobViewHeaderContent,
	StyledJobViewInfo,
	StyledJobViewRequirements,
	StyledJobViewWebsite,
	StyledLogoContainer,
	StyledRequirementDot,
	StyledRoleItemIndex,
} from './JobView.styled';
import { Link, useParams } from 'react-router-dom';

const JobView = () => {
	const { id } = useParams();

	const jobViewData = JobsData.filter((item) => item.id === Number(id!));

	return (
		<Link to='/' style={{ textDecoration: 'none' }}>
			{jobViewData.map((job) => (
				<StyledJobViewBackdrop key={job.id}>
					<StyledJobViewContainer onClick={(e) => e.stopPropagation()}>
						<StyledJobViewHeader>
							<StyledJobViewHeaderContent>
								<StyledLogoContainer bgColor={job.logoBackground}>
									<img src={`../src/${job.logo}`} />
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
									<Button width='full'>Apply now</Button>
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
					</StyledJobViewContainer>
						<StyledJobViewFooter>
							<StyledFooterContent>
								<StyledFooterDetails>
								<StyledJobViewCompany>{job.company}</StyledJobViewCompany>
								<StyledFooterSecondaryText>So Digital Inc.</StyledFooterSecondaryText>
								</StyledFooterDetails>
								<StyledFooterButtonContainer>
									<Button width='full'>Apply now</Button>
								</StyledFooterButtonContainer>
							</StyledFooterContent>
						</StyledJobViewFooter>
				</StyledJobViewBackdrop>
			))}
		</Link>
	);
};

export default JobView;
