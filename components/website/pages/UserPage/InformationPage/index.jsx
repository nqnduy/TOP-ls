import Input from "@/common/Input";
import Select from "@/common/Select";
import MyTicket from "@/pages/UserPage/InformationPage/MyTicket";
import React from "react";

export default function InformationPage({ show }) {
    return (
        <>
            <div className={`InformationContent ${show}`}>
                <div className="PersonalInfo">
                    <h2 className="PersonalInfo__headline txMain bold fz-21">Personal information</h2>
                    <div className="PersonalInfo__fieldGroup flexCOL">
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "26px 13px" }}>
                            <Input type="text" placeholder="Phan Văn Tất Đạt" />
                            <Input type="email" placeholder="datphan@abc.com" />
                            <Input type="tel" placeholder="Phone number" />
                            <Input type="date" placeholder="Date of birth" />
                        </div>
                        <Input type="text" placeholder="Address" />
                        <div className="flex" style={{ gap: 13 }}>
                            <Input type="text" placeholder="City" />
                            <div className="w50">
                                <Select />
                            </div>
                        </div>
                    </div>
                </div>
                <MyTicket />
            </div>
            <style jsx>{`
                .PersonalInfo {
                    margin-bottom: 65px;
                    &__headline {
                        margin-bottom: 28px;
                    }
                    &__fieldGroup {
                        gap: 26px;
                        @media (max-width: 600px) {
                            .w50 {
                                width: 70%;
                            }
                        }
                    }
                }
                @media (max-width: 600px) {
                    .PersonalInfo {
                    }
                }
            `}</style>
        </>
    );
}
