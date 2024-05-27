import {GrCart, LuLightbulb} from "../../assets/icons/vander";
import CountUp from "react-countup";
import React from "react";

export default function HomeStats({formatPrice}) {

    return (
        <>
            <div data-theme="dark" className="stats shadow mt-5 mx-2" >
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <GrCart className="inline-block w-8 h-8 stroke-current"/>
                    </div>
                    <div className="stat-title">Total Orders</div>
                    <div className="stat-value text-primary text-3xl"><CountUp start={1} end={25} /> 건</div>
                    <div className="stat-desc">{new Date().getMonth() + 1}월 {new Date().getDate()}일의 총 주문 건
                        수 입니다.
                    </div>
                </div>

                <div className="stat">
                    <div className="stat-title">Total Sales</div>
                    <div className="stat-value text-secondary text-3xl">{formatPrice(4375900)}</div>
                    <div className="stat-desc">{new Date().getMonth() + 1}월 {new Date().getDate()}일의 매출액
                        입니다.
                    </div>
                </div>
            </div>

            <div data-theme="dark" className="stats shadow mt-5 mx-2">
                <div className="stat">
                    <div className="stat-figure text-success">
                        <LuLightbulb className="inline-block w-10 h-10 stroke-current"/>
                    </div>
                    <div className="stat-title">New Orders</div>
                    <div className="stat-value text-success text-3xl"><CountUp start={1} end={7} duration={3}/> 건</div>
                    <div className="stat-desc">새로 요청된 주문입니다.</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-accent">
                        <LuLightbulb className="inline-block w-10 h-10 stroke-current"/>
                    </div>
                    <div className="stat-title">Food On Sale</div>
                    <div className="stat-value text-accent text-3xl"><CountUp start={1} end={27} /> 개</div>
                    <div className="stat-desc">현재 판매 중인 메뉴의 개수 입니다.</div>
                </div>
            </div>
        </>
    )
}