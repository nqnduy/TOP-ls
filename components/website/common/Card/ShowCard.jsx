import Button from "@/website/common/Button/ButtonMain";
import ImageWrap from "@/website/common/ImageWrap";
import Link from "next/link";

function ShowCard({ time, location, image, price, title, ticket }) {
    return (
        <>
            <Link href="/upcoming-shows/123">
                <a>
                    <div className="showCard">
                        <div>
                            <ImageWrap src={image} gif="/images/gif/343x270.gif" bora={"15px"} />
                        </div>
                        <div className="showCard__bottom">
                            <div className="showCard__bottom-timeLocation txMain fz-12 purple upc normal">{`${time} • ${location}`}</div>
                            <div className="txMain fz-18 overText2 showCard__title">{title}</div>
                            <pre className="showCard__price txMain normal pink upc">
                                Start at <strong style={{ fontFamily: "fm-b" }}>{price}</strong> •{" "}
                                <p className="txMain normal upc blue">{`${ticket} TICKETS LEFT`}</p>
                            </pre>
                            <Button width="fullWidth">Get ticket now</Button>
                        </div>
                    </div>
                </a>
            </Link>
            <style jsx>{`
                .showCard {
                    cursor: pointer;
                    &__bottom {
                        color: "#fff";
                        padding: 20px;
                        border-bottom-left-radius: 15px;
                        border-bottom-right-radius: 15px;
                        background-color: rgba(255, 255, 255, 0.05);
                        &-timeLocation {
                            height: 3.5em;
                            margin-bottom: 5px;
                        }
                    }
                    &__title {
                        margin-bottom: 5px;
                        height: 3.4em;
                    }
                    &__price {
                        display: flex;
                        align-items: center;
                        margin-bottom: 12px;
                    }
                }
                @media (max-width: 630px) {
                    .ShowCard {
                        .fz-18 {
                            --fzr18: 18px;
                            --lhr18: 26px;
                        }
                    }
                }
            `}</style>
        </>
    );
}

export default ShowCard;
