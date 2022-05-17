import ImageWrap from "@/website/common/ImageWrap";
import React from "react";

export default function TestimonialCard() {
    return (
        <>
            <div className="TestimonialCard">
                <div>
                    <p className="TestimonialCard__content txMain fz-16 main">
                        Lorem ipsum dolor sit amet, consecteturs adipiscing elit. Donec molestie porttitored lorem nec feugiat. Nunc vel felis ornare est
                        laoreet finibus. Proin pretium eleifend quit lorem amet sit tristique.
                    </p>
                    <div className="TestimonialCard__info flexSB">
                        <div className="flexSB" style={{ gap: 20 }}>
                            <ImageWrap src="/images/avt1.png" gif="/images/gif/50x50.gif" bora={"50%"} />
                            <div className="TestimonialCard__info-text">
                                <p className="txMain bold fz-16 main">Anthony Nguyen</p>
                                <p className="txMain normal fz-12 main upc">Customer of Workshop</p>
                            </div>
                        </div>
                        <img src="/images/icons/comment.svg" />
                    </div>
                </div>
            </div>
            <style jsx>{`
                .TestimonialCard {
                    background-color: #fff;
                    border-radius: 15px;
                    padding: 22px 30px;

                    &__content {
                        line-height: 30px;
                        padding-bottom: 22px;
                        border-bottom: 1px solid rgba(6, 0, 112, 0.1);
                    }
                }
            `}</style>
        </>
    );
}
