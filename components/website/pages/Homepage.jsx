import TextTitle from "@/website/common/TextTitle";
import AboutUs from "@/website/section/AboutUs";
import FAQ from "@/website/section/FAQ";
import HeroBanner from "@/website/section/HeroBanner/index";
import Organizational from "@/website/section/Organizational";
import OurTeam from "@/website/section/OurTeam";
import ShowList from "@/website/section/ShowList";
import Upcoming from "@/website/section/UpComing/index";
import WhatNew from "@/website/section/WhatNew";
import React from "react";

const Homepage = (props) => {
    return (
        <>
            <HeroBanner searchBar={true} />
            <Upcoming />
            <ShowList />
            <FAQ />
            <Organizational />
            <AboutUs />
            <OurTeam />
            <WhatNew headline={<TextTitle small_text="what news?" big_text="News and promotions" textAlign="center"/>} />
            <style jsx global>{`
                .Upcoming,
                .FAQ {
                    margin-bottom: 50px;
                }
                .PreviousShow,
                .AboutUs,
                .OurTeam {
                    margin-bottom: 100px;
                }
                @media (max-width: 820px) {
                    .OurTeam {
                        margin-bottom: 140px;
                    }
                }
            `}</style>
        </>
    );
};

Homepage.propTypes = {};

export default Homepage;
