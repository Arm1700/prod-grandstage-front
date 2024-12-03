import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function AboutUs() {
    const nav = useNavigate();

    return (
        <section className="bgColorArticle relative pb-5">
            <article
                className="grid lg:grid-cols-[50%_50%] lg:grid-rows-[60%_50%] grid-cols-1 max-w-[1200px] mx-auto relative">
                {/* Левый блок с текстом */}
                <div className="flex flex-col relative px-auto text-pseudo items-center justify-center py-10">
                    <div className="flex flex-col gap-[20px] px-5">
                        <p className="text-2xl text-center font-bold font-roboto-slab text-color12">About Us</p>
                        <p className="text-custom-15 opacity-80 text-color12 leading-7">
                            At Grand Educational Center, we create a warm and welcoming place where kids can learn,
                            play, and grow. Here, children can do their homework, get help with tutoring, and join many
                            fun activities, including chess, learning Armenian and English, taekwondo, art, football,
                            dance, and hip-hop. We believe that every child deserves the chance to explore their talents
                            and try new things. That’s why we offer a variety of programs to help kids build confidence,
                            learn important skills, and stay active. At our center, kids also enjoy healthy, delicious
                            meals to keep their energy up, as well as cozy spaces to relax, rest, and recharge. We make
                            sure every child feels safe, supported, and inspired to do their best. At Grand Educational
                            Center, children grow in a positive environment filled with care, creativity, and
                            encouragement. It’s more than a learning space—it’s a place where kids can be happy,
                            healthy, and ready for the future!
                        </p>
                    </div>
                </div>

                {/* Правый блок с изображением */}
                <div
                    className="flex flex-col xlBig:mx-1 mx-5 lg:sticky static border-[1px] top-1 mt-8 h-min gap-[10px] bg-pseudo">
                    <img
                        src="/images/DSC07939.jpg" // Замените на вашу картинку
                        alt="About Us"
                        className="rounded-lg shadow-lg"
                        style={{
                            width: '100%',
                            maxWidth: '100%',
                            height: 'auto',
                            maxHeight: '60vh',
                            objectFit: 'cover',
                            aspectRatio: '4/3',
                        }}
                    />
                    <div className="flex flex-col justify-start items-start px-[10%] py-[20px] gap-[10px]">
                        <button
                            onClick={() => nav(`/contacts`)}
                            className="self-center w-full py-[10px] px-[25px] rounded-[4px] text-white uppercase font-bold text-sm bg-primary">
                            Contact Us
                        </button>
                        <ul className="flex px-[9px] justify-center items-center gap-3 w-full pt-3">
                            <li className="flex items-center justify-center w-[32px] h-[32px] border-2 rounded-full opacity-50">
                                <a href="https://www.facebook.com/">
                                    <i className="fa fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="flex items-center justify-center w-[32px] h-[32px] border-2 rounded-full opacity-50">
                                <a href="https://www.instagram.com/">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </li>
                            <li className="flex items-center justify-center w-[32px] h-[32px] border-2 rounded-full opacity-50">
                                <a href="https://www.youtube.com/">
                                    <i className="fa fa-youtube-play"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </article>
        </section>
    );
}
