import {
  CheckboxText,
  StyledButtonContainer,
  StyledButtonText,
  StyledFilterButton,
  StyledFilterFieldContainer,
  StyledFullTimeCheckboxContainer,
  StyledSearchButton,
  StyledContainer,
  StyledSearchForm,
  StyledFilterIcon,
} from './SearchField.styled';
import SearchIcon from './SearchIcon';
import LocationIcon from './icon/LocationIcon';
import { useContext, useRef, useState } from 'react';
import FilterContext from 'contexts/filter-context';
import { Modal, Checkbox, Input } from '../UI';
import useWindowDimensions from 'hooks/useWindowDimenstions';

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

  const { width } = useWindowDimensions();

  const searchHandler = () => {
    if (byTitleValueRef.current) {
      setFilterByTitle(byTitleValueRef.current.value.toLowerCase());
    }
    if (byLocationValueRef.current) {
      setFilterByLocation(byLocationValueRef.current.value.toLowerCase());
    }
  };
  const byFullTimeCheckboxHandler = () => {
    setFilterByFullTime((prevState) => !prevState);
  };

  return (
    <>
      <StyledContainer>
        <StyledSearchForm>
          <StyledFilterFieldContainer>
            <SearchIcon />
            <Input
              ref={byTitleValueRef}
              placeholder={
                width > 1400
                  ? 'Filter by title, companies, expertise…'
                  : 'Filter by title...'
              }
            />
          </StyledFilterFieldContainer>
          <StyledFilterFieldContainer mobile="mobile">
            <LocationIcon />
            <Input
              ref={byLocationValueRef}
              placeholder="Filter by location..."
            />
          </StyledFilterFieldContainer>
          <StyledButtonContainer>
            <StyledFullTimeCheckboxContainer mobile="mobile">
              <Checkbox
                onClick={byFullTimeCheckboxHandler}
                checked={filterByFullTime}
                name="FullTime"
                id="#fulltime"
              />

              <CheckboxText>
                {width > 1400 ? 'Full Time Only' : 'Full Time'}
              </CheckboxText>
            </StyledFullTimeCheckboxContainer>
            <StyledSearchButton
              onClick={(e) => {
                e.preventDefault();
                searchHandler();
              }}
            >
              <StyledButtonText>Search</StyledButtonText>
              <SearchIcon />
            </StyledSearchButton>
            <StyledFilterButton
              onClick={(e) => {
                e.preventDefault();
                setBackdropVisible(true);
              }}
            >
              <StyledFilterIcon />
            </StyledFilterButton>
          </StyledButtonContainer>
        </StyledSearchForm>

        {backdropVisible && (
          <Modal backdropHandler={setBackdropVisible}>
            <>
              <StyledFilterFieldContainer modal>
                <LocationIcon />
                <Input
                  ref={byLocationValueRef}
                  placeholder="Filter by location..."
                />
              </StyledFilterFieldContainer>
              <StyledFullTimeCheckboxContainer modal>
                <Checkbox
                  onClick={byFullTimeCheckboxHandler}
                  checked={filterByFullTime}
                  name="FullTime"
                  id="#fulltime"
                />
                <CheckboxText>Full Time Only</CheckboxText>
              </StyledFullTimeCheckboxContainer>
              <StyledSearchButton
                onClick={(e) => {
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
    </>
  );
};

export default SearchField;
