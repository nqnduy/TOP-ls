import Button from "@/website/common/Button/ButtonMain";
import TextTitle from "@/website/common/TextTitle";
import Ticket from "@/website/section/UpComing/Detail/Ticket";
import Image from "next/image";
import React, { useState } from "react";
export default function PaymentPage() {
    const [selectMethod, setSelectMethod] = useState();
    const handleSelectMethod = (i) => (ev) => {
        ev.preventDefault();
        setSelectMethod(i);
    };
    return (
        <>
            <div className="Payment flexCOL flexAC">
                <TextTitle small_text={"get ticket"} big_text={"Payment information"} />
                <p className="txMain normal fz-16">Confirm information below to final step</p>
                <div className="Payment__ticket flexSB">
                    <Ticket title="vé thông" unit="VND" price="1124000" ticket={49} payment={true} color="pink">
                        <p>Coupon đồ ăn & thức uống</p>
                        <p>Combo quà Xin Chào Goods</p>
                    </Ticket>
                    <Ticket title="vé hoa" unit="VND" price="854000" ticket={0} payment={true}>
                        <p>Coupon đồ ăn & thức uống</p>
                        <p>Túi vải</p>
                    </Ticket>
                    <Ticket title="vé đồi" unit="VND" price="495000" ticket={7} payment={true} color="blue">
                        <p>Coupon đồ uống</p>
                    </Ticket>
                </div>
                <div className="txMain purple bold upc fz-16">Total price</div>
                <div className="Payment__totalPrice txMain pink bold fz-21">$202.45/ 10 ticket ( 5 economy + 5 VIP )</div>
                <div className="Payment__methodTitle txMain purple bold upc fz-16">Payment method</div>
                <div className="Payment__methodList">
                    <div className={`Payment__methodList-item ${selectMethod === "remittance" ? "selected" : ""}`} onClick={handleSelectMethod("remittance")}>
                        <div className="Payment__methodList-item--img">
                            <Image src="/images/icons/remittance.svg" width={68} height={46} alt="" />
                        </div>
                        <div className="Payment__methodList-select"></div>
                    </div>

                    <div className={`Payment__methodList-item ${selectMethod === "paypal" ? "selected" : ""}`} onClick={handleSelectMethod("paypal")}>
                        <div className="Payment__methodList-item--img">
                            <Image src="/images/icons/paypal.svg" width={84} height={22} alt="" />
                        </div>
                        <div className="Payment__methodList-select"></div>
                    </div>

                    <div className={`Payment__methodList-item ${selectMethod === "momo" ? "selected" : ""}`} onClick={handleSelectMethod("momo")}>
                        <div className="Payment__methodList-item--img">
                            <Image src="/images/icons/momo.svg" width={28} height={27} alt="" />
                        </div>
                        <div className="Payment__methodList-select"></div>
                    </div>
                </div>
                <div className="flexAC" style={{ gap: 30 }}>
                    <Button color="primary">Back</Button>
                    <Button>Next step</Button>
                </div>
            </div>
            <style jsx global>{`
                .Payment {
                    width: 100%;
                    text-align: center;
                    > p {
                        color: #8492a6;
                    }
                    &__ticket {
                        width: 100%;
                        margin: 35px 0;
                        .Ticket {
                            width: calc((100% / 3) - (40px / 3));
                        }
                    }
                    &__totalPrice {
                        margin-top: 10px;
                        margin-bottom: 22px;
                    }
                    &__methodTitle {
                        display: flex;
                        position: relative;
                        padding-inline: 10px;
                        &:before {
                            content: "";
                            position: absolute;
                            left: -140%;
                            top: 60%;
                            transform: translateY(-50%);
                            width: 130%;
                            height: 1px;
                            border: 1px dashed #b8b7d0;
                        }
                        &:after {
                            content: "";
                            position: absolute;
                            right: -140%;
                            top: 60%;
                            transform: translateY(-50%);
                            width: 130%;
                            height: 1px;
                            border: 1px dashed #b8b7d0;
                        }
                    }
                    &__methodList {
                        display: flex;
                        gap: 40px;
                        margin-top: 17px;
                        margin-bottom: 30px;
                        &-item {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            gap: 10px;
                            cursor: pointer;
                            &--img {
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                background-color: #fff;
                                width: 110px;
                                height: 60px;
                                border-radius: 15px;
                            }
                            &.selected {
                                .Payment__methodList-select {
                                    background-color: #20ade4;
                                    transition: 0.4 ease-out;
                                }
                            }
                            &:hover {
                                .Payment__methodList-select {
                                    background-color: #20ade4;
                                    transition: 0.4 ease-out;
                                }
                            }
                        }
                        &-select {
                            width: 12px;
                            height: 12px;
                            border-radius: 50%;
                            background-color: #b8b7d0;
                            transition: 0.4 ease-out;
                        }
                    }
                }
            `}</style>
        </>
    );
}
