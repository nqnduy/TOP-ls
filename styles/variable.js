export const variable = {
    color: {
        purple: "#b8b7d0",
        blue: "#20ade4",
        primary: "#060070",
        secondary: "#e71882",
    },
    container: {
        maxWidth: "100%",
        width: "1170px",
    },
    breakpoint: {
        xxsMin: "400px",
        xsMin: "768px",
        smMin: "992px",
        mdMin: "1200px",
        lgMin: "1600px",
    }

};
const VariableStyle = () => {
    return (
        <>
            <style jsx global>{`
                html,
                body {
                    --pdContainer: 86px;

                    --fzr36: 36px;
                    --lhr36: 46px;

                    --fzr30: 30px;
                    --lhr30: 40px;

                    --fzr28: 28px;
                    --lhr28: 40px;

                    --fzr21: 21px;

                    --fzr18: 18px;
                    --lhr18: 26px;

                    --fzr16: 16px;
                    --lhr16: 26px;

                    --fzr12: 12px;

                    --fzrMain: 14px;
                    --cardRange: 26px;

                    --arrowSize: 40px;
                    --arrowRange: 54px;
                    @media (max-width: 1310px) {
                        --fzr16: 15px;
                        --fzr36: 32px;
                        --lhr36: 40px;
                    }
                    @media (max-width: 1110px) {
                        --fzr16: 15px;
                        --fzr36: 28px;
                        --lhr36: 38px;
                    }
                    @media (max-width: 1220px) {
                        font-size: 13px;
                        line-height: 20px;
                        --fzr16: 14px;
                        --lhr16: 22px;
                        --fzrMain: 13px;
                        --pdContainer: 60px;
                        --fzr18: 16px;
                        --lhr18: 24px;
                        --fzr21: 19px;
                        --fzr30: 28px;
                    }
                    @media (max-width: 1024px) {
                        --fzr16: 13px;
                        --lhr16: 20px;
                        --pdContainer: 55px;
                        --fzr30: 25px;
                        --fzr21: 17px;
                    }
                    @media (max-width: 920px) {
                        --fzr36: 25px;
                        --lhr36: 35px;
                    }
                    @media (max-width: 830px) {
                        --fzr21: 16px;
                        --fzr18: 15px;
                        --fzr36: 22px;
                        --lhr36: 30px;
                    }
                    @media (max-width: 550px) {
                        --fzr16: 14px;
                    }
                    @media (max-width: 500px) {
                        font-size: 12px;
                        --arrowSize: 38px;
                        --arrowRange: 45px;
                        --pdContainer: 45px;
                        --cardRange: 0px;
                        --fzr30: 22px;
                    }
                    @media (max-width: 400px) {
                        --pdContainer: 25px;
                    }
                    @media (max-width: 350px) {
                        --pdContainer: 10px;
                        --cardRange: 5px;
                    }
                }
            `}</style>
        </>
    );
}

export default VariableStyle;