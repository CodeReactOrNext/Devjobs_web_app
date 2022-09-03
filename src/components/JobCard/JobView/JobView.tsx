import { Job } from '../../../types/JobCard';
import Button from '../../Button/Button';
import {
	StyledButtonContainer,
	StyledJobViewCompany,
	StyledJobViewContainer,
	StyledJobViewContent,
	StyledJobViewDetails,
	StyledJobViewDetailsContainer,
	StyledJobViewHeader,
	StyledJobViewHeaderContent,
	StyledJobViewWebsite,
	StyledLogoContainer,
} from './JobView.styled';

type Props = {
	job: Job;
};

const JobView = ({ job }: Props) => {
	return (
		<StyledJobViewContainer>
			<StyledJobViewHeader>
				<StyledJobViewHeaderContent>
					<StyledLogoContainer bgColor={job.logoBackground}>
						<img src={`src/${job.logo}`} />
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
			<StyledJobViewContent>Some text</StyledJobViewContent>
		</StyledJobViewContainer>
	);
};

export default JobView;
