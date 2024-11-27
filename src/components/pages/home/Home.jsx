import React, {useLayoutEffect, useState, memo, useRef, useContext} from "react";
import MainPhoto from "./MainPhoto";
import LessonInfo from "../shared/home/LessonInfo";
import Event from "../events/Event";
import Course from "../shared/home/Course";
import Certificate from "../certificate/Certificate";
import Cooperating from "../shared/home/Cooperating";
import testimonialsArray from "../../../entities/testimonialsArray";
import lessonInfoArray from "../../../entities/lessonInfoArray";
import Testimonials from "../shared/testimonials/Testimonials";
import Slider from "react-slick";
import {A11y, Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation'; // Если используете навигацию
import 'swiper/css/pagination';
import {DataContext} from "../context/DataProvider";
import {useNavigate} from "react-router-dom"; // Если используете пагинацию

// const MemoizedEvent = memo(Event);
const MemoizedTestimonials = memo(Testimonials);

export default function Home() {
    const {courses, certificate, events} = useContext(DataContext); // Use context
    const swiperRef = useRef(null);
    const [slidesToShow, setSlidesToShow] = useState(4);
    const nav = useNavigate();
    const handleCategoryClick = () => {
        nav(`/bio`);
    };
    // Adjust slider display based on screen width
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
                <MainPhoto/>
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
            <div className="cursor-pointer flex flex-col lg:flex-row items-start justify-center p-20 gap-20"
                 onClick={handleCategoryClick}>
                <img src={'/images/Picture1.jpg'} alt="Academy Founder" loading="lazy"/>
                <div className="flex flex-col justify-center gap-10 lg:w-[30%] w-full">
                    <p className="text-custom-28 text-color12 font-bold">
                        Hey there, my name is Varduhi Alexanyan. I am the founder of Grand Educational Center.
                    </p>
                    <p className="text-custom-15 text-color66">
                        A wonderful serenity has taken possession of my soul, like these sweet mornings of spring. The
                        charm of this spot was created for the bliss of souls like mine. I am so happy, my dear friend,
                        so absorbed. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                        letters, making it look like readable English.
                    </p>
                    <img
                        src="/images/Image20241122131907.png"
                        alt="Founder John Doe" width="220px" loading="lazy"/>
                </div>
            </div>

            <div className="py-10 bg-colorF2">
                <div
                    className="bg-cover bg-no-repeat max-w-[1300px] mx-auto flex justify-between flex-row md:flex-row xs:flex-col">
                    {lessonInfoArray.map(({id, icon, title, desc}) => (
                        <LessonInfo key={id} Icon={icon} title={title} desc={desc}/>
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
                        <div className="custom-button-prev" onClick={() => swiperRef.current.slidePrev()}>
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
                            {courses.map(({image, id, name}, index) => (
                                <SwiperSlide
                                    key={id}
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Course image={image} name={name} id={id}/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="custom-button-next" onClick={() => swiperRef.current.slideNext()}>
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
                        <Certificate certificate={certificate} slidesToShow={slidesToShow}/>
                    </div>
                </div>
            </div>

            <div className="text-start pt-20 px-5 flex justify-center">
                <div
                    className="mid:max-w-[1300px] w-full mid:mx-auto gap-5 grid mid:grid-cols-2 grid-cols-1 justify-between">
                    <div className="flex justify-between flex-col bg-colorF2 px-10 py-7 w-full">
                        <h1 className="text-custom-28 font-roboto-slab font-bold text-color12 pb-5">Events</h1>
                        {events.slice(0, 3).map(({id, day, month, title, hour, place, description, image}) => (
                            <Event key={id} id={id} day={day} month={month} title={title} hour={hour}
                                   place={place} description={description} image={image}/>
                        ))}
                    </div>
                    <div className="flex flex-col bg-colorF2 px-10 py-7 w-full">
                        <h1 className="text-3xl font-roboto-slab font-bold text-color12">Our Testimonials</h1>
                        <Slider slidesToShow={1} autoplay={true}>
                            {testimonialsArray.map(({id, name, comment, image}) => (
                                <MemoizedTestimonials key={id} id={id} name={name} comment={comment} image={image}/>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <Cooperating/>
        </main>
    );
}
