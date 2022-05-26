import React from 'react';

export default function TextUnderline({children, color}) {
    return (
        <>
            <div className="TextUnderline">{children}</div>
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
                    &-small {
                        padding-bottom: 3px;
                        &:after {
                            height: 1px;
                        }
                    }
                    &:hover {
                        color: ${color};
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
