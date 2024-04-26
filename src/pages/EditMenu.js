import React from "react";
import {category, status} from "../data/data";

export default function EditMenu({item}){

    return (
        <div className="modal-box w-[768px]">
            <h3 className="font-bold text-lg">메뉴 등록</h3>

            <div className="py-3">
                <span className="badge badge-lg my-1">카테고리</span>
                <select className="select select-bordered w-full max-w-xs">
                    <option disabled>카테고리 미지정</option>
                    {
                        category.map((c, index) => (
                            <option key={index} selected={item?.foodCategory === c.name}>{c.name}</option>
                        ))
                    }
                </select>
            </div>

            <div className="py-3">
                <span className="badge badge-lg my-1">메뉴 이름</span>
                <input type="text" className="input input-bordered w-full" placeholder="메뉴 이름을 입력해주세요" value={item?.name}/>
            </div>

            <div className="py-3">
                <span className="badge badge-lg my-1">가격</span>
                <input type="number" className="input input-bordered w-full" placeholder="가격을 입력해주세요" value={item?.price}/>
            </div>

            <div className="py-3">
                <span className="badge badge-lg my-1">판매 상태</span>
                <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>판매 상태</option>
                    {
                        status.map((s, index) => (
                            <option key={index} selected={item?.status === s.name}>{s.name}</option>
                        ))
                    }
                </select>
            </div>

            {
                !item?.pictureURL ? (
                    <div className="py-3">
                        <span className="badge badge-lg my-1">썸네일 이미지</span>
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" title={item?.name}/>
                    </div>
                ) : (
                    <div className="py-3">
                        <span className="badge badge-lg my-1">썸네일 이미지</span>
                        <button className="btn btn-xs btn-warning mx-2"><label for="inputPictureURL">썸네일 변경</label></button>
                        <input type="file" id="inputPictureURL" className="hidden"/>
                        <img src={item?.pictureURL} alt="썸네일 이미지" className="rounded-3xl px-3 py-1 hover:scale"/>
                    </div>
                )
            }

            <div className="modal-action">
                <form method="dialog">
                    <button className="btn mx-0.5">취소</button>
                    <button className="btn mx-0.5">등록</button>
                </form>
            </div>
        </div>
    )
}