import React from "react";

export default function Input({ ...e }) {
    return <input className="inputCommon" {...e} />;
}
Input.TextArea = ({ ...e }) => {
    return <textarea className="textAreaCommon" {...e} />;
};
