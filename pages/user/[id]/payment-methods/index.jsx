import AccountLayout from "@/website/elements/AccountLayout";
import MasterPageBasic from "@/website/master/MasterPageBasic";
import PaymentPage from "@/website/pages/UserPage/PaymentPage";

export default function PaymentMethods(props) {
    return (
        <MasterPageBasic pageName={"Payment Methods"}>
            <AccountLayout>
                <PaymentPage />
            </AccountLayout>
        </MasterPageBasic>
    );
}
