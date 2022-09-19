import Header from "Header/Header";
import JobView from "Job/JobView";

function JobViewPage() {
	return (
		<>
			<Header searchFieldShow={false} />
			<JobView />
		</>
	);
}
export default JobViewPage;
