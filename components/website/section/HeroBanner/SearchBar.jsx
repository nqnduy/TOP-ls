import Button from "@/website/common/Button/ButtonMain";
import Image from "next/image";
function SearchBar() {
    return (
        <>
            <div className="Search">
                <div className="Search-filter">
                    <div className="Search-filter__item">
                        <p className="txMain upc">Category</p>
                        <div className="txMain normal purple">
                            Select a category <Image src="/images/icons/arrow-dropdown.svg" alt="" width={10} height={5} />
                        </div>
                    </div>
                    <div className="Search-filter__item">
                        <p className="txMain upc">When</p>
                        <div className="txMain normal purple">
                            Select a category <Image src="/images/icons/arrow-dropdown.svg" alt="" width={10} height={5} />
                        </div>
                    </div>
                    <div className="Search-filter__item">
                        <p className="txMain upc">Where</p>
                        <div className="txMain normal purple">
                            Select a category <Image src="/images/icons/arrow-dropdown.svg" alt="" width={10} height={5} />
                        </div>
                    </div>
                </div>
                <Button>Search now</Button>
            </div>
            <style jsx>{`
                .Search {
                    background-color: #060070;
                    border-radius: 20px;
                    margin: 0 var(--pdContainer);
                    padding: 30px 40px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    position: relative;
                    z-index: 10;
                    margin-top: -55px;
                    box-shadow: 3px 23px 133px rgba(0, 0, 0, 0.2);
                    &-filter {
                        display: flex;
                        align-items: center;
                        --spaceFlex: 150px;
                        margin: calc(var(--spaceFlex) * -1) 0 0 calc(var(--spaceFlex) * -1);
                        cursor: pointer;
                        &__item {
                            color: #b8b7d0;
                            margin: var(--spaceFlex) 0 0 var(--spaceFlex);
                            p {
                                margin-bottom: 5px;
                                font-family: fm-m;
                            }
                        }
                        @media (max-width: 1024px) {
                            --spaceFlex: 120px;
                        }
                        @media (max-width: 1000px) {
                            --spaceFlex: 90px;
                        }
                        @media (max-width: 900px) {
                            --spaceFlex: 60px;
                        }
                        @media (max-width: 800px) {
                            --spaceFlex: 40px;
                        }
                        @media (max-width: 758px) {
                            --spaceFlex: 70px;
                        }
                    }
                }
                @media (max-width: 830px) {
                    .Search {
                        padding: 20px 30px;
                        &-filter {
                        }
                    }
                }
                @media (max-width: 758px) {
                    .Search {
                        flex-direction: column;
                        &-filter {
                            --spaceFlex: 40px;
                            flex-wrap: wrap;
                            margin-bottom: 30px;
                            &__item {
                                flex: auto;
                            }
                        }
                    }
                }
            `}</style>
        </>
    );
}

export default SearchBar;
