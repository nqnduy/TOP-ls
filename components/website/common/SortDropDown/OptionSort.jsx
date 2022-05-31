import React from "react";
import { variable } from "styles/variable";

export default function OptionSort({ children, ...e }) {
    return (
        <>
            <div className="OptionSort">
                <label>
                    <input type="checkbox" {...e} />
                    {children}
                </label>
            </div>
            <style jsx>{`
                .OptionSort {
                    padding: 5px 10px 7px 10px;
                    border-bottom: 1px solid rgba(60, 50, 50, 0.07);
                    transition: 0.3s ease-in;

                    display: flex;
                    align-items: center;

                    height: 100%;
                    color: ${variable.color.primary};
                    background-color: white;
                    label {
                        display: flex;
                        align-items: center;

                        position: relative;
                        width: 100%;
                        height: 100%;

                        font-family: fm-r;
                        cursor: pointer;

                        transition: 0.1s ease-in;
                        input {
                            width: 0;
                            opacity: 0;
                            cursor: pointer;
                        }
                    }
                    &:hover {
                        transition: 0.3s ease-in;
                        color: #fff;
                        background-color: ${variable.color.secondary};
                    }
                }
            `}</style>
        </>
    );
}
