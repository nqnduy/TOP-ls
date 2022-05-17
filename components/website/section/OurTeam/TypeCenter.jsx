import ArrowNext from "@/components/website/common/ArrowNext";
import ArrowPrev from "@/components/website/common/ArrowPrev";
import MemberCard from "@/components/website/common/Card/MemberCard";
import TextTitle from "@/components/website/common/TextTitle";
import Slider from "react-slick";
export default function TypeCenter() {
    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        // pauseOnHover: true,
        initialSlide: 2,
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />,
    };
    return (
        <>
            <div className="OurTeam">
                <div className="textWrap flexAC flexCOL">
                    <TextTitle small_text={"Our teams"} big_text={"Many famous celebrities"} />
                    <p className="txMain purple normal" style={{ marginBottom: 60, textAlign: "center", width: "40%" }}>
                        Nifty team is a diverse network of consultants and industry professionals with a global mindset & a collaborative culture. We work to
                        understand your issues
                    </p>
                </div>
                <div className="PLMain">
                    <Slider {...settings}>
                        <MemberCard image="/images/about2.png" name="Anthony Nguyen" role="Designer" />
                        <MemberCard image="/images/about1.png" name="Anthony Nguyen" role="Designer" />
                        <MemberCard image="/images/about3.png" name="Anthony Nguyen" role="Designer" />
                        <MemberCard image="/images/about2.png" name="Anthony Nguyen" role="Designer" />
                        <MemberCard image="/images/about1.png" name="Anthony Nguyen" role="Designer" />
                        <MemberCard image="/images/about3.png" name="Anthony Nguyen" role="Designer" />
                        <MemberCard image="/images/about2.png" name="Anthony Nguyen" role="Designer" />
                        <MemberCard image="/images/about1.png" name="Anthony Nguyen" role="Designer" />
                        <MemberCard image="/images/about3.png" name="Anthony Nguyen" role="Designer" />
                    </Slider>
                </div>
            </div>
            <style jsx global>{`
                .OurTeam {
                    .textWrap {
                        width: 100%;
                        text-align: center;
                    }
                    .MemberCard {
                        margin-right: 20px;
                        transition: ease-out 0.4s;
                    }
                    .slick-list {
                        padding: 0 !important;
                    }

                    .slick-slide {
                        &:nth-child(3n + 2) {
                            margin-top: 100px;
                            opacity: 0.7;
                        }
                        &:nth-child(3n + 3) {
                            margin-top: 50px;
                            opacity: 0.7;
                        }
                        &:hover {
                            cursor: pointer;
                            opacity: 1;
                            transition: ease-out 0.4s;
                        }
                    }
                }
            `}</style>
        </>
    );
}
