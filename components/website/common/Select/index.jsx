import React, { useState } from "react";
import SelectOption from "./SelectOption";

export default function Select({ data }) {
    const [showOption, setShowOption] = useState(false);
    const [option, setOption] = useState("Province/region");
    const handleShowSelect = (ev) => {
        setOption(ev.target.value);
        setShowOption(!showOption);
    };
    return (
        <div className="selectCommon">
            <div
                className="selectCommon__selectBy"
                onClick={() => {
                    setShowOption(!showOption);
                }}>
                <input className="inputCommon" value={option} readOnly />
            </div>
            {showOption && (
                <div className="selectCommon__checkboxes">
                    <div style={{ padding: "3px 0" }}>
                        {data.map((item, index) => (
                            <SelectOption key={index} onClick={handleShowSelect} value={item}>
                                {item}
                            </SelectOption>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
