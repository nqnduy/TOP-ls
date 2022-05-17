import MasterPageBasic from "@/website/master/MasterPageBasic";
import UpComingDetail from "@/website/pages/UpcomingShowsPage/DetailPage";
import { useRouter } from "next/router";
export default function UpcomingShowsDetail(props) {
    const router = useRouter();
    return (
        <MasterPageBasic pageName={router.query.slug}>
            <UpComingDetail />
        </MasterPageBasic>
    );
}
