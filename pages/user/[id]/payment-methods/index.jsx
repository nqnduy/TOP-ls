import MasterPageBasic from "@/website/master/MasterPageBasic";
import PaymentPage from "@/website/pages/UserPage/PaymentPage";

export default function PaymentMethods(props) {
    return (
        <MasterPageBasic pageName={"Payment Methods"}>
            <PaymentPage />
        </MasterPageBasic>
    );
}
