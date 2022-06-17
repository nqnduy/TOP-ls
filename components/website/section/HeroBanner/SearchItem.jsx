import SortDropdown from "@/components/website/common/SortDropDown";
import { useState } from "react";
import { variable } from "styles/variable";
export default function SearchItem({ filterList }) {
    const [selectedItem, setSelectedItem] = useState(-1);

    // const handleSelect = (idx) => {
    //     return () => {
    //         setSelectedItem(idx);
    //     }
    // }

    /* NOTE: SHORTHAND */
    const handleSelect = (idx) => () => {
        setSelectedItem(idx);
    };
    return (
        <>
            {filterList.map((item, index) => (
                <div className="Search-filter__item" key={index}>
                    <p className="title">{item.title}</p>
                    <SortDropdown.Multi
                        data={item.filters}
                        width={140}
                        isShow={index === selectedItem}
                        onClick={index !== selectedItem ? handleSelect(index) : handleSelect(-1)}>
                        Select a category
                    </SortDropdown.Multi>
                </div>
            ))}
            <style jsx>{`
                .Search-filter__item {
                    p {
                        font-family: fm-m;
                        text-transform: uppercase;

                        color: #fff;
                        margin-bottom: 5px;
                    }
                    div {
                        color: ${variable.color.purple};
                    }
                }
            `}</style>
        </>
    );
}