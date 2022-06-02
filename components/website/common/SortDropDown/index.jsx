import OptionSort from "@/common/SortDropDown/OptionSort";
import asset from "@/plugins/assets/asset";
import Image from "next/image";
import React, { useState } from "react";
import { variable } from "styles/variable";

export default function SortDropdown({ children, width = 110, show, onClick }) {
    const data = ["Liveshows", "Festival", "Workshops"];
    const [isShow, setIsShow] = useState(false);
    const [option, setOption] = useState(children);

    const handleOpen = (ev) => {
        if (show) {
            setOption(ev.target.value);
            setIsShow(false);
        }
    };
    console.log(show)
    return (
        <>
            <div className={`SortDropdown ${show ? "show" : ""}`} onClick={onClick}>
                <div className="typeSort noselect" onClick={() => setIsShow(!isShow)}>
                    <input value={option} readOnly />
                    <div className="arrow">
                        <Image src={asset("/images/icons/arrow-dropdown.svg")} alt="" width={10} height={5} />
                    </div>
                </div>
                <div className={`optionList ${!isShow ? "hidedn" : ""}`}>
                    {data.map((item, index) => (
                        <OptionSort key={index} value={item} onClick={handleOpen}>
                            {item}
                        </OptionSort>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .SortDropdown {
                    display: flex;
                    flex-direction: column;

                    position: relative;
                    margin-right: 45px;
                    cursor: pointer;
                    &.show {
                        .optionList {
                            display: block;
                        }
                    }
                    &:last-child {
                        margin-right: 0;
                    }
                }
                .typeSort {
                    display: flex;
                    color: ${variable.color.purple};
                    cursor: pointer;
                    input {
                        width: ${width}px !important;
                        cursor: pointer;
                        outline: none;
                        border: none;
                        background-color: transparent;
                        width: fit-content;
                    }
                    .arrow {
                        margin-left: 30px;
                    }
                }
                .optionList {
                    @keyframes dropDown {
                        from {
                            opacity: 0;
                            transform: scaleY(0);
                        }
                        to {
                            opacity: 1;
                            transform: scaleY(1);
                        }
                    }
                    &.hidedn {
                        display: none;
                        animation: dropDown ease .2s;
                        transform-origin: top;
                    }
                    display: none;
                    animation: dropDown ease .2s;
                    transform-origin: top;
                    position: absolute;
                    z-index: 100;
                    top: 100%;
                    right: 0;
                    width: 100%;
                    overflow-y: scroll;
                    background-color: #fff;
                    max-height: 6em;
                    border-bottom-left-radius: 5px;
                    border-bottom-right-radius: 5px;
                    &::-webkit-scrollbar {
                        width: 3px;
                    }
                    &::-webkit-scrollbar-track {
                        background: #ddd;
                    }
                    &::-webkit-scrollbar-thumb {
                        background: ${variable.color.secondary};
                    }
                }
            `}</style>
        </>
    );
}
