import React, { useState } from 'react';

export default function Controller({ children }) {

    const [isOpen, setIsOpen] = useState(false);
    const [style, setStyle] = useState({
        position: "absolute",
        top: 0,
        left: 0,
    });
    const open = () => {
        setIsOpen(true);
    };

    const close = () => {
        setIsOpen(false);
    };
    const inputChildren = React.Children.map((children, child) => {
        if (child.type.displayName === "Select") {
            return React.cloneElement(child, open);
        }
        else {
            isOpen && ReactDOM.createPortal(<span style={style}>React.cloneElement(child)</span>, document.body);
        }
    });
    return inputChildren;
}
