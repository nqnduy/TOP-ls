import OptionSort from "@/common/SortDropDown/OptionSort";
import asset from "@/plugins/assets/asset";
import Image from "next/image";
import React, { useState } from "react";
import { variable } from "styles/variable";

export default function SortDropdown({ children }) {
    const data = ["Liveshows", "Festival", "Workshops"];
    const [isShow, setIsShow] = useState(false);
    const [option, setOption] = useState(children);

    const handleOpen = (ev) => {
        setOption(ev.target.value);
        setIsShow(!isShow);
    };
    return (
        <>
            <div className="SortDropdown">
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
                    &:last-child {
                        margin-right: 0;
                    }
                }
                .typeSort {
                    display: flex;
                    color: ${variable.color.purple};
                    cursor: pointer;
                    input {
                        cursor: pointer;
                        outline: none;
                        border: none;
                        background-color: transparent;
                        text-align: right;
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
                    position: absolute;
                    z-index: 100;
                    top: 90%;
                    right: 0;
                    width: 75%;
                    overflow-y: scroll;
                    background-color: #fff;
                    max-height: 6em;
                    border-bottom-left-radius: 5px;
                    border-bottom-right-radius: 5px;
                    &.hidedn {
                        display: none;
                        animation: dropDown ease 1s;
                        transform-origin: top;
                    }
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
