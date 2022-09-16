import JobsData from '../../../data/data.json';
import { useContext, useEffect } from 'react';

import { Job } from '../../../types/JobCard.type';
import Button from '../../UI/Button/Button';
import {
	StyledDetails,
	StyledDot,
	StyledLocation,
	StyledTitle,
} from '../JobCard/JobCard.styled';
import {
	StyledButtonContainer,
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
		<Link to='/'>
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
				</StyledJobViewBackdrop>
			))}
		</Link>
	);
};

export default JobView;
