import React, { useLayoutEffect, useState, useRef, useContext } from "react";
import MainPhoto from "./MainPhoto";
import LessonInfo from "../shared/home/LessonInfo";
import Event from '../shared/event/Event';
import Course from "../shared/home/Course";
import Certificate from "../certificate/Certificate";
import lessonInfoArray from "../../../entities/lessonInfoArray";
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { DataContext } from "../context/DataProvider";
import { useNavigate } from "react-router-dom"; // Если используете пагинацию

import 'swiper/css';
import 'swiper/css/navigation'; // Если используете навигацию
import 'swiper/css/pagination';


export default function Home() {
    const { courses, certificate, events } = useContext(DataContext); // Use context
    const swiperRef = useRef(null);
    const [slidesToShow, setSlidesToShow] = useState(4);
    const nav = useNavigate();
    const handleCategoryClick = () => {
        nav(`/bio`);
    };
    const handleEventsClick = () => {
        nav(`/events`);
    };

    useLayoutEffect(() => {
        function updateSlidesToShow() {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1300) setSlidesToShow(4);
            else if (screenWidth >= 992) setSlidesToShow(3);
            else if (screenWidth >= 480) setSlidesToShow(2);
            else setSlidesToShow(1);
        }

        updateSlidesToShow();
        window.addEventListener("resize", updateSlidesToShow);
        return () => window.removeEventListener("resize", updateSlidesToShow);
    }, []);

    return (
        <main>
            <div
                className='relative lg:flex gap-5 grid grid-rows-[min-content_1fr] lg:justify-end justify-center items-center py-5 lg:px-5 h-[600px]'>
                <MainPhoto />
                <div
                    className="relative top-0 mx-auto lg:mx-0 h-auto flex flex-col justify-center items-center z-20 overflow-hidden border-[1px] rounded-[20px]">
                    <div className="absolute w-[100%] h-[100%] bg-primary rounded-full z-10"></div>
                    <div
                        className={`flex flex-col gap-5 relative bg-white rounded-lg z-10 `}
                    >
                        <div className="flex flex-col justify-start items-start px-[20px] py-[20px] gap-[20px]">
                            <button
                                onClick={() => nav(`/contacts`)}
                                className="text-2xl font-roboto-slab-sans font-bold text-center p-5self-center w-[100%] py-[10px] px-[10px] text-white rounded-[4px] uppercase bg-primary">
                                Registration Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`flex flex-col lg:flex-row items-center justify-center py-10 p-5 gap-10`}>
                <img src={'/images/Picture1.jpg'} className="cursor-pointer w-[70%] lg:w-auto" alt="Academy Founder" onClick={handleCategoryClick} />
                <div className="flex flex-col justify-center items-center gap-10 lg:gap-5 lg:w-[30%] w-full">
                    <p className="text-custom-28 text-color12 font-bold text-center">
                        Hey there, my name is Varduhi Alexanyan. I am the founder of Grand Educational Center.
                    </p>
                    <p className="text-custom-15 text-color66 text-justify">
                        Varduhi Aleksanyan is a professional dancer, a highly
                        qualified trainer, an international judge, a choreographer
                        and a TV personality. Born in Yerevan, Armenia she began
                        Latin and Ballroom dance training at the age of 11 at
                        “Matador Dance Club” under the direction of Gevorg Markosyan.
                        As a teenager Varduhi revealed her passion and talent for
                        ballroom dance concentrating exclusively on dancing, competing
                        in local and international championships and making a
                        career of professional dancer and trainer. <span className="cursor-pointer text-primary" onClick={handleCategoryClick}>Read more</span>
                    </p>
                    <img
                        src="/images/Image20241122131907.png"
                        alt="Founder John Doe" width={"220"} />
                </div>
            </div>

            <div className="py-10 bg-colorF2">
                <div
                    className="bg-cover bg-no-repeat max-w-[1300px] mx-auto flex justify-between flex-row md:flex-row xs:flex-col">
                    {lessonInfoArray.map(({ id, icon, title, desc }) => (
                        <LessonInfo key={id} Icon={icon} title={title} desc={desc} />
                    ))}
                </div>
            </div>

            <div className="flex content-center justify-center gap-20 py-10">
                <div className="popularDiv flex flex-col mx-auto px- gap-5">
                    <div className="flex justify-between gap-5 md:flex-row flex-col">
                        <div className="text-start">
                            <h1 className="text-3xl font-roboto-slab font-bold text-color12 ">Popular Courses</h1>
                            <p className="text-color66">Limitless learning, more possibilities</p>
                        </div>
                    </div>
                    <div className="popular flex items-center relative">
                        <div className="custom-button-prev select-none" onClick={() => swiperRef.current.slidePrev()}>
                            &lt;
                        </div>
                        <Swiper
                            loop
                            modules={[Navigation, A11y]}
                            navigation={{
                                nextEl: '.custom-button-next',
                                prevEl: '.custom-button-prev',
                            }}
                            slidesPerView={slidesToShow}
                            spaceBetween={50}
                            speed={500}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper; // Сохранение ссылки на Swiper
                            }}

                        >
                            {courses.map(({ image, id, name }) => (
                                <SwiperSlide
                                    key={id}
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Course image={image} name={name} id={id} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="custom-button-next select-none" onClick={() => swiperRef.current.slideNext()}>
                            &gt;
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex content-center justify-center gap-20 py-10">
                <div className="popularDiv flex flex-col mx-auto px-5 gap-5">
                    <div className="flex justify-between gap-5 md:flex-row flex-col">
                        <div className="text-start">
                            <h1 className="text-3xl font-roboto-slab font-bold text-color12">Explore Certificates</h1>
                            <p className="text-color66">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="popular">
                        <Certificate certificate={certificate} slidesToShow={slidesToShow} />
                    </div>
                </div>
            </div>

            <div className="text-start pt-20 flex justify-center">
                <div className='popularDiv max-w-[1300px] px-10 lg:px-0 '>
                    <div className="flex justify-between">
                        <h1 className="text-custom-28 font-roboto-slab font-bold text-primaryDark">
                            Events
                        </h1>
                        <button
                            className="text-sm uppercase font-light border-2 py-[7px] px-[20px] h-[50%] rounded-[4px]"
                            onClick={() => handleEventsClick()}>
                            View All
                        </button>
                    </div>
                    {
                        events.filter(event => event.status === "completed")
                            .slice(0, 3).map((pickedEvent) => (
                                <Event
                                    key={pickedEvent.id}
                                    pickedEvent={pickedEvent}
                                />
                            ))
                    }
                </div>
            </div>
        </main>
    );
}
