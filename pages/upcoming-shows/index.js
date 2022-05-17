
import MasterPageBasic from '@/components/website/master/MasterPageBasic';
import UpcomingShowsPage from '@/components/website/pages/UpcomingShowsPage';

export default function UpcomingShows(props) {
    return (
        <MasterPageBasic pageName={"Upcoming Shows"}>
           <UpcomingShowsPage/>
        </MasterPageBasic>
    );
}
