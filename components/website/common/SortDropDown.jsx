import asset from "@/plugins/assets/asset";
import Image from "next/image";
import React from "react";
import { variable } from "styles/variable";

export default function SortDropdown({ children }) {
    return (
        <>
            <div className="typeSort">
                {children}
                <div className="arrow">
                    <Image src={asset("/images/icons/arrow-dropdown.svg")} alt="" width={10} height={5} />
                </div>
            </div>
            <style jsx>{`
                .typeSort {
                    display: flex;
                    cursor: pointer;
                    margin-right: 45px;
                    color: ${variable.color.purple};
                    &:last-child {
                        margin-right: 0;
                    }
                    .arrow {
                        margin-left: 15px;
                    }
                }
            `}</style>
        </>
    );
}
