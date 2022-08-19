import {
  StyledFilterButton,
  StyledSearchButton,
  StyledSearchContainer,
  StyledSearchField,
  StyledSearchInput,
} from './SearchField.styled';

import searchIcon from '../../assets/desktop/icon-search.svg';
import SearchIcon from './SearchIcon';
import FilterIcon from './FilterIcon';

const SearchField = () => {
  return (
    <StyledSearchContainer>
      <StyledSearchField>
        <StyledSearchInput placeholder='Filter by title...'></StyledSearchInput>
        <StyledFilterButton>
          <FilterIcon fill={'#6E8098'}></FilterIcon>
        </StyledFilterButton>
        <StyledSearchButton>
          <SearchIcon fill={'#fff'}></SearchIcon>
        </StyledSearchButton>
      </StyledSearchField>
    </StyledSearchContainer>
  );
};

export default SearchField;
