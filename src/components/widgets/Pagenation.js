import React from "react";

export default function Pagenation({ page , setPage,  totalPages}) {

    return (
        <div className="relative flex justify-center mb-8 py-10">
            <div className="join">
                <button className="join-item btn bg-neutral text-gray-50 border-none" onClick={() => setPage(page-1)}>«</button>
                {[...Array(totalPages)].map((_, index) => {
                    const pageNumber = index + 1;
                    return (
                        <button
                            key={pageNumber}
                            className={`join-item btn ${pageNumber === page ? "btn-active" : ""} bg-neutral text-gray-50 border-none`}
                            onClick={() => setPage(pageNumber-1)}
                        >
                            {pageNumber}
                        </button>
                    );
                })}
                <button className="join-item btn bg-neutral text-gray-50 border-none" onClick={() => setPage(page+1)}>»</button>
            </div>
        </div>
    );
}
