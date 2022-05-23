import ImageWrap from "@/common/ImageWrap";
import React from "react";
export default function MyTicketCard({ image, title, time, location, children, gap = 20 }) {
    return (
        <>
            <div className="MyTicketCard">
                <div className="MyTicketCard__wrap flex">
                    <div className="MyTicketCard__wrap-img">
                        <ImageWrap src={image} gif="/images/gif/190x140.gif" bora={"15px"} />
                    </div>
                    <div className="MyTicketCard__wrap-text flexCOL" style={{ justifyContent: "space-between" }}>
                        <p className="MyTicketCard__wrap-text-title txMain bold fz-18 overText2">{title}</p>
                        <p className="txMain fz-12 purple upc normal" style={{ marginBottom: 8 }}>
                            {`${time} • ${location}`}
                        </p>
                        {children}
                    </div>
                </div>
            </div>
            <style jsx>{`
                .MyTicketCard {
                    padding: 10px;
                    border-radius: 15px;
                    background-color: rgba(255, 255, 255, 0.03);
                    cursor: pointer;

                    &__wrap {
                        gap: ${gap}px;
                        &-img {
                            height: 102%;
                        }
                        &-text {
                            width: 80%;
                            &-title {
                                height: calc(2.5em + 5px);
                                width: 95%;
                            }
                        }
                    }
                    @media (max-width: 500px) {
                        &__wrap {
                            flex-direction: column;
                            &-text {
                                width: 100%;
                                &-title {
                                    margin-bottom: 10px;
                                }
                            }
                        }
                    }
                }
            `}</style>
        </>
    );
}
