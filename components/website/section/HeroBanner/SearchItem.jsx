import asset from '@/plugins/assets/asset';
import Image from "next/image";
import React from 'react';

export default function SearchItem({ children }) {
    return (
        <>
            <div className="Search-filter__item">
                <p className="txMain upc">{children}</p>
                <div className="txMain normal purple">
                    Select a category <Image src={asset("/images/icons/arrow-dropdown.svg")} alt="" width={10} height={5} />
                </div>
            </div>
            <style jsx>{`
                .Search-filter__item {
                    color: #b8b7d0;
                    p {
                        margin-bottom: 5px;
                        font-family: fm-m;
                    }
                }
            `}</style>
        </>
    );
}
