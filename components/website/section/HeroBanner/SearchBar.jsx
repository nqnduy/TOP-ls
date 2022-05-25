import Button from "@/website/common/Button/ButtonMain";
import SearchItem from './SearchItem';
function SearchBar() {
    return (
        <>
            <div className="Search">
                <div className="Search-filter">
                    <SearchItem>Category</SearchItem>
                    <SearchItem>When</SearchItem>
                    <SearchItem>Where</SearchItem>
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
                        --spaceFlex: 150px;
                        margin: calc(var(--spaceFlex) * -1) 0 0 calc(var(--spaceFlex) * -1);
                        cursor: pointer;
                        &__item {
                            margin: var(--spaceFlex) 0 0 var(--spaceFlex);
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
