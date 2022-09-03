import styled from 'styled-components';

// background-color: ${({ theme }) => theme.boxBackground};

export const StyledJobViewContainer = styled.section`
	top: 0;
	bottom: 0;
	margin: 120px auto auto auto;
	position: absolute;
	left: 0;
	right: 0;
	width: 90%;
    max-width: 750px;
	min-height: auto;
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

	@media screen and (min-width: 800px) {
		height: 8.75rem;
		border-radius: 0;
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
	position: relative;
	width: 100%;
	height: 10rem;
	background-color: ${({ theme }) => theme.boxBackground};
`;
