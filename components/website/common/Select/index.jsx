import React, { useState } from "react";
import SelectOption from "./SelectOption";

export default function Select() {
    const [showOption, setShowOption] = useState(false);
    const [option, setOption] = useState();
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
                <input className="inputCommon" value={option === undefined ? "Province/region" : option} readOnly />
            </div>
            {showOption && (
                <div className="selectCommon__checkboxes">
                    <div style={{ padding: "3px 0" }}>
                        <SelectOption onClick={handleShowSelect} value="Hà Nội">
                            Hà Nội
                        </SelectOption>
                        <SelectOption onClick={handleShowSelect} value="Hồ Chí Minh">
                            Hồ Chí Minh
                        </SelectOption>
                        <SelectOption onClick={handleShowSelect} value="Đà Nẵng">
                            Đà Nẵng
                        </SelectOption>
                    </div>
                </div>
            )}
        </div>
    );
}
