import {Link} from "react-router-dom";
import Slider from "react-slick";
import React, {useEffect, useState} from "react";
import {getAllFood} from "../../api/Food";

export default function HomeMenuSlider() {

    const [foods, setFoods] = useState([]);

    const settings = {
        dots: false,
        arrows : false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    useEffect(() => {
        getAllFood().then((response) => {
            setFoods(response.data);
        });
    }, []);

    return (
        <>
            <div className="flex items-center justify-between mx-6 mb-6">
                <h3 className="text-xl text-white font-bold">인기 메뉴</h3>
                <Link to="/menu" className="link mx-2 text-gray-400">메뉴 더보기</Link>
            </div>
            <Slider {...settings} className="pb-6">
                {
                    foods.map((item, index) => (
                        <div className="px-4">
                            <div data-theme="dark" className="card card-compact w-96 bg-base-100 shadow-xl" key={item?.id}>
                                <figure><img src={`${process.env.REACT_APP_API_SERVER_URL}${item?.pictureURL}`} alt=""/></figure>
                                <div className="card-body">
                                    <h2 className="card-title justify-between">
                                        <div>
                                            {item.name}
                                            <div className="badge badge-accent badge-outline align-middle mb-1 mx-2">{item.foodCategory?.name}</div>
                                            <div className="badge badge-warning badge-outline align-middle mb-1">{item.status}</div>
                                        </div>
                                    </h2>
                                    <p>{item.price}원</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </>
    )
}