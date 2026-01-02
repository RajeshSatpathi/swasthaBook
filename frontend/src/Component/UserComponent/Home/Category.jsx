import React from 'react'
import HeadingCard from './HeadingCard'
import Slider from "react-slick";
import categoryBG from "../../../assets/img/categoryBG.jpg"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaUserDoctor } from "react-icons/fa6";
function Category({ specialization }) {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1280, // large tablets / small laptops
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768, // tablets
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480, // mobile
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="py-6">
            <HeadingCard
                heading="Top Specializations"
                subheading="Highlighting the Care & Support"
            />

            <div className="container mx-auto p-4 overflow-hidden ">
                <Slider {...settings}>
                    {specialization?.map((item) => (
                        <div key={item.id || item.slug} className="px-2">
                            <div
                                className="
                                    rounded-3xl
                                    bg-center bg-cover
                                    h-40 sm:h-48 md:h-56
                                    flex items-center justify-center
                                    text-white font-bold
                                    text-sm sm:text-base md:text-lg
                                    uppercase  flex-col
                                    shadow-lg gap-4
                                "
                                style={{
                                    backgroundImage: `
                                        linear-gradient(
                                        to bottom,
                                        rgba(0, 0, 0, 0.3),
                                        rgba(0, 0, 0, 0.3)
                                        ),
                                        url(${categoryBG})
                                `
                                }}
                            >
                                <FaUserDoctor  size={50} color='cyan' />
                                <span className="text-shadow">
                                    {item.slug}
                                </span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Category
