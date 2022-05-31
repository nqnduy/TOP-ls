import Input from "@/common/Input";
import MyTicket from "@/pages/UserPage/InformationPage/MyTicket";
import Select from "@/website/common/Select";
import React from "react";

export default function InformationPage({ show }) {
    const province = ["Hà Nội", "Hồ Chí Minh", "Đà Nẵng"];
    return (
        <>
            <div className={`InformationContent ${show}`}>
                <div className="PersonalInfo">
                    <h2 className="headline">Personal information</h2>
                    <div className="fieldGroup">
                        <div>
                            <Input type="text" placeholder="Phan Văn Tất Đạt" />
                            <Input type="email" placeholder="datphan@abc.com" />
                            <Input type="tel" placeholder="Phone number" />
                            <Input type="date" placeholder="Date of birth" />
                        </div>
                        <Input type="text" placeholder="Address" />
                        <div>
                            <Input type="text" placeholder="City" />
                            <Select data={province} />
                        </div>
                    </div>
                </div>
                <MyTicket />
            </div>
            <style jsx global>{`
                .PersonalInfo {
                    margin-bottom: 65px;
                    .headline {
                        font-size: 21px;
                        line-height: 32px;
                        margin-bottom: 28px;

                        /*  Responsive   */
                        @media (max-width: 1220px) {
                            font-size: 19px;
                            line-height: 28px;
                        }
                        @media (max-width: 1024px) {
                            font-size: 17px;
                            line-height: 26px;
                        }
                        @media (max-width: 830px) {
                            font-size: 16px;
                            line-height: 26px;
                        }
                    }
                    .fieldGroup {
                        display: flex;
                        flex-direction: column;

                        gap: 26px;
                        > div:first-child {
                            display: grid;
                            grid-template-columns: repeat(2, 1fr);
                            gap: 26px 13px;
                        }
                        > div:last-child {
                            display: flex;
                            margin-right: -13px;
                            > * {
                                margin-right: 13px;
                            }
                            .selectCommon {
                                width: 50%;
                            }
                        }
                        @media (max-width: 600px) {
                            .selectCommon {
                                width: 70%;
                            }
                        }
                    }
                }
            `}</style>
        </>
    );
}
