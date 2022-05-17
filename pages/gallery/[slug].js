import MasterPageBasic from "@/website/master/MasterPageBasic";
import GalleryDetailPage from "@/website/pages/GalleryDetailPage";
import { useRouter } from "next/router";
export default function GalleryDetail(props) {
    const router = useRouter();
    return (
        <MasterPageBasic pageName={router.query.slug}>
            <GalleryDetailPage/>
        </MasterPageBasic>
    );
}
