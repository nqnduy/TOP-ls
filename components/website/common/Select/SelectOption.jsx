import React from "react";

export default function SelectOption({ children, ...e }) {
    return (
        <div className="selectCommon__checkboxes-option">
            <label>
                <input type="checkbox" {...e} />
                {children}
            </label>
        </div>
    );
}
