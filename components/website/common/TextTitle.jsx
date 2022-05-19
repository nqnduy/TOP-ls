function TextTitle({ small_text, big_text, textAlign = "initial" }) {
    return (
        <>
            <div className="TextTitle">
                <h3 className="txMain blue normal upc lspacing-1">{small_text}</h3>
                <h4 className="txMain fz-36 bold">{big_text}</h4>
            </div>
            <style jsx>{`
                .TextTitle {
                    text-align: ${textAlign};
                    h3 {
                        margin-bottom: 10px;
                    }
                    h4 {
                        margin-bottom: 26px;
                    }
                }

                @media (max-width: 820px) {
                    .TextTitle {
                        h3 {
                            margin-bottom: 8px;
                        }
                        h4 {
                            font-size: 30px;
                            line-height: 40px;
                            margin-bottom: 24px;
                        }
                    }
                }
                @media (max-width: 580px) {
                    .TextTitle {
                        h3 {
                            margin-bottom: 0;
                            font-size: 13px;
                        }
                        h4 {
                            font-size: 28px;
                            margin-bottom: 19px;
                        }
                    }
                }
            `}</style>
        </>
    );
}

export default TextTitle;
