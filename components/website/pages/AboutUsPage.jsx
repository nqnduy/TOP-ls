import AboutUs from "@/components/website/section/AboutUs";
import FAQ from "@/components/website/section/FAQ";
import Organizational from "@/components/website/section/Organizational";
import OurClient from "@/components/website/section/OurClient";
import OurTeam from "@/components/website/section/OurTeam/TypeCenter";
import React from "react";
export default function AboutUsPage() {
    return (
        <>
            <AboutUs />
            <OurTeam />
            <OurClient />
            <Organizational />
            <FAQ />
            <style jsx global>{`
                .AboutUs {
                    margin-top: 180px;
                }
                .OurTeam,
                .OurClient {
                    margin-top: 100px;
                }
                .FAQ {
                    margin: 100px 0;
                }
                @media (max-width: 1024px) {
                    .AboutUs {
                        margin-top: 120px;
                    }
                }
            `}</style>
        </>
    );
}
AboutUsPage.propTypes = {};
