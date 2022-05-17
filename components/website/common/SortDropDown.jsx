import React from "react";

export default function SortDropdown({ title }) {
    return (
        <>
            <div className="typeSort txMain purple flexAC">
                {title} <img src="/images/icons/arrow-dropdown.svg" alt="" className="arrowSort" />
            </div>
            <style jsx>{`
                .typeSort {
                    margin-right: 45px;
                    gap: 6px;
                    cursor: pointer;
                }
                .arrowSort {
                    width: 9.5px;
                    height: 5.5px;
                }
            `}</style>
        </>
    );
}
