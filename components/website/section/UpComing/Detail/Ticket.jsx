import React, { useState } from "react";
import { variable } from "styles/variable";
export default function Ticket({ data, children, payment = false }) {
    const { ticket, title, price, unit = "$", color } = data;
    const [ticketBuy, setTicketBuy] = useState(0);
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
    const soldOut = () => {
        if (!ticket || ticket === 0) {
            return true;
        }
        return false;
    };
    return (
        <>
            <div className={`Ticket ${soldOut() ? "soldOut" : ""} noselect`}>
                <p className="Ticket__title">{title}</p>
                <p className="Ticket__price">
                    {`${unit} ${price ? price : ""}`}
                    <span>/ticket</span>
                </p>
                <div className="Ticket__line"></div>
                <div className="Ticket__gift content">{children}</div>
                {payment && (
                    <div className="Ticket__quantity">
                        {/* Note: Decrease */}
                        <div className="Ticket__quantity-btn" onClick={ticketBuy > 0 ? handleDecrease : disableChange}>
                            <div>-</div>
                        </div>

                        {/* Note: Ticket */}
                        <div className="Ticket__quantity-btn value">
                            <div>{ticketBuy < 10 ? `0${ticketBuy}` : ticketBuy}</div>
                        </div>

                        {/* Note: Increase */}
                        <div className="Ticket__quantity-btn" onClick={ticketBuy < ticket ? handleIncrease : disableChange}>
                            <div>+</div>
                        </div>
                    </div>
                )}

                {/* TODO: SOLD OUT */}
                {soldOut() ? <p className="Ticket__value soldOut">sold out tickets</p> : <p className="Ticket__value">{`${_ticket} tickets left`}</p>}

                {/* TODO: TOTAL PRICE */}
                {payment && (
                    <div className={`Ticket__total ${soldOut() ? "" : color}`}>
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
                        font-family: fm-m;
                        font-weight: 700;
                        color: ${variable.color.primary};
                        text-transform: uppercase;

                        border-radius: 50px;
                        padding: 6px 16px;
                        margin-bottom: 17px;
                        background-color: rgba(6, 0, 112, 0.07);
                    }
                    &__price {
                        font-family: fm-m;
                        font-size: 21px;
                        line-height: 32px;
                        font-weight: 700;

                        margin-bottom: 17px;
                        color: ${variable.color.secondary};

                        /*  Responsive   */
                        @media (max-width: 1220px) {
                            font-size: 19px;
                            line-height: 28px;
                        }
                        @media (max-width: 1024px) {
                            font-size: 17px;
                            line-height: 26px;
                        }
                        @media (max-width: 820px) {
                            font-size: 21px;
                            line-height: 32px;
                        }
                        @media (max-width: 350px) {
                            font-size: 17px;
                            line-height: 26px;
                        }
                    }
                    &__gift {
                        height: calc(5rem);
                        overflow: hidden;
                        color: ${variable.color.primary};
                        margin-bottom: 23px;
                        padding: 0 7px;
                    }
                    &__quantity {
                        display: flex;
                        align-items: center;

                        gap: 8px;
                        margin-top: 20px;
                        cursor: pointer;
                        &-btn {
                            --value: 40px;

                            width: var(--value);
                            height: var(--value);
                            border: 1px solid #121212;
                            border-radius: 12px;
                            font-family: fm-t;
                            font-size: 21px;
                            line-height: 32px;
                            color: ${variable.color.purple};
                            transition: 0.3s ease-in-out;
                            transition-delay: 100ms;
                            div {
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                width: 100%;
                                height: 100%;
                                pointer-events: none;
                            }
                            &.value {
                                font-family: fm-m;
                                pointer-events: none;
                                width: calc(2 * var(--value));
                                color: ${variable.color.secondary};
                            }
                            &:hover {
                                color: #fff;
                                border: 1px solid ${variable.color.secondary};
                                background-color: ${variable.color.secondary};
                                transition: 0.3s ease-in-out;
                            }

                            /*  Responsive   */
                            @media (max-width: 1220px) {
                                font-size: 19px;
                                line-height: 28px;
                            }
                            @media (max-width: 1024px) {
                                font-size: 17px;
                                line-height: 26px;
                            }
                            @media (max-width: 820px) {
                                font-size: 21px;
                                line-height: 32px;
                            }
                            @media (max-width: 350px) {
                                font-size: 17px;
                                line-height: 26px;
                            }
                        }
                    }
                    &__value {
                        margin-top: 5px;
                        margin-bottom: 30px;
                        font-size: 12px;
                        font-family: fm-m;
                        text-transform: uppercase;
                        color: ${variable.color.blue};
                        &.soldOut {
                            color: ${variable.color.purple};
                        }
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
                    &.soldOut {
                        .value {
                            color: ${variable.color.purple};
                        }
                    }
                }
            `}</style>
        </>
    );
}
