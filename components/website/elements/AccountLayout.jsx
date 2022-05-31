import ImageWrap from "@/website/common/ImageWrap";
import Tab from "@/website/common/Tab";
import React from "react";
import { variable } from "styles/variable";

export default function AccountLayout({ children, tab }) {
    return (
        <>
            <div className="AccountLayout">
                <div className="container">
                    <div className="w30">
                        <div className="SideBar">
                            <div className="SideBar__info">
                                <div className="avt">
                                    <ImageWrap src="/images/user.png" gif="/images/gif/135x135.gif" bora={"50%"} />
                                </div>
                                <div className="name content">Welcome, DatPhan</div>
                                <div className="email content">datphan@abc.com</div>
                            </div>
                            <div className="SideBar__statistic">
                                <div className="w50">
                                    <div className="value">04</div>
                                    <div className="title">upcoming show</div>
                                </div>
                                <div className="w50">
                                    <div className="value">21</div>
                                    <div className="title">Purchase history</div>
                                </div>
                            </div>
                            <ul className="SideBar__tab">
                                <Tab href="/user/DatPhan/information" title="Personal information" active={tab === 1 ? "active" : ""} />
                                <Tab href="/user/DatPhan/purchase-history" title="Purchase history" active={tab === 2 ? "active" : ""} />
                                <Tab href="#" title="Change password" active={tab === 3 ? "active" : ""} />
                                <Tab href="/user/DatPhan/payment-methods" title="Payment methods" active={tab === 4 ? "active" : ""} />
                                <Tab href="#" title="Log out" />
                            </ul>
                        </div>
                    </div>
                    <div className="w70">{children}</div>
                </div>
            </div>
            <style jsx>{`
                .AccountLayout {
                    padding: {
                        top: 200px;
                        bottom: 70px;
                    }
                    @media (max-width: 1024px) {
                        padding-top: 120px;
                    }
                    .container {
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-start;

                        gap: 85px;
                    }
                }
                ul {
                    width: 100%;
                    height: 100%;
                }
                .SideBar {
                    background-color: #060270;
                    box-shadow: 3px 23px 133px rgba(0, 0, 0, 0.2);
                    border-radius: 15px;
                    padding-top: 40px;
                    &__info {
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                        .avt {
                            position: relative;
                            z-index: 1;
                            margin-bottom: 24px;
                            &:before {
                                position: absolute;
                                content: "";
                                background-color: #e71882;
                                width: 107%;
                                height: 107%;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%, -50%);
                                z-index: -1;
                                border-radius: 50%;
                            }
                        }
                        .name {
                            font-family: fm-m;
                            color: ${variable.color.blue};
                        }
                        .email {
                            margin-bottom: 24px;
                        }
                    }
                    &__statistic {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        width: 100%;
                        padding: 0 46px;
                        margin-bottom: 50px;
                        color: ${variable.color.purple};
                        .value {
                            font-family: fm-m;
                            font-size: 30px;
                            line-height: 40px;
                            margin-bottom: 13px;

                            /*  Responsive   */
                            @media (max-width: 1220px) {
                                font-size: 28px;
                            }
                            @media (max-width: 1024px) {
                                font-size: 25px;
                                line-height: 35px;
                            }
                            @media (max-width: 920px) {
                                font-size: 23px;
                                line-height: 32px;
                            }
                            @media (max-width: 500px) {
                                font-size: 22px;
                                line-height: 30px;
                            }
                        }
                        .title {
                            font-family: fm-t;
                            text-transform: uppercase;
                        }
                    }
                    @media (max-width: 1100px) {
                        &__statistic {
                            flex-direction: column;
                            padding: 0 25px;
                            margin-bottom: 30px;
                            .w50 {
                                width: 100%;
                                display: flex;
                                align-items: center;
                                justify-content: flex-start;
                                gap: 5px;
                            }
                            .value {
                                margin-bottom: 13px;
                                width: 20%;
                            }
                        }
                    }
                }
                @media (max-width: 992px) {
                    .AccountLayout {
                        .container {
                            flex-direction: column;
                            .w30 {
                                width: 100%;
                                .SideBar {
                                    &__statistic {
                                        flex-direction: row;
                                        justify-content: space-between;
                                    }
                                }
                            }
                            .w70 {
                                width: 100%;
                            }
                        }
                    }
                }
            `}</style>
        </>
    );
}
