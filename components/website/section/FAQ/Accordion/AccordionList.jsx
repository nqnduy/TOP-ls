import React, { useState } from "react";
import Accordion from "./index";
function AccordionList() {
    const items = [
        {
            id: 1,
            title: "Where does it come from?",
            content:
                "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.",
        },
        {
            id: 2,
            title: "What is Lorem Ipsum?",
            content:
                "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.",
        },
        {
            id: 3,
            title: "Where can I get some?",
            content:
                "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.",
        },
        {
            id: 4,
            title: "The standard Lorem Ipsum passage?",
            content:
                "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.",
        },
        {
            id: 5,
            title: "Section 1.10.33 of de Finibus Bonorum?",
            content:
                "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.",
        },
    ];
    const [selectedItem, setSelectedItem] = useState(0);
    const handleSelect = (id) => () => {
        setSelectedItem(id);
    };
    return (
        <>
            <div className="AccordionList">
                {items.map((x) => {
                    return (
                        <Accordion
                            key={x.id}
                            id={x.id}
                            title={`${x.id}.   ${x.title}`}
                            content={x.content}
                            open={x.id === selectedItem}
                            onClick={x.id !== selectedItem ? handleSelect(x.id) : handleSelect(0)}
                        />
                    );
                })}
            </div>

            <style jsx global>{`
                .AccordionList {
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                }
                .Accordion {
                    &:first-child {
                        padding-top: 0;
                    }
                    &:last-child {
                        border-bottom: 0;
                        padding-bottom: 0;
                    }
                }
            `}</style>
        </>
    );
}
AccordionList.propTypes = {};

export default AccordionList;
