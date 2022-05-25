import React, { useState } from "react";
export default function Ticket({ ticket, title, price, children, unit = "$", payment = false, color }) {
    const [ticketBuy, setTicketBuy] = useState(0);
    // const [ticketPrice, setTicketPrice] = useState();
    const [_ticket, _setTicket] = useState(ticket);
    const ticketPrice = price * ticketBuy;
    const handleIncrease = () => {
        setTicketBuy(ticketBuy + 1);
        _setTicket(_ticket - 1);
    };
    const handleDecrease = () => {
        setTicketBuy(ticketBuy - 1);
        _setTicket(_ticket + 1);
    };
    const disableChange = () => {};
    return (
        <>
            <div className="Ticket noselect">
                <p className="Ticket__title txMain upc bold">{title}</p>
                <p className="Ticket__price txMain pink bold">
                    {`${unit} ${price ? price : ""}`}
                    <span className="txMain pink bold">/ticket</span>
                </p>
                <div className="Ticket__line"></div>
                <div className="Ticket__gift txMain normal fz-16 main">{children}</div>
                {payment && (
                    <div className="Ticket__quantity flexAC ">

                        {/* Note: Decrease */}
                        <div className="Ticket__quantity-btn txMain purple normal fz-21"
                            onClick={ticketBuy > 0 ? handleDecrease : disableChange}>
                            <div>-</div>
                        </div>

                        {/* Note: Ticket */}
                        <div className="Ticket__quantity-btn value txMain bold pink fz-21">
                            <div>{ticketBuy < 10 ? `0${ticketBuy}` : ticketBuy}</div>
                        </div>

                        {/* Note: Increase */}
                        <div className="Ticket__quantity-btn txMain purple normal fz-21"
                            onClick={ticketBuy < ticket ? handleIncrease : disableChange}>
                            <div>+</div>
                        </div>

                    </div>
                )}

                {/* TODO: SOLD OUT */}
                {!ticket || ticket === 0 ? (
                    <p className="Ticket__value txMain purple upc fz-12">sold out tickets</p>
                ) : (
                    <p className="Ticket__value txMain blue upc fz-12">{`${_ticket} tickets left`}</p>
                )}

                {/* TODO: TOTAL PRICE */}
                {payment && (
                    <div className={`Ticket__total ${!ticket || ticket === 0 ? "" : color}`}>
                        <p className="Ticket__total-price txMain bold fz-21">
                            {`${unit} ${price ? ticketPrice : ""}`}
                            <span className="txMain bold">/{ticketBuy} ticket</span>
                        </p>
                    </div>
                )}
            </div>
            <style jsx>{`
                .Ticket {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    background-color: #fff;
                    border-radius: 20px;
                    padding-top: 20px;
                    cursor: pointer;
                    &__title {
                        color: #060070;
                        background-color: rgba(6, 0, 112, 0.07);
                        padding: 6px 16px;
                        border-radius: 50px;
                        margin-bottom: 17px;
                    }
                    &__price {
                        font-size: 21px;
                        margin-bottom: 17px;
                    }
                    &__gift {
                        margin-bottom: 23px;
                        padding: 0 7px;
                        height: calc(5rem);
                        overflow: hidden;
                    }
                    &__quantity {
                        margin-top: 20px;
                        gap: 8px;

                        &-btn {
                            --value: 40px;

                            width: var(--value);
                            height: var(--value);
                            border: 1px solid #121212;
                            border-radius: 12px;
                            div {
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                width: 100%;
                                height: 100%;
                                pointer-events: none;
                            }
                            &.value {
                                width: calc(2 * var(--value));
                            }
                        }
                    }
                    &__value {
                        margin-top: 5px;
                        margin-bottom: 30px;
                    }
                    &__total {
                        width: 100%;
                        bottom: 0;
                        padding: 20px 0;
                        border-bottom-left-radius: 15px;
                        border-bottom-right-radius: 15px;
                        position: relative;
                        color: #fff;
                        &:before {
                            position: absolute;
                            content: "";
                            width: 100%;
                            height: 1px;
                            left: 0;
                            top: 0;
                            border: 1px dashed #b8b7d0;
                        }
                        &-price {
                            opacity: 0;
                            pointer-events: none;
                        }
                        &.pink,
                        &.blue {
                            &:before {
                                opacity: 0;
                            }
                            .Ticket__total-price {
                                opacity: 1;
                                pointer-events: auto;
                            }
                        }
                        &.pink {
                            background-color: #e71882;
                        }
                        &.blue {
                            background-color: #20ade4;
                        }
                    }
                    &__line {
                        width: 100%;
                        height: 1px;
                        border: 1px dashed #b8b7d0;
                        position: relative;
                        margin-bottom: 23px;
                        &:before {
                            position: absolute;
                            content: "";
                            width: 22px;
                            height: 22px;
                            background-color: #110c63;
                            border-radius: 50%;
                            left: -11px;
                            top: 50%;
                            transform: translateY(-50%);
                        }
                        &:after {
                            position: absolute;
                            content: "";
                            width: 22px;
                            height: 22px;
                            background-color: #110c63;
                            border-radius: 50%;
                            right: -11px;
                            top: 50%;
                            transform: translateY(-50%);
                        }
                    }
                }
            `}</style>
        </>
    );
}
