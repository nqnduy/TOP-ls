import React from "react";
import { variable } from "../../../styles/variable";
export default function Body({ children }) {
    return (
        <>
            <div className="mainBody">{children}</div>
            <style jsx global>{`
                .mainBody {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                    background-color: ${variable.color.primary};
                    main {
                        flex-grow: 1;
                    }
                }
            `}</style>
        </>
    );
}
