import MasterPageBasic from "@/website/master/MasterPageBasic";
import SuccessPage from "@/website/pages/UserPage/PaymentPage/SuccessPage";

export default function PaymentSuccess(props) {
    return (
        <MasterPageBasic pageName={"Success Transfer"}>
            <SuccessPage transfer={true} />
        </MasterPageBasic>
    );
}
