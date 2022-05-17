import TicketDetailPage from "@/pages/UserPage/TicketDetailPage";
import AccountLayout from "@/website/elements/AccountLayout";
import MasterPageBasic from "@/website/master/MasterPageBasic";

export default function PaymentMethods(props) {
    return (
        <MasterPageBasic pageName={"Ticket Detail"}>
            <AccountLayout>
                <TicketDetailPage />
            </AccountLayout>
        </MasterPageBasic>
    );
}
