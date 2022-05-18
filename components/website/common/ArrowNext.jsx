import asset from "@/plugins/assets/asset";
const ArrowNext = ({ currentSlide, slideCount, ...props }) => (
    <button
        {...props}
        className={"slick-next slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")}
        aria-hidden="true"
        aria-disabled={currentSlide === 0 ? true : false}
        type="button">
        <img src={asset("/images/icons/arrow-next.svg")} alt="" />
    </button>
);

// eslint-disable-next-line react/display-name
ArrowNext.Paging = () => {
    return (
        <>
            <button className="btnNext">
                <img src={asset("/images/icons/arrow-next.svg")} alt="" />
            </button>
            <style jsx>{`
                .btnNext {
                    cursor: pointer;
                    width: 40px;
                    border-radius: 50%;
                    height: 40px;
                    transition: 0.4s ease;
                    position: relative;
                    background-color: rgba(255, 255, 255, 0.1);
                    outline: none;
                    border: none;
                    img {
                        position: absolute;
                        min-width: 100%;
                        min-height: 100%;
                        top: 50%;
                        left: 50%;
                        filter: brightness(0.5);
                        transform: translate(-50%, -50%);
                        transition: 0.4s ease;
                    }
                    &:hover {
                        transition: 0.4s ease;
                        background-color: rgba(255, 255, 255, 0.3);
                        img {
                            filter: initial;
                            transition: 0.3s;
                        }
                    }
                }
            `}</style>
        </>
    );
};

export default ArrowNext;
