
import Header from '../Header/Header';
import JobList from '../Job/JobList';

function MainPage() {
	return (
		<>
			<Header searchFieldShow={true} />
			<JobList />
		</>
	);
}
export default MainPage;
