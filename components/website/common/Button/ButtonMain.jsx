export default function Button({ children, width, color }) {
    return (
        <>
            <button className={`Button ${width} ${color}`}>
                <div className="txMain fz-16">{children}</div>
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
                    div {
                        background-color: #e71882;
                        padding: 14px 28px 17px 28px;
                        border-radius: 15px;
                        font-family: fm-b;
                        color: #fff;
                        position: relative;
                        z-index: 3;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 10px;
                        @media (max-width: 830px) {
                            padding: 10px 22px 14px 22px;
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
                        div {
                            background-color: #fff;
                            color: #060070;
                        }
                    }
                    &.primary {
                        border: 1px solid #fff;
                        div {
                            background-color: #060070;
                            color: #fff;
                        }
                    }
                }
            `}</style>
        </>
    );
}
