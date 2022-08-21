import {
  CheckboxText,
  StyledButtonContainer,
  StyledButtonText,
  StyledCheckmark,
  StyledFilterButton,
  StyledFilterFieldContainer,
  StyledFullTimeCheckbox,
  StyledFullTimeCheckboxContainer,
  StyledSearchButton,
  StyledSearchContainer,
  StyledSearchForm,
  StyledSearchInput,
} from './SearchField.styled';

import SearchIcon from './SearchIcon';
import FilterIcon from './FilterIcon';
import LocationIcon from './LocationIcon';
import CheckIcon from './CheckIcon';
import { useContext, useRef } from 'react';
import FilterContext from '../../../contexts/filter-context';

const SearchField = () => {
  const {
    setFilterByTitle,
    setFilterByLocation,
    setFilterByFullTime,
    filterByFullTime,
  } = useContext(FilterContext);

  const byTitleValueRef = useRef<HTMLInputElement>(null);
  const byLocationValueRef = useRef<HTMLInputElement>(null);

  const byFullTimeCheckboxHandler = () => {
    setFilterByFullTime(prevState => !prevState);
  };

  const byTitleChangeHandler = () => {
    if (byTitleValueRef.current) {
      setFilterByTitle(byTitleValueRef.current.value);
    }
  };
  const byLocationChangeHandler = () => {
    if (byLocationValueRef.current) {
      setFilterByLocation(byLocationValueRef.current.value);
    }
  };

  return (
    <StyledSearchContainer>
      <StyledSearchForm>
        <StyledFilterFieldContainer>
          <SearchIcon></SearchIcon>
          <StyledSearchInput
            ref={byTitleValueRef}
            onChange={byTitleChangeHandler}
            placeholder='Filter by title...'
          ></StyledSearchInput>
        </StyledFilterFieldContainer>
        <StyledFilterFieldContainer mobile='mobile'>
          <LocationIcon></LocationIcon>
          <StyledSearchInput
            onChange={byLocationChangeHandler}
            ref={byLocationValueRef}
            placeholder='Filter by location...'
          ></StyledSearchInput>
        </StyledFilterFieldContainer>
        <StyledButtonContainer>
          <StyledFilterButton>
            <FilterIcon fill={'#6E8098'}></FilterIcon>
          </StyledFilterButton>
          <StyledFullTimeCheckboxContainer mobile='mobile'>
            <StyledCheckmark
              onClick={byFullTimeCheckboxHandler}
              checked={filterByFullTime}
            >
              {filterByFullTime && <CheckIcon></CheckIcon>}
            </StyledCheckmark>
            <StyledFullTimeCheckbox
              type='checkbox'
              name='FullTime'
              id='#fulltime'
            />
            <CheckboxText>Full Time</CheckboxText>
          </StyledFullTimeCheckboxContainer>
          <StyledSearchButton>
            <StyledButtonText>Search</StyledButtonText>
            <SearchIcon></SearchIcon>
          </StyledSearchButton>
        </StyledButtonContainer>
      </StyledSearchForm>
    </StyledSearchContainer>
  );
};

export default SearchField;
