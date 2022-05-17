import { changeQueryURL } from "@/helpers/url";
import ArrowNext from "@/website/common/ArrowNext";
import ArrowPrev from "@/website/common/ArrowPrev";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
export default function Paginate({ totalPage }) {
    const router = useRouter();
    const { query } = router;
    const currentPage = parseInt(query.page || "1");
    const renderPage = () => {
        if (totalPage <= 1) return;

        let start = currentPage - 2;
        let end = currentPage + 2;
        if (start < 1) {
            start = 1;
            end = 5;
        }
        if (end > totalPage) {
            end = totalPage;
            start = totalPage - 4;
            if (start < 1) start = 1;
        }
        let list = [];
        for (let i = start; i <= end; i++) {
            list.push(
                <React.Fragment key={i}>
                    <Link href={changeQueryURL({ ...query, page: i })} scroll={false} passHref replace>
                        <li className={`page-item flexCT ${currentPage === i ? "active" : ""}`}>
                            <a className="page-link txMain bold fz-16">{i < 10 ? `0${i}` : i}</a>
                        </li>
                    </Link>
                    <style jsx>{`
                        .page {
                            gap: 10px;
                            &-item {
                                cursor: pointer;
                                width: 40px;
                                height: 40px;
                                a {
                                    color: #b8b7d0;
                                    transition: 0.3 ease-in;
                                }
                                &:hover {
                                    a {
                                        transition: 0.3 ease-in;
                                        color: #e71882;
                                    }
                                }
                                &.active,
                                &:active {
                                    a {
                                        transition: 0.3 ease-in;
                                        color: #e71882;
                                    }
                                }
                            }
                        }
                    `}</style>
                </React.Fragment>
            );
        }
        return list;
    };
    return (
        <>
            <style jsx>{`
                .page {
                    gap: 10px;
                }
            `}</style>
            <div className="pagination">
                <ul className="page flexAC noselect">
                    {currentPage > 1 && (
                        <Link href={changeQueryURL({ ...query, page: currentPage - 1 })} scroll={false}>
                            <div>
                                <ArrowPrev.Paging />
                            </div>
                        </Link>
                    )}
                    {renderPage()}
                    {currentPage < totalPage && (
                        <Link href={changeQueryURL({ ...query, page: currentPage + 1 })} scroll={false}>
                            <div>
                                <ArrowNext.Paging />
                            </div>
                        </Link>
                    )}
                </ul>
            </div>
        </>
    );
}
