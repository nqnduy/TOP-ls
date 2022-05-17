import React, { useState } from "react";

export default function Select() {
    const [showOption, setShowOption] = useState(false);
    const [option, setOption] = useState();
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
                        <div className="selectCommon__checkboxes-option">
                            <label>
                                <input
                                    type="checkbox"
                                    onClick={(ev) => {
                                        setOption(ev.target.value);
                                        setShowOption(!showOption);
                                    }}
                                    value="Hà Nội"
                                />{" "}
                                Hà Nội
                            </label>
                        </div>
                        <div className="selectCommon__checkboxes-option">
                            <label>
                                <input
                                    type="checkbox"
                                    onClick={(ev) => {
                                        setOption(ev.target.value);
                                        setShowOption(!showOption);
                                    }}
                                    value="Hồ Chí Minh"
                                />{" "}
                                Hồ Chí Minh
                            </label>
                        </div>
                        <div className="selectCommon__checkboxes-option">
                            <label>
                                <input
                                    type="checkbox"
                                    onClick={(ev) => {
                                        setOption(ev.target.value);
                                        setShowOption(!showOption);
                                    }}
                                    value="Đà Nẵng"
                                />{" "}
                                Đà Nẵng
                            </label>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
