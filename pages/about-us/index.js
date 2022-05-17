import MasterPageBasic from "@/components/website/master/MasterPageBasic";
import AboutUsPage from "@/components/website/pages/AboutUsPage";

export default function AboutUs(props) {
    return (
        <MasterPageBasic hidePrevButton pageName="About us">
            <AboutUsPage />
        </MasterPageBasic>
    );
}
