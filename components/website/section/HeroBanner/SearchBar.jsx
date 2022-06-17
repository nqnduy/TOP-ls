import Button from "@/website/common/Button/ButtonMain";
import SearchItem from "./SearchItem";
function SearchBar() {
    const filters = [
        {
            title: "Category",
            filters: ["Liveshows", "Festival", "Workshops"],
        },
        {
            title: "When",
            filters: ["Festival", "EDM", "Class"],
        },
        {
            title: "Where",
            filters: ["EDM", "Workshops", "Liveshows"],
        },
    ];
    return (
        <>
            <div className="Search">
                <div className="Search-filter">
                    <SearchItem filterList={filters} />
                </div>
                <Button>Search now</Button>
            </div>
            <style jsx global>{`
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
                        justify-content: space-between;
                        cursor: pointer;
                        width: 85%;
                        &__item {
                            flex-basis: auto;
                            padding-right: 10%;
                        }
                        @media (max-width: 1140px) {
                            width: 80%;
                        }
                    }
                }

                @media (max-width: 890px) {
                    .Search {
                        padding: 20px 30px;
                        flex-direction: column;
                        &-filter {
                            width: 100%;
                            margin-bottom: 40px;
                        }
                    }
                }
                @media (max-width: 758px) {
                    .Search {
                        flex-direction: row;
                        &-filter {
                            flex-wrap: wrap;
                            width: 70%;
                            margin-bottom: 0;
                            &__item {
                                padding: 15px 10% 15px 0;
                            }
                        }
                    }
                }
                @media (max-width: 580px) {
                    .Search {
                        &-filter {
                            width: 50%;
                        }
                    }
                }
                @media (max-width: 500px) {
                    .Search {
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        margin: -55px 15% 0 15%;
                        padding: 20px 30px 40px 30px;
                        width: fit-content;
                        &-filter {
                            width: 100%;
                            margin-bottom: 30px;
                            &__item {
                                padding: 15px 0;
                                text-align: center;
                                flex-basis: 100%;
                            }
                        }
                    }
                }
            `}</style>
        </>
    );
}

export default SearchBar;
