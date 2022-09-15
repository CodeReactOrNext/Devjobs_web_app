
import Header from '../Header/Header';
import JobList from '../JobList/JobList';

function MainPage() {
	return (
		<>
			<Header searchFieldShow={true} />
			<JobList />
		</>
	);
}
export default MainPage;
