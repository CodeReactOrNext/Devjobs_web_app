import { StyledContainer, StyledTitle, StyledText } from './Msg404.style';

const Msg404 = () => {
  return (
    <StyledContainer>
      <StyledTitle>404</StyledTitle>
      <StyledText>Oops, sorry we can't find that page!</StyledText>
      <StyledText>
        Either something went wrong or the page doesn't exist anymore.
      </StyledText>
    </StyledContainer>
  );
};

export default Msg404;
