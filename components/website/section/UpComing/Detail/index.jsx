import SocialGroup from "@/website/common/SocialGroup";
import BrandGroup from "@/website/section/OurClient/BrandGroup";
import Upcoming from "@/website/section/UpComing";
import GetTicket from "@/website/section/UpComing/Detail/GetTicket";
import Ticket from "@/website/section/UpComing/Detail/Ticket";
import React from "react";
import renderHTML from "react-render-html";
import { variable } from 'styles/variable';

export default function UpComingDetail() {
    const tickets = [
        {
            title: "Economy ticket",
            price: 0.99,
            ticket: 49,
            content: "<p>Entrance card</p><p>Drinking water</p><p>-</p>",
        },
        {
            title: "Standard ticket",
            price: 0.99,
            ticket: 0,
            content: "<p>Entrance card Silk Bag</p><p>Drinks and fresh fruit</p><p>Silk Bag</p>",
        },
        {
            title: "Vip ticket",
            price: 39.5,
            ticket: 7,
            content: " <p>Entrance card Silk Bag</p><p>Drinks and fresh fruit</p><p>Combo Gift</p>",
        },
    ];
    return (
        <div className="UpComingShowDetail">
            <div className="container" style={{ marginBottom: 80 }}>
                <div className="UpComingShowDetail__content">
                    <div className="w50" style={{ paddingBottom: 40, marginBottom: 20, borderBottom: "1px solid rgba(255, 255, 255, 0.07)" }}>
                        <h2 className="headline" style={{ marginBottom: 40 }}>
                            France Rock Music Conference March 2022
                        </h2>
                        <div className="content">
                            <p className="link">About this event</p>
                            <br />
                            Rock en Seine is one of France's most famous music festivals, held over three days in late summer each year in the country's capital
                            Paris. <br />
                            <br />
                            Taking over the historic Domaine National de Saint-Cloud’s beautiful parkland, Rock en Seine brings together a lineup of
                            international stars and newcomers from the worlds of indie, alternative, pop, hip-hop, and electronic music. <br />
                            <br /> For the eagerly anticipated next instalment – the first edition since the end of summer 2019 – Rock en Seine have pulled out
                            all the stops with the likes of Tame Impala, Nick Cave & The Bad Seeds, Jamie xx, Stromae, Kraftwerk, and FKJ among those giving a
                            sense of the festival's musical diversity that plays out within touching distance of Paris' thriving city centre. <br />
                            <br /> If you have any questions, please contact with us at help@topliveshow.com
                            <br />
                            <br />
                            <br />
                            <p className="link">Ticket price of the event</p>
                            <br />
                            Pellentesque massa erat adipiscing lorem molestie amet augue. Lorem ipsum amet vitae ipsum at a sagittis cras arcu interdum
                        </div>
                        <div className="TicketList">
                            {tickets.map((ticket, index) => (
                                <Ticket data={ticket} key={index}>
                                    {renderHTML(ticket.content)}
                                </Ticket>
                            ))}
                        </div>
                        <div className="content">
                            <p className="headline">Sponsors of event</p>
                            <br />
                            <br />
                            <BrandGroup column={4} />
                            <br />
                            <br />
                            <p className="headline">Very important to note</p>
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisl diam phasellus lacus id orci viverra duis in. Suspendisse
                            tellus imperdiet felis, tempor tristique duis. Pellentesque massa erat adipiscing lorem molestie amet augue. Vitae ipsum at a
                            sagittis cras arcu interdum. Quam etiam.
                            <br />
                            <br />
                            Magna proin ultrices sagittis, nam in dignissim proin et, eu. Lacus, tristique metus ut amet morbi eu placerat dui, orci.
                            <br /> <br />
                            <ul className="list-style-auto">
                                <li>Dolor, nulla pellentesque felis ultricies.</li>
                                <li>Amet, massa elementum ornare gravida nunc nec.</li>
                                <li>Adipiscing ipsum sit fermentum sapien at dictumst.</li>
                                <li>Nibh ut nunc, est arcu mollis blandit egestas eget ante.</li>
                                <li>Venenatis ultrices integer risus quis aliquam sagittis consectetur.</li>
                            </ul>
                            <br />
                            <br />
                            Tellus commodo mauris sem id vulputate eget pellentesque a. Montes, bibendum rhoncus dignissim amet, orci. Vitae cras proin lacinia
                            iaculis turpis sed dolor ac lacus. Amet, pellentesque diam leo aliquam a proin volutpat.
                        </div>
                    </div>
                    <div className="getTicket">
                        <GetTicket />
                    </div>
                </div>
                <div className="shareOn">
                    <p>Share on</p>
                    <SocialGroup />
                </div>
            </div>
            <div className="container">
                <p className="sliderTitle">Looking for an upcoming show? You can explore by categories, location, and date start... Ready?</p>
            </div>
            <Upcoming haveTitle={false} pTop={50} />

            <style jsx global>{`
                .UpComingShowDetail {
                    &__content {
                        display: flex;
                        justify-content: space-between;
                        gap: 85px;
                        .link {
                            font-family: fm-m;
                            font-weight: 700;
                            color: ${variable.color.blue};
                        }
                        .content {
                            .headline {
                                font-size: 21px;
                                line-height: 32px;
                                color: ${variable.color.blue};

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
                        }
                        .TicketList {
                            display: flex;
                            justify-content: space-between;
                            margin: 30px 0;
                        }
                        ul {
                            li {
                                margin-left: 1em;
                            }
                        }
                    }
                    .getTicket {
                        width: 30%;
                    }
                    .sliderTitle {
                        font-family: fm-m;
                        font-size: 21px;
                        font-weight: 700;

                        line-height: 32px;
                        color: #fff;

                        padding-right: 100px;

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
                }
                .Ticket {
                    width: calc((100% / 3) - (40px / 3));
                }
                .slick-arrow {
                    top: -75px;
                }
                /*  Responsive   */
                @media (max-width: 1350px) {
                    .UpComingShowDetail {
                        .getTicket {
                            width: 33%;
                        }
                    }
                }
                @media (max-width: 1290px) {
                    .UpComingShowDetail {
                        &__content {
                            .TicketList {
                                width: 100%;
                                flex-direction: column;
                                gap: 20px;
                                .Ticket {
                                    margin: 0 auto;
                                    width: 80%;
                                }
                            }
                        }
                    }
                }
                @media (max-width: 1250px) {
                    .UpComingShowDetail {
                        .getTicket {
                            width: 36%;
                        }
                    }
                }
                @media (max-width: 1150px) {
                    .UpComingShowDetail {
                        .getTicket {
                            width: 39%;
                        }
                    }
                }
                @media (max-width: 1024px) {
                    .UpComingShowDetail {
                        &__content {
                            gap: 20px;
                            flex-direction: column;
                            margin-bottom: 50px;
                            .w50,
                            .getTicket {
                                width: 100%;
                                .GetTicket {
                                    &__content {
                                        width: 100%;
                                    }
                                }
                            }
                            .TicketList {
                                width: 100%;
                                gap: 20px;
                                flex-direction: row;
                                .Ticket {
                                    width: calc((100% / 3) - (40px / 3));
                                }
                            }
                        }
                    }
                }
                @media (max-width: 650px) {
                    .UpComingShowDetail {
                        &__content {
                            flex-direction: column;
                            .w50,
                            .getTicket {
                                width: 100%;
                            }
                            .TicketList {
                                flex-direction: column;
                                gap: 20px;
                                .Ticket {
                                    margin: 0 auto;
                                    width: 70%;
                                }
                            }
                        }
                    }
                }
                @media (max-width: 630px) {
                    .UpComingShowDetail {
                        .sliderTitle {
                            text-align: right;
                            font-size: 21px;
                            line-height: 30px;
                            margin-bottom: 75px;
                            padding-right: 0;
                        }
                        .Upcoming {
                            padding-top: 10px;
                        }
                        .slick-arrow {
                            top: -50px;
                        }
                    }
                }
                @media (max-width: 500px) {
                    .UpComingShowDetail {
                        .sliderTitle {
                            text-align: center;
                            font-size: 15px;
                            line-height: 28px;
                            margin-bottom: 30px;
                        }
                    }
                }
                @media (max-width: 400px) {
                    .UpComingShowDetail {
                        &__content {
                            .TicketList {
                                .Ticket {
                                    width: 90%;
                                }
                            }
                        }
                    }
                }
            `}</style>
        </div>
    );
}
