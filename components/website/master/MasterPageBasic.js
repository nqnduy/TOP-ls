import { NextSeo } from "next-seo";
import dynamic from 'next/dynamic';
import Head from "next/head";
import { useRouter } from "next/router";
import { useNextResponsive } from "plugins/next-reponsive";
import { LightgalleryProvider } from "react-lightgallery";
import CONFIG from "web.config";
import Body from "../elements/Body";
import GtagScript from "../tracking/GtagScript";

const Providers = dynamic(() => import('components/website/contexts/Providers'));
const Header = dynamic(() => import('components/website/elements/Header'));
const Navigate = dynamic(() => import('components/website/elements/Navigate'));
const Footer = dynamic(() => import('components/website/elements/Footer'));
const GlobalStyle = dynamic(() => import('styles/global'));
const CommonStyle = dynamic(() => import('styles/common'));
const VariableStyle = dynamic(() => import('styles/variable'));
const MasterPageBasic = ({ pageName, children }) => {
	const router = useRouter();
    const { device, breakpoint, orientation } = useNextResponsive();

	return (
        <>
            <NextSeo nofollow={CONFIG.environment != "production"} noindex={CONFIG.environment != "production"} />
            <Head>
                <title>
                    {CONFIG.site.title} | {pageName || "Home"}
                </title>

                <meta name="description" content={CONFIG.site.description}></meta>

                <link rel="shortcut icon" href={`${CONFIG.getBasePath()}/favicon.ico`} />

                <meta property="og:title" content={CONFIG.site.title} />
                <meta property="og:description" content={CONFIG.site.description} />
                <meta property="og:url" content={CONFIG.getBasePath() + router.asPath} />
                <meta property="og:image" content={`${CONFIG.getBasePath()}/share.png`} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="fb:app_id" content={CONFIG.NEXT_PUBLIC_FB_APP_ID} />

                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Do not add stylesheets using next/head
				Use Document instead. See more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component*/}
            </Head>

            {/* TRACKING SCRIPTS - CHANGE THE ID TO THE CORRECT ONE*/}
            <GtagScript id="G-EE9VED6EC3" />

            {/* - STYLE OF THE WEBSITE */}
            <GlobalStyle />
            <CommonStyle />
            <VariableStyle />
            {/* - ADD MORE PROVIDER INSIDE THIS COMPONENT */}
            <Providers>
                <Body>
                    <Header />
                    <Navigate />
                    <LightgalleryProvider lightgallerySettings={{ videoMaxWidth: "80vw", thumbnail: false}}>
                        <main className={[device, orientation, breakpoint].join(" ")}>{children}</main>
                    </LightgalleryProvider>
                    <Footer />
                </Body>
            </Providers>
        </>
    );
};

export default MasterPageBasic;
