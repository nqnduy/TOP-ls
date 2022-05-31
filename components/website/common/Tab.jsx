import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function Tab({ href, title, active, onClick }) {
    return (
        <div>
            <Link href={href}>
                <li className={`Tab-item ${active} content`} onClick={onClick}>
                    <a>
                        {title} <Image src="/images/icons/arrow-account.svg" width={7} height={12} alt="" />
                    </a>
                </li>
            </Link>
            <style jsx>{`
                li {
                    cursor: pointer;
                    width: 100%;
                    height: 100%;
                    padding: 13px 25px;
                    transition: ease-in 0.3s;
                    color: #b8b7d0;
                    a {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        transition: ease-in 0.3s;
                    }
                    &:hover {
                        background-color: rgba(255, 255, 255, 0.05);
                        transition: ease-in 0.3s;
                        a {
                            color: #fff;
                            transition: ease-in 0.3s;
                        }
                    }
                    &.active {
                        background-color: rgba(255, 255, 255, 0.05);
                        transition: ease-in 0.3s;
                        a {
                            color: #fff;
                            transition: ease-in 0.3s;
                        }
                    }
                }
            `}</style>
        </div>
    );
}
