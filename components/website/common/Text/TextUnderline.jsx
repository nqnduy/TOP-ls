import React from 'react';

export default function TextUnderline({ children, color, className="", type="" }) {
    return (
        <>
            <div className={`TextUnderline ${type} ${className}`}>{children}</div>
            <style jsx>{`
                .TextUnderline {
                    position: relative;
                    width: fit-content;
                    cursor: pointer;
                    color: #fff;
                    &:after {
                        content: "";
                        position: absolute;
                        width: 0;
                        height: 2px;
                        bottom: -7px;
                        left: 0;
                        background-color: #fff;
                        transition: 0.3s ease-out;
                    }
                    &.small {
                        &:after {
                            bottom: -3px;
                        }
                    }
                    &:hover {
                        color: ${color};
                        > {
                            color: ${color};
                        }
                        &:after {
                            background-color: ${color};
                            width: 100%;
                            transition: 0.3s ease-out;
                        }
                    }
                }
            `}</style>
        </>
    );
}
