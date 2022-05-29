export default function Button({ children, width="", color }) {
    return (
        <>
            <button className={`Button ${width} ${color}`}>
                <span>{children}</span>
            </button>
            <style jsx>{`
                .Button {
                    position: relative;
                    cursor: pointer;
                    outline: none;
                    border: none;
                    background-color: transparent;
                    border-radius: 15px;
                    padding: 0;
                    margin: 0;
                    width: max-content;
                    span {
                        font-family: fm-b;
                        font-size: 16px;
                        color: #fff;
                        background-color: #e71882;

                        position: relative;
                        z-index: 3;
                        border-radius: 15px;
                        padding: 14px 28px 17px 28px;

                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 10px;
                        @media (max-width: 1310px) {
                            font-size: 15px;
                        }
                        @media (max-width: 1220px) {
                            font-size: 14px;
                            line-height: 22px;
                        }
                        @media (max-width: 1024px) {
                            font-size: 13px;
                            line-height: 20px;
                        }
                        @media (max-width: 830px) {
                            padding: 10px 22px 14px 22px;
                        }
                        @media (max-width: 550px) {
                            font-size: 14px;
                            line-height: 22px;
                        }
                    }
                    &::before {
                        content: "";
                        position: absolute;
                        z-index: 1;
                        width: 98%;
                        height: 100%;
                        border-radius: 15px;
                        border: 1px solid #20ade4;
                        bottom: -6px;
                        left: 1px;
                    }
                    &.fullWidth {
                        width: 100%;
                    }
                    &.white {
                        span {
                            background-color: #fff;
                            color: #060070;
                        }
                    }
                    &.primary {
                        border: 1px solid #fff;
                        span {
                            background-color: #060070;
                            color: #fff;
                        }
                    }
                }
            `}</style>
        </>
    );
}
