
import Header from '../Header/Header';
import JobView from '../JobList/JobView/JobView';

function JobViewPage() {
	return (
		<>
			<Header searchFieldShow={false} />
			<JobView />
		</>
	);
}
export default JobViewPage;
