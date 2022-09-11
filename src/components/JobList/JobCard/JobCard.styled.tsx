import styled from 'styled-components';

export const StyledContainer = styled.div`
	cursor: pointer;
	position: relative;
	background-color: ${({ theme }) => theme.boxBackground};
	border-radius: 6px;
	width: 320px;
	height: 228px;
	padding: 48px 32px 32px 32px;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media screen and (min-width: 425px) {
		width: 340px;
		padding: 48px 28px 32px 28px;
	}

	@media screen and (min-width: 1024px) {
		width: 350px;
		padding: 48px 30px 32px 30px;
	} ;
`;

export const StyledLogoContainer = styled.div<{ bgColor: string }>`
	top: 0;
	transform: translateY(-50%);
	position: absolute;
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 15px;
	background: ${props => props.bgColor};
`;

export const StyledLogo = styled.img`
	width: auto;
`;

export const StyledInfo = styled.div`
	height: 100%;
	display: flex;
	align-items: start;
	justify-content: center;
	flex-direction: column;
	gap: 13px;
`;

export const StyledTitle = styled.h1`
	color: ${({ theme }) => theme.headingText};
	font-weight: bolder;
	font-size: 20px;
	text-align: left;
`;

export const StyledDetails = styled.div`
	display: flex;
	gap: 8px;
	font-size: 16px;
	font-weight: 400;
	color: ${({ theme }) => theme.regularText};
`;

export const StyledDot = styled.div<{ contract: string }>`
	position: relative;
	width: 4px;
	height: 4px;
	border-radius: 50%;
	background: #6e8098;
	top: ${props => (props.contract === 'Full Time' ? '50%' : '64%')};
`;

export const StyledCompanyName = styled.p`
	font-size: 16px;
	font-weight: 400;
	color: ${({ theme }) => theme.regularText};
	`;
	
	export const StyledLocation = styled.p`
	margin-top: auto;
	font-weight: 600;
	color: ${({ theme }) => theme.themeColor};
`;
