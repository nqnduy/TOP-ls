import asset from "@/plugins/assets/asset";
import Button from "@/website/common/Button/ButtonMain";
import TextTitle from "@/website/common/TextTitle";
import Ticket from "@/website/section/UpComing/Detail/Ticket";
import Image from "next/image";
import React, { useState } from "react";
import renderHTML from "react-render-html";
import { variable } from "styles/variable";
export default function PaymentPage() {
    const [selectMethod, setSelectMethod] = useState();
    const handleSelectMethod = (i) => (ev) => {
        ev.preventDefault();
        setSelectMethod(i);
    };
    const tickets = [
        {
            title: "vé thông",
            unit: "VND",
            price: "1124000",
            ticket: 49,
            color: "pink",
            children: "<p>Coupon đồ ăn & thức uống</p><p>Combo quà Xin Chào Goods</p>",
        },
        {
            title: "vé hoa",
            unit: "VND",
            price: "854000",
            ticket: 0,
            color: "pink",
            children: "<p>Coupon đồ ăn & thức uống</p><p>Túi vải</p>",
        },
        {
            title: "vé đồi",
            unit: "VND",
            price: "495000",
            ticket: 7,
            color: "blue",
            children: "<p>Coupon đồ uống</p>",
        },
    ];
    return (
        <>
            <div className="Payment">
                <div className="container">
                    <TextTitle small_text={"get ticket"} big_text={"Payment information"} textAlign="center" />
                    <p className="content">Confirm information below to final step</p>
                    <div className="PaymentInfo">
                        <div className="PaymentInfo__ticket">
                            {tickets.map((ticket, index) => (
                                <Ticket data={ticket} payment={true} key={index}>
                                    {renderHTML(ticket.children)}
                                </Ticket>
                            ))}
                        </div>
                        <div className="content">Total price</div>
                        <div className="PaymentInfo__totalPrice">$202.45/ 10 ticket ( 5 economy + 5 VIP )</div>
                        <div className="PaymentInfo__methodTitle content">Payment method</div>
                        <div className="PaymentInfo__methodList">
                            <div
                                className={`PaymentInfo__methodList-item ${selectMethod === "remittance" ? "selected" : ""}`}
                                onClick={handleSelectMethod("remittance")}>
                                <div className="PaymentInfo__methodList-item--img">
                                    <Image src={asset("/images/icons/remittance.svg")} width={68} height={46} alt="" />
                                </div>
                                <span></span>
                            </div>

                            <div
                                className={`PaymentInfo__methodList-item ${selectMethod === "paypal" ? "selected" : ""}`}
                                onClick={handleSelectMethod("paypal")}>
                                <div className="PaymentInfo__methodList-item--img">
                                    <Image src={asset("/images/icons/paypal.svg")} width={84} height={22} alt="" />
                                </div>
                                <span></span>
                            </div>

                            <div className={`PaymentInfo__methodList-item ${selectMethod === "momo" ? "selected" : ""}`} onClick={handleSelectMethod("momo")}>
                                <div className="PaymentInfo__methodList-item--img">
                                    <Image src={asset("/images/icons/momo.svg")} width={28} height={27} alt="" />
                                </div>
                                <span></span>
                            </div>
                        </div>
                        <div className="PaymentInfo__buttonGroup">
                            <Button color="primary">Back</Button>
                            <Button>Next step</Button>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx global>{`
                .Payment {
                    display: flex;
                    align-items: center;
                    flex-direction: column;

                    text-align: center;
                    overflow: hidden;

                    padding-top: 200px;
                    padding-bottom: 50px;
                    @media (max-width: 1024px) {
                        padding-top: 100px;
                    }
                    .container {
                        width: 100%;
                        text-align: center;
                    }

                    > p {
                        color: #8492a6;
                    }
                    .PaymentInfo {
                        &__ticket {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;

                            width: 100%;
                            margin: 35px 0;
                            .Ticket {
                                width: calc((100% / 3) - (40px / 3));
                                .content {
                                    font-family: fm-r;
                                    font-weight: 400;
                                    text-transform: initial;
                                }
                            }
                        }
                        .content {
                            font-family: fm-b;
                            font-weight: 700;
                            text-transform: uppercase;
                        }
                        &__totalPrice {
                            font-family: fm-b;
                            font-size: 21px;
                            line-height: 32px;
                            font-weight: 700;

                            color: ${variable.color.secondary};

                            margin-top: 10px;
                            margin-bottom: 22px;

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
                        &__methodTitle {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            position: relative;
                            padding: 0 10px;
                            &:before {
                                content: "";
                                position: absolute;
                                left: 14%;
                                top: 60%;
                                transform: translateY(-50%);
                                width: 25%;
                                height: 1px;
                                border: 1px dashed ${variable.color.purple};
                            }
                            &:after {
                                content: "";
                                position: absolute;
                                right: 14%;
                                top: 60%;
                                transform: translateY(-50%);
                                width: 25%;
                                height: 1px;
                                border: 1px dashed #b8b7d0;
                            }
                            @media (max-width: 750px) {
                                &:before,
                                &:after {
                                    width: 22%;
                                }
                            }
                            @media (max-width: 600px) {
                                &:before,
                                &:after {
                                    width: 18%;
                                }
                            }
                            @media (max-width: 500px) {
                                &:before,
                                &:after {
                                    width: 10%;
                                }
                            }
                        }
                        &__buttonGroup {
                            display: flex;
                            justify-content: center;
                            margin-right: -15px;
                            .Button {
                                margin-right: 15px;
                            }
                        }
                        &__methodList {
                            display: flex;
                            justify-content: center;

                            margin: 17px -40px 30px 0;
                            &-item {
                                display: flex;
                                align-items: center;
                                flex-direction: column;

                                margin-right: 40px;

                                cursor: pointer;
                                &--img {
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    background-color: #fff;

                                    width: 110px;
                                    height: 60px;

                                    margin-bottom: 10px;
                                    border-radius: 15px;
                                }
                                &.selected {
                                    span {
                                        background-color: ${variable.color.blue};
                                        transition: 0.4 ease-out;
                                    }
                                }
                                &:hover {
                                    span {
                                        background-color: ${variable.color.blue};
                                        transition: 0.4 ease-out;
                                    }
                                }
                            }
                            span {
                                width: 12px;
                                height: 12px;

                                border-radius: 50%;
                                background-color: #b8b7d0;
                                transition: 0.4 ease-out;
                            }
                            @media (max-width: 500px) {
                                margin-right: -15px;
                                &-item {
                                    margin-right: 15px;
                                }
                            }
                            @media (max-width: 380px) {
                                flex-direction: column;
                                margin-right: 0;
                                &-item {
                                    margin-right: 0;
                                    margin-bottom: 20px;
                                    &--img {
                                        width: 80%;
                                    }
                                }
                            }
                        }
                        @media (max-width: 820px) {
                            &__ticket {
                                flex-direction: column;
                                .Ticket {
                                    margin-bottom: 30px;
                                    width: 50vw;
                                }
                            }
                        }
                        @media (max-width: 500px) {
                            &__ticket {
                                flex-direction: column;
                                .Ticket {
                                    width: 70vw;
                                }
                            }
                        }
                    }
                }
            `}</style>
        </>
    );
}
