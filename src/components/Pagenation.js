import React, {useEffect, useState} from "react";

export default function Pagenation({ page }) {

    const [pageNum, setPageNum] = useState(1);

    useEffect(() => {
        setPageNum(page);
    }, [page]);

    return (
        <div className="relative flex justify-center mb-8 py-10">
            <div className="join">
                <button className="join-item btn" onClick={() => setPageNum(prev => Math.max(prev - 1, 1))}>«</button>
                {[...Array(5)].map((_, index) => {
                    const pageNumber = index + 1;
                    return (
                        <button
                            key={pageNumber}
                            className={`join-item btn ${pageNumber === pageNum ? "btn-active" : ""}`}
                            onClick={() => setPageNum(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    );
                })}
                <button className="join-item btn" onClick={() => setPageNum(prev => prev + 1)}>»</button>
            </div>
        </div>
    );
}
