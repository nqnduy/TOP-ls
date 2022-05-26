import asset from '@/plugins/assets/asset';
import Image from "next/image";
import React from 'react';
import { variable } from 'styles/variable';

export default function SearchItem({ children }) {
    return (
        <>
            <div className="Search-filter__item">
                <p className="title">{children}</p>
                <div>
                    Select a category <Image src={asset("/images/icons/arrow-dropdown.svg")} alt="" width={10} height={5} />
                </div>
            </div>
            <style jsx>{`
                .Search-filter__item {
                    p {
                        font-family: fm-m;
                        text-transform: uppercase;

                        color: #fff;
                        margin-bottom: 5px;
                    }
                    div {
                        color: ${variable.color.purple};
                    }
                }
            `}</style>
        </>
    );
}
