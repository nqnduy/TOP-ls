import AboutUs from "@/components/website/section/AboutUs";
import FAQ from "@/components/website/section/FAQ";
import HeroBanner from "@/components/website/section/HeroBanner/index";
import Organizational from "@/components/website/section/Organizational";
import OurTeam from "@/components/website/section/OurTeam";
import ShowList from "@/components/website/section/ShowList";
import Upcoming from "@/components/website/section/UpComing/index";
import WhatNew from "@/components/website/section/WhatNew";
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
            <WhatNew />
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
