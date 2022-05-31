import PurchaseHistoryPage from "@/pages/UserPage/PurchaseHistoryPage";
import AccountLayout from "@/website/elements/AccountLayout";
import MasterPageBasic from "@/website/master/MasterPageBasic";
export default function PaymentMethods(props) {
    return (
        <MasterPageBasic pageName={"Information"}>
            <AccountLayout tab={2}>
                <PurchaseHistoryPage />
            </AccountLayout>
        </MasterPageBasic>
    );
}
