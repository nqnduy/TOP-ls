import SortDropdown from "@/components/website/common/SortDropDown";
import React from "react";
import { variable } from "styles/variable";

export default function SearchItem({ children }) {
    return (
        <>
            <div className="Search-filter__item">
                <p className="title">{children}</p>
                <SortDropdown>Select a category</SortDropdown>
            </div>
            <style jsx>{`
                .Search-filter__item {
                    p {
                        font-family: fm-m;
                        text-transform: uppercase;

                        color: #fff;
                        margin-bottom: 5px;
                    }
                    div {
                        color: ${variable.color.purple};
                    }
                }
            `}</style>
        </>
    );
}
