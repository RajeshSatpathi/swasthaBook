import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5';

function ClinicDoctorSlider({ Doctors }) {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <div className="container mx-auto px-4 py-6">
            <Slider {...settings}>
                {Doctors?.map((doctor, index) => (
                    <div key={index} className="px-2  h-86  py-3">
                        {/* Card */}
                        <div className="
                            bg-white rounded-2xl shadow-md
                            hover:shadow-xl transition-shadow
                            flex flex-col h-full items-center 
                        ">
                            {/* Image */}
                            <img
                                src={doctor?.doctorimg || "https://png.pngtree.com/png-vector/20240122/ourmid/pngtree-doctor-symbol-color-png-image_11455718.png"}
                                alt={doctor?.doctorName}
                                className="size-30 rounded-full object-cover"
                            />

                            {/* Content */}
                            <div className="p-4  flex flex-col flex-1  gap-3">
                                {/* Tags */}
                                <div className="flex justify-between items-center">
                                    <span className="text-xs bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full">
                                        {doctor?.DoctorSpecialization}
                                    </span>
                                    <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                                        Available
                                    </span>
                                </div>

                                {/* Name */}
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800">
                                        {doctor?.doctorName}
                                    </h2>
                                    <p className="text-sm text-gray-600">
                                        {doctor?.doctorQualification}
                                    </p>
                                </div>

                          

                                {/* Availability */}
                                <div className="text-xs text-gray-600">
                                    <p className="font-medium mb-1">
                                        Available Days & Time
                                    </p>
                                    {doctor?.availability?.map((item, idx) => (
                                        <div key={idx} className="flex flex-wr gap-2 ">
                                            <span className="font-semibold">{item.day}:</span>
                                            {item.timeSlots.map((time, i) => (
                                                <span key={i}>{time.time}</span>
                                            ))}
                                        </div>
                                    ))}
                                </div>

                                {/* Buttons */}
                        
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ClinicDoctorSlider;
