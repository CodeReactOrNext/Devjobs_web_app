import Header from 'Header/Header';
import JobList from 'Job/JobList';
import Msg404 from 'UI/Msg404/Msg404';

const PageNotFound = () => (
  <>
    <Header searchFieldShow={false} />
    <Msg404 />
  </>
);

export default PageNotFound;
