import styled from 'styled-components';

export const StyledJobsList = styled.section`
	display: flex;
	flex-direction: column;
	gap: 3rem;
	align-items: center;
	justify-content: center;
	width: 100%;

	@media screen and (min-width: 800px) {
		flex-direction: row;
		flex-wrap: wrap;
        padding: 0 5rem 0 5rem;
	}


	@media screen and (min-width: 1300px) {
		flex-direction: row;
		flex-wrap: wrap;
        width: 90%;
        padding: 0 8rem 0 8rem;
	}
`;

export const StyledJobsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
    padding: 5rem 0 5rem 0;
`

