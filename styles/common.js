
import { variable } from "./variable";
const CommonStyle = () => {
    return (
        <>
            <style jsx global>{`

                .hide {
                    opacity: 0;
                    pointer-events: none;
                }
                .hidedn {
                    display: none;
                }
                .fade {
                    display: none;
                }
                .show {
                    display: block;
                }
                .container {
                    width: 100%;
                    max-width: 2500px;
                    padding-right: var(--pdContainer);
                    padding-left: var(--pdContainer);
                    margin-right: auto;
                    margin-left: auto;
                    position: relative;
                    // @media (max-width: $md-max) {
                    //     max-width: 1230px;
                    //     padding-right: 15px;
                    //     padding-left: 15px;
                    // }
                }

                .noselect {
                    -webkit-touch-callout: none; /* iOS Safari */
                    -webkit-user-select: none; /* Safari */
                    -khtml-user-select: none; /* Konqueror HTML */
                    -moz-user-select: none; /* Old versions of Firefox */
                    -ms-user-select: none; /* Internet Explorer/Edge */
                    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
                }
                .txMain {
                    color: #fff;
                    font-weight: 500;
                    font-size: var(--fzrMain);
                    font-family: fm-m;
                    &.fz-36 {
                        font-size: var(--fzr36);
                        line-height: var(--lhr36);
                    }
                    &.fz-30 {
                        font-size: var(--fzr30);
                        line-height: var(--lhr30);
                    }
                    &.fz-28 {
                        font-size: var(--fzr28);
                        line-height: var(--lhr28);
                    }
                    &.fz-21 {
                        font-size: var(--fzr21);
                    }
                    &.fz-18 {
                        font-size: var(--fzr18);
                        line-height: var(--lhr18);
                    }
                    &.fz-16 {
                        font-size: var(--fzr16);
                        line-height: var(--lhr16);
                    }
                    &.fz-12 {
                        font-size: var(--fzr12);
                    }
                    &.bold {
                        font-weight: fm-b;
                        font-weight: 700;
                    }
                    &.normal {
                        font-family: fm-r;
                        font-weight: 400;
                    }
                    &.thin {
                        font-family: fm-t;
                        font-weight: 300;
                    }

                    &.lspacing-1 {
                        letter-spacing: 0.1em;
                    }
                    &.overText2 {
                        display: -webkit-inline-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                    &.upc {
                        text-transform: uppercase;
                    }
                    &.purple {
                        color: ${variable.color.purple};
                    }
                    &.pink {
                        color: ${variable.color.secondary};
                        cursor: pointer;
                    }
                    &.blue {
                        color: ${variable.color.blue};
                        cursor: pointer;
                    }
                    &.main {
                        color: ${variable.color.primary};
                        cursor: pointer;
                    }
                    &.textALC {
                        text-align: center;
                    }
                }

                .flex {
                    display: flex;

                    &.jc-sb {
                        justify-content: space-between;
                    }
                }
                .flexAC {
                    display: flex;
                    align-items: center;
                }
                .flexCT {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .flexSB {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .flexCOL {
                    display: flex;
                    flex-direction: column;
                }
                .PLMain {
                    padding-left: var(--pdContainer);
                }
                .PRMain {
                    padding-right: var(--pdContainer);
                }
                .PreviousShowList {
                    .swiper-slide {
                        width: 20%;
                        transition: 0.4s;
                        &.swiper-slide-active {
                            width: 48% !important;
                            transition: 0.4s;
                        }
                    }
                }
                .hoverText {
                    position: relative;
                    width: fit-content;
                    padding-bottom: 7px;
                    cursor: pointer;
                    &:after {
                        content: "";
                        position: absolute;
                        width: 0;
                        height: 2px;
                        bottom: 0;
                        left: 0;
                        background-color: #fff;
                        transition: 0.3s ease-out;
                    }
                    &-small {
                        padding-bottom: 3px;
                        &:after {
                            height: 1px;
                        }
                    }
                    &-pink {
                        &:hover {
                            color: ${variable.color.secondary};
                            &:after {
                                background-color: ${variable.color.secondary};
                            }
                        }
                    }
                    &-blue {
                        &:hover {
                            color: ${variable.color.blue};
                            &:after {
                                background-color: ${variable.color.blue};
                            }
                        }
                    }
                    &:hover {
                        &:after {
                            width: 100%;
                            transition: 0.3s ease-out;
                        }
                    }
                }

                .slick-arrow {
                    top: -90px;
                    z-index: 90;
                    &.slick-next,
                    &.slick-prev {
                        cursor: pointer;
                        width: var(--arrowSize);
                        background-color: rgba(255, 255, 255, 0.1);
                        border-radius: 50%;
                        height: var(--arrowSize);
                        transition: 0.4s ease;
                        img {
                            position: absolute;
                            min-width: 100%;
                            min-height: 100%;
                            top: 50%;
                            left: 50%;
                            filter: brightness(0.5);
                            transform: translate(-50%, -50%);
                            transition: 0.4s ease;
                        }
                        &:hover {
                            transition: 0.4s ease;
                            background-color: rgba(255, 255, 255, 0.3);
                            img {
                                filter: initial;
                                transition: 0.3s;
                            }
                        }
                    }
                    &.slick-prev:before,
                    &.slick-next:before {
                        display: none;
                    }
                    --arrowPosition: calc((var(--pdContainer)) - (var(--cardRange)));
                    &.slick-next {
                        right: var(--arrowPosition);
                    }
                    &.slick-prev {
                        right: calc((var(--arrowPosition)) + (var(--arrowRange)));
                        left: initial;
                    }
                }

                .w20 {
                    width: 20%;
                }
                .w30 {
                    width: 30%;
                }
                .w35 {
                    width: 35%;
                }
                .w40 {
                    width: 40%;
                }
                .w45 {
                    width: 45%;
                }
                .w50 {
                    width: 50%;
                }
                .w55 {
                    width: 55%;
                }
                .w60 {
                    width: 60%;
                }
                .w70 {
                    width: 70%;
                }
                .w75 {
                    width: 75%;
                }
                .w80 {
                    width: 80%;
                }
                .w90 {
                    width: 90%;
                }
                .w100 {
                    width: 100%;
                }
                .list-style-auto {
                    margin: 0;
                    list-style-type: initial;
                    li {
                        list-style-type: initial;
                    }
                }
                .cur-pointer {
                    cursor: pointer;
                }
                .layer {
                    position: absolute;
                    bottom: 0;
                    z-index: 2;
                    left: 0;
                    width: 100%;
                    height: 30%;
                    background: linear-gradient(180deg, rgba(17, 12, 99, 0) 0%, rgba(17, 12, 99, 0.5) 58.85%, rgba(17, 12, 99, 0.85) 100%);
                    border-radius: 15px;
                }
                .textWrapLayer {
                    position: absolute;
                    z-index: 3;
                    width: 100%;
                    padding: 0 20px;
                    color: #fff;
                    bottom: 18px;
                }

                .inputCommon {
                    display: block;
                    width: 100%;
                    height: 50px;
                    border-radius: 15px;
                    border: none;
                    background-color: #faf8f8;
                    padding-block: 12.5px;
                    font-family: fm-r;
                    font-size: 16px;
                    padding-inline: 20px;
                    outline: none;
                    transition: ease-in 0.3s;
                    &:placeholder-shown {
                        padding-left: 20px;
                    }
                    &:focus {
                        border: 0.5px solid ${variable.color.secondary};
                        &::placeholder {
                            opacity: 0;
                            transition: ease-in 0.3s;
                        }
                    }
                }
                .textAreaCommon {
                    width: 100%;
                    // height: 210px;
                    outline: none;
                    border-radius: 15px;
                    border: 1px solid #6b656530;
                    font-family: fm-r;
                    font-size: 16px;
                    padding-inline: 20px;
                    padding-block: 15px;
                    resize: none;
                    &:placeholder-shown {
                        padding-left: 20px;
                        transition: ease-in 0.3s;
                    }
                    &:focus-within {
                        border: 1px solid ${variable.color.secondary};
                        transition: ease-in 0.3s;
                        &::placeholder {
                            opacity: 0;
                            transition: ease-in 0.3s;
                        }
                    }
                }
                .selectCommon {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative;

                    &__selectBy {
                        z-index: 10;
                        width: 100%;
                        input {
                            width: 100%;
                            cursor: pointer;
                        }
                    }
                    &__checkboxes {
                        display: flex;
                        position: absolute;
                        z-index: 100;
                        top: calc(100% + 1px);
                        flex-direction: column;
                        width: 95%;
                        border-radius: 5px;
                        &-option {
                            display: flex;
                            align-items: center;
                            height: 100%;
                            cursor: pointer;
                            background-color: white;
                            label {
                                display: flex;
                                align-items: center;
                                position: relative;
                                padding: 12px 0 12px 0;
                                cursor: pointer;
                                width: 100%;
                                height: 100%;
                                font-family: fm-r;
                                font-size: 15px;
                                transition: 0.1s ease-in;
                                input {
                                    margin-right: 10px;
                                    opacity: 0;
                                    cursor: pointer;
                                }
                            }
                            &:hover {
                                transition: 0.3s ease-out;
                                background-color: ${variable.color.secondary};
                                label {
                                    color: #fff;
                                    transition: 0.1s ease-in;
                                    font-family: fm-m;
                                }
                            }
                            &:last-child {
                                border-bottom-left-radius: 5px;
                                border-bottom-right-radius: 5px;
                            }
                        }
                    }
                }
            `}</style>
        </>
    );
};

export default CommonStyle;
