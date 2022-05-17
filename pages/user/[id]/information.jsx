import InformationPage from "@/pages/UserPage/InformationPage";
import AccountLayout from "@/website/elements/AccountLayout";
import MasterPageBasic from "@/website/master/MasterPageBasic";

export default function PaymentMethods(props) {
    return (
        <MasterPageBasic pageName={"Information"}>
            <AccountLayout>
                <InformationPage />
            </AccountLayout>
        </MasterPageBasic>
    );
}
