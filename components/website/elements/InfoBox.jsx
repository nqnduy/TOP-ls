import React, { useEffect, useRef } from "react";

export function InfoBox({ onClickOutside, message, show }) {
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside && onClickOutside();
            }
        };
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, [onClickOutside]);

    if (!show) return null;

    return (
        <div ref={ref} className="info-box">
            {message}
        </div>
    );
}
