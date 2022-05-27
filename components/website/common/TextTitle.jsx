import { variable } from 'styles/variable';
function TextTitle({ small_text, big_text, textAlign = "initial" }) {
    return (
        <>
            <div className="TextTitle">
                <h3 className='headlineSmall'>{small_text}</h3>
                <h4 className='headline'>{big_text}</h4>
            </div>
            <style jsx>{`
                .TextTitle {
                    text-align: ${textAlign};
                    h3 {
                        font-family: fm-r;
                        color: ${variable.color.blue};
                        margin-bottom: 10px;
                    }
                    h4 {
                        margin-bottom: 26px;
                    }

                    /*  Responsive   */
                    @media (max-width: 820px) {
                        h3 {
                            margin-bottom: 8px;
                        }
                        h4 {
                            margin-bottom: 24px;
                        }
                    }

                    @media (max-width: 580px) {
                        h3 {
                            margin-bottom: 0;
                        }
                        h4 {
                            margin-bottom: 19px;
                        }
                    }
                }
            `}</style>
        </>
    );
}

export default TextTitle;
