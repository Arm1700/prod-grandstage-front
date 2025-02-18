import React, { useRef, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DataContext } from "../../context/DataProvider";
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

import 'swiper/css';
import 'swiper/css/navigation'; // Если используете навигацию
import 'swiper/css/pagination';

const CourseCategory = () => {
    const nav = useNavigate();
    const { id: courseId } = useParams();
    const { getCoursesById, loading, getImageUrl } = useContext(DataContext);
    const swiperRef = useRef(null);

    const course = getCoursesById(courseId);

    if (loading || !course) {
        return (
            <section className="bgColorArticle relative pb-5">
                <article className="grid lg:grid-cols-[50%_50%] lg:grid-rows-[60%_50%] grid-cols-1 max-w-[1200px] mx-auto relative h-[80vh]">
                    {/* Левый блок с текстом */}
                    <div className="flex flex-col relative px-auto text-pseudo items-center justify-center py-10">
                        <div className="flex flex-col gap-[20px] px-5">
                            <Skeleton
                                key={Math.random()}
                                style={{
                                width: '50%',
                                height: '30px',
                            }}/>
                            <Skeleton
                                key={Math.random()}
                                style={{
                                width: '50%',
                                height: '30px',
                            }}/>
                        </div>
                    </div>

                    {/* Правый блок с изображением */}
                    <div className="flex flex-col xlBig:mx-1 mx-5 lg:sticky static top-1 mt-8 h-min gap-[10px] bg-pseudo">
                        <div>
                            {/* Скелетон для изображения */}
                            <Skeleton
                                key={Math.random()}
                                style={{
                                    borderRadius: '8px',
                                    marginBottom: '10px',
                                    width: '100%',
                                    maxWidth: '100%',
                                    height: 'auto',
                                    objectFit: 'cover',
                                    aspectRatio: '4/3',
                                }}
                            />
                        </div>

                        {/* Скелетон для кнопки */}
                        <div className="flex flex-col justify-start items-start px-[10%] py-[20px] gap-[10px]">
                            <Skeleton width="60%" height={40} />
                        </div>
                    </div>
                </article>
            </section>
        );
    }

    return (
        <section className="bgColorArticle relative pb-5">
            <article className="grid lg:grid-cols-[50%_50%]  grid-cols-1 max-w-[1200px] mx-auto relative h-[60%]">
                {/* Левый блок с текстом */}
                <div className="flex flex-col relative px-auto text-pseudo items-center justify-center py-10">
                    <div className="flex flex-col gap-[20px] px-5">
                        <p className="text-2xl text-center font-bold font-roboto-slab text-color12">{course.name}</p>
                        <p className="text-custom-15 opacity-80 text-color12 leading-7">
                            {course.desc}
                        </p>
                    </div>
                </div>

                {/* Правый блок с изображением */}
                <div className="rounded-[20px] flex flex-col xlBig:mx-1 mx-5 lg:sticky static border-[1px] top-1 mt-8 h-min gap-[10px] bg-pseudo">
                    <div>
                        <Swiper
                            loop
                            modules={[Navigation, A11y]}
                            navigation={{
                                nextEl: '.custom-button-next',
                                prevEl: '.custom-button-prev',
                            }}
                            slidesPerView={1}
                            spaceBetween={50}
                            speed={500}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper; // Сохранение ссылки на Swiper
                            }}
                        >
                            {course.galleries.map(({ id, img }) => (
                                <SwiperSlide
                                    key={id}
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div>
                                        <img
                                            src={getImageUrl(img)}
                                            alt="About Us"
                                            className="rounded-lg shadow-lg" 
                                            style={{
                                                width: '100%',
                                                maxWidth: '100%',
                                                height: 'auto',
                                                objectFit: 'cover',
                                                aspectRatio: '4/3',
                                            }}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="flex flex-col justify-start items-start px-[10%] py-[20px] gap-[10px]">
                        <button
                            onClick={() => nav(`/contacts`)}
                            className="self-center w-full py-[10px] px-[25px] rounded-[4px] text-white uppercase font-bold text-sm bg-primary">
                            Registration Now
                        </button>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default CourseCategory;
