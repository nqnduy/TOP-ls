import Button from "@/website/common/Button/ButtonMain";
import React, { useState } from 'react';
import SearchItem from "./SearchItem";

function SearchBar() {
    const filters = [
        {   id: 1,
            title: "Category",
        },
        {
            id: 2,
            title: "When",
        },
        {
            id: 3,
            title: "Where"
        }
    ];
    const [selectedItem, setSelectedItem] = useState(0);
    const handleSelect = (id) => () => {
        setSelectedItem(id);
    };
    return (
        <>
            <div className="Search">
                <div className="Search-filter">
                    {filters.map((x) => (
                        <SearchItem
                            key={x.id}
                            show={x.id === selectedItem}
                            onClick={x.id !== selectedItem ? handleSelect(x.id) : handleSelect(0)}>
                            {x.title}
                        </SearchItem>
                    ))}
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
