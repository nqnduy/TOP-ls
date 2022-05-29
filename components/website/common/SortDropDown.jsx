import asset from '@/plugins/assets/asset';
import Image from 'next/image';
import React from "react";
import { variable } from 'styles/variable';

export default function SortDropdown({ children }) {
    return (
        <>
            <div className="typeSort">
                {children} <Image src={asset("/images/icons/arrow-dropdown.svg")} alt="" width={10} height={5} />
            </div>
            <style jsx>{`
                .typeSort {
                    cursor: pointer;
                    color: ${variable.color.purple};
                }
            `}</style>
        </>
    );
}
