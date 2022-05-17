import "antd/dist/antd.min.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const GlobalStyle = () => (
    <style jsx global>{`
        /*
		font-family: 'Cabin', sans-serif;
		font-family: 'Lora', serif;
		font-family: 'Playfair Display', serif;
		*/

        @font-face {
            font-family: "ProximaNova";
            src: url("../public/fonts/ProximaNovaRegular.eot");
            src: url("../public/fonts/ProximaNovaRegular.eot") format("embedded-opentype"), url("../public/fonts/ProximaNovaRegular.woff2") format("woff2"),
                url("../public/fonts/ProximaNovaRegular.woff") format("woff"), url("../public/fonts/ProximaNovaRegular.ttf") format("truetype"),
                url("../public/fonts/ProximaNovaRegular.svg#ProximaNovaRegular") format("svg");
            font-style: normal;
            font-weight: normal;
        }
        @font-face {
            font-family: "fm-r";
            src: url("/fonts/SVN-GothamBook.woff2") format("woff2"), url("/fonts/SVN-GothamBook.woff") format("woff");
            font-weight: normal;
            font-style: normal;
            font-display: fallback;
        }

        @font-face {
            font-family: "fm-m";
            src: url("/fonts/SVN-Gotham.woff2") format("woff2"), url("/fonts/SVN-Gotham.woff") format("woff");
            font-weight: 500;
            font-style: normal;
            font-display: fallback;
        }

        @font-face {
            font-family: "fm-b";
            src: url("/fonts/SVN-GothamBold.woff2") format("woff2"), url("/fonts/SVN-GothamBold.woff") format("woff");
            font-weight: bold;
            font-style: normal;
            font-display: fallback;
        }
        @font-face {
            font-family: "fm-t";
            src: url("/fonts/SVN-GothamLight.woff2") format("woff2"), url("/fonts/SVN-GothamLight.woff") format("woff");
            font-weight: 300;
            font-style: normal;
            font-display: fallback;
        }

        html,
        body {
            padding: 0;
            margin: 0;
            font-family: "CerebriSans";
            line-height: 1.3;
            font-size: 14px;
            width: 100%;
            // max-width: {Variable.container.maxWidth};
        }
        main {
        }
        #__next {
            overflow-x: hidden;
        }

        * {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            -ms-box-sizing: border-box;
            box-sizing: border-box;
        }
        h1,
        h2,
        h3,
        h4,
        h5 {
            padding: 0;
            margin: 0;
            font-weight: normal;
        }

        p {
            padding: 0;
            margin: 0;
        }

        // ul,
        // li {
        // 	padding: 0;
        // 	margin: 0;
        // 	list-style-type: none;
        // 	padding-inline-start: 0px;
        // 	margin-block-start: 0;
        // 	margin-block-end: 0;
        // 	line-height: 1;
        // }

        ol li,
        ul li {
            line-height: 1.5em;
            list-style: none;
        }
        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
        }
        hr {
            border-top: 1px solid #dadada;
        }

        a,
        a:hover,
        a:active {
            text-decoration: none;
        }
        a {
            color: inherit;
            text-decoration: none;
            outline: 0;
        }

        img {
            max-width: 100%;
            display: block;
        }

        select {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            border: 0;
            background: none;
        }

        main {
            overflow-x: hidden;
        }

        pre {
            margin-bottom: 0;
        }
        code.hljs {
            padding: 0.8rem;
        }

        .red-circle {
            background-color: red;
            border-radius: 50%;
            width: 80px;
            height: 80px;
        }
    `}</style>
);

export default GlobalStyle;
