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
  StyledContainer,
  StyledSearchForm,
  StyledSearchInput,
  StyledFilterIcon,
} from './SearchField.styled';

import SearchIcon from './SearchIcon';
import LocationIcon from './LocationIcon';
import CheckIcon from './CheckIcon';
import { useContext, useRef, useState } from 'react';
import FilterContext from '../../../contexts/filter-context';
import Modal from '../../UI/Modal';

const SearchField = () => {
  const {
    setFilterByTitle,
    setFilterByLocation,
    setFilterByFullTime,
    filterByFullTime,
  } = useContext(FilterContext);
  const [backdropVisible, setBackdropVisible] = useState(false);
  const byTitleValueRef = useRef<HTMLInputElement>(null);
  const byLocationValueRef = useRef<HTMLInputElement>(null);

  const searchHandler = () => {
    if (byTitleValueRef.current) {
      setFilterByTitle(byTitleValueRef.current.value);
    }
    if (byLocationValueRef.current) {
      setFilterByLocation(byLocationValueRef.current.value);
    }
  };

  const byFullTimeCheckboxHandler = () => {
    setFilterByFullTime(prevState => !prevState);
  };

  return (
    <StyledContainer>
      <StyledSearchForm>
        <StyledFilterFieldContainer>
          <SearchIcon />
          <StyledSearchInput
            ref={byTitleValueRef}
            placeholder='Filter by title...'
          />
        </StyledFilterFieldContainer>
        <StyledFilterFieldContainer mobile='mobile'>
          <LocationIcon />
          <StyledSearchInput
            ref={byLocationValueRef}
            placeholder='Filter by location...'
          />
        </StyledFilterFieldContainer>
        <StyledButtonContainer>
          <StyledFilterButton
            onClick={e => {
              e.preventDefault();
              console.log(e);
              setBackdropVisible(true);
            }}
          >
            <StyledFilterIcon />
          </StyledFilterButton>
          <StyledFullTimeCheckboxContainer mobile='mobile'>
            <StyledCheckmark
              onClick={byFullTimeCheckboxHandler}
              checked={filterByFullTime}
            >
              {filterByFullTime && <CheckIcon />}
            </StyledCheckmark>
            <StyledFullTimeCheckbox
              type='checkbox'
              name='FullTime'
              id='#fulltime'
            />
            <CheckboxText>Full Time</CheckboxText>
          </StyledFullTimeCheckboxContainer>
          <StyledSearchButton
            onClick={e => {
              e.preventDefault();
              searchHandler();
            }}
          >
            <StyledButtonText>Search</StyledButtonText>
            <SearchIcon />
          </StyledSearchButton>
        </StyledButtonContainer>
      </StyledSearchForm>
      {backdropVisible && (
        <Modal backdropHandler={setBackdropVisible}>
          <>
            <StyledFilterFieldContainer modal>
              <LocationIcon />
              <StyledSearchInput
                ref={byLocationValueRef}
                placeholder='Filter by location...'
              />
            </StyledFilterFieldContainer>
            <StyledFullTimeCheckboxContainer modal>
              <StyledCheckmark
                onClick={byFullTimeCheckboxHandler}
                checked={filterByFullTime}
              >
                {filterByFullTime && <CheckIcon />}
              </StyledCheckmark>
              <StyledFullTimeCheckbox
                type='checkbox'
                name='FullTime'
                id='#fulltime'
              />
              <CheckboxText>Full Time Only</CheckboxText>
            </StyledFullTimeCheckboxContainer>
            <StyledSearchButton
              onClick={e => {
                e.preventDefault();
                searchHandler();
                setBackdropVisible(false);
              }}
            >
              <StyledButtonText modal>Search</StyledButtonText>
            </StyledSearchButton>
          </>
        </Modal>
      )}
    </StyledContainer>
  );
};

export default SearchField;
