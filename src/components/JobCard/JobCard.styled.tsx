import styled from 'styled-components';

export const StyledContainer = styled.div`
	position: relative;
	background-color: #19202d;
	border-radius: 6px;
	width: 350px;
	height: 228px;
	padding: 48px 32px 32px 32px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media (max-width: 1024px) {
		width: 340px;
		padding: 48px 30px 32px 30px;
	}

	@media (max-width: 425px) {
		width: 320px;
		padding: 48px 28px 32px 28px;
	}
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
	color: white;
	font-weight: bolder;
	font-size: 20px;
	text-align: left;
`;

export const StyledDetails = styled.div`
	display: flex;
	gap: 8px;
	font-size: 16px;
	font-weight: 400;
	color: #6e8098;
`;

export const StyledDot = styled.div`
	position: relative;
	width: 4px;
	height: 4px;
	border-radius: 50%;
	background: #6e8098;
	top: 50%;
`;

export const StyledCompanyName = styled.p`
	font-size: 16px;
	font-weight: 400;
	color: #6e8098;
`;

export const StyledLocation = styled.p`
	margin-top: auto;
	font-weight: 600;
	color: #5964e0;
`;
