import styled from 'styled-components';

export const StyledJobViewBackdrop = styled.div`
	margin-top: -25px;
	bottom: 0;
	position: relative;
	left: 0;
	right: 0;
	width: 100%;
	max-width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: center;
	justify-content: center;
`;

export const StyledJobViewContainer = styled.section`
	position: relative;
	width: 90%;
	max-width: 750px;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
`;

export const StyledJobViewHeader = styled.header`
	position: relative;
	width: 100%;
	height: 12.5rem;
	background-color: ${({ theme }) => theme.boxBackground};
	border-radius: 0.25rem;
	overflow: hidden;

	@media screen and (min-width: 800px) {
		height: 8.75rem;
	} ;
`;

export const StyledJobViewHeaderContent = styled.div`
	position: relative;
	top: -25px;
	display: flex;
	gap: 0.75rem;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media screen and (min-width: 800px) {
		width: 100%;
		top: 0;
		flex-direction: row;
		justify-content: space-between;
	} ;
`;

export const StyledJobViewDetailsContainer = styled.div`
	height: 100%;
	width: 75%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media screen and (min-width: 800px) {
		padding: 0 2rem 0 0;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	} ;
`;

export const StyledJobViewDetails = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	align-items: center;
	@media screen and (min-width: 800px) {
		align-items: start;
	} ;
`;

export const StyledJobViewCompany = styled.p`
	color: ${({ theme }) => theme.headingText};
	font-size: 20px;
	font-weight: 600;
	letter-spacing: 0.25px;
`;

export const StyledJobViewWebsite = styled.p`
	color: ${({ theme }) => theme.regularText};
	font-size: 16px;
	font-weight: 500;
	letter-spacing: 0.25px;
`;

export const StyledButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 0.75rem;
`;

export const StyledLogoContainer = styled.div<{ bgColor: string }>`
	width: 50px;
	height: 50px;
	background: ${props => props.bgColor};
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 0.95rem;

	@media screen and (min-width: 800px) {
		height: 140px;
		width: 140px;
		border-radius: 0;
	} ;
`;

export const StyledJobViewContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	position: relative;
	width: 100%;
	height: auto;
	background-color: ${({ theme }) => theme.boxBackground};
	padding: 1.5rem;
	border-radius: 0.25rem;
`;

export const StyledJobViewContentHeader = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.boxBackground};
`;

export const StyledJobViewContentDetailsContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	@media screen and (min-width: 650px) {
		align-items: center;
		flex-direction: row;
	} ;
`;

export const StyledJobViewContentDetails = styled.div`
	height: auto;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	@media screen and (min-width: 650px) {
		height: 100%;
		width: 300%;
	} ;
`;

export const StyledJobViewInfo = styled.p`
	color: ${({ theme }) => theme.regularText};
`;

export const StyledJobRequirementText = styled.h2`
	color: ${({ theme }) => theme.headingText};
	font-size: 2rem;
	font-weight: 600;
`;

export const StyledJobViewRequirements = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
	padding-left: 1rem;
`;

export const StyledJobRequirement = styled.li`
	color: ${({ theme }) => theme.regularText};
	align-items: center;
	justify-content: start;
	display: flex;
	width: 100%;
	gap: 1rem;
`;

export const StyledRequirementDot = styled.div`
	padding-left: 4px;
	height: 4px;
	border-radius: 50%;
	background: ${({ theme }) => theme.regularText};
`;

export const StyledRoleItemIndex = styled.p`
	color: ${({ theme }) => theme.themeColor};
	padding-left: 4px;
	font-weight: 600;
`;

export const StyledJobViewFooter = styled.footer`
	width: 100%;
	height: 100px;
	background-color: ${({ theme }) => theme.boxBackground};
	display: flex;
	align-items: center;
	justify-content: center;
`

export const StyledFooterContent = styled.div`
	width: 90%;
	max-width: 750px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	@media screen and (min-width: 650px) {
		
	} ;
`

export const StyledFooterButtonContainer = styled.div`
	width: 100%;

	@media screen and (min-width: 650px) {
	width: 30%;	
	} ;
`

export const StyledFooterDetails = styled.div`
	display: none;

	@media screen and (min-width: 650px) {
		width: 100%;
		display: flex;
		flex-direction: column;
	};

`

export const StyledFooterSecondaryText = styled.p`
color: ${({ theme }) => theme.regularText};

`