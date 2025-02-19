import React, { useState, useCallback, useContext } from 'react';
import { IoSearch } from 'react-icons/io5';
import { DataContext } from '../context/DataProvider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import { useRef } from 'react';
const GalleryComponent = ({ galleries }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const { getImageUrl } = useContext(DataContext);

    const swiperRef5 = useRef(null);
    const handleImageClick = useCallback((index) => {
        setSelectedImageIndex(index); // Сбрасываем индекс выбранного изображения
        setIsModalOpen(true); // Открываем модальное окно
    }, []);

    const closeModal = useCallback(() => {
        setIsModalOpen(false); // Закрываем модальное окно
        setSelectedImageIndex(0); // Сбрасываем индекс выбранного изображения
    }, []);

    // Закрытие модального окна при клике на фон
    const handleModalClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal(); // Закрываем окно только если клик на фон, а не на изображение
        }
    };

    return (
        <div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7 pt-5">
                {galleries.map((gallery, index) => (
                    <div
                        key={gallery.id}
                        className="opacityPopularCourse rounded cursor-pointer relative overflow-hidden aspect-w-1 aspect-h-3"
                    >
                        <img
                            src={getImageUrl(gallery.img)}
                            alt={gallery.title || "Gallery Image"} // Лучше использовать alt с описанием
                            className="object-cover w-full h-full transition-transform duration-300"
                        />
                        <div
                            className="absolute inset-0 bg-gray-600 opacity-0 hover:opacity-60 transition-opacity duration-300"
                            onClick={() => handleImageClick(index)} // Обрабатываем клик по изображению
                        >
                            <div className="flex justify-center items-center h-full">
                                <IoSearch className="text-white text-[30px] transition-transform duration-300 transform" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Модальное окно */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
                    onClick={handleModalClick} // Обрабатываем клик на фон
                >
                    <div className="custom-button-prev4 transition-all duration-300 hover:scale-[1.2]" onClick={() => swiperRef5.current?.slidePrev()}>
                        &lt; {/* Левый символ */}
                    </div>
                    <div className="relative w-full h-full max-w-5xl max-h-[90%] flex items-center justify-center">
                        <Swiper
                            loop={true}
                            initialSlide={selectedImageIndex} // Начинаем с выбранного изображения
                            modules={[Navigation, A11y]}
                            slidesPerView={1}
                            navigation={{
                                nextEl: '.custom-button-next3',
                                prevEl: '.custom-button-prev3',
                            }}
                            onSwiper={(swiper) => {
                                swiperRef5.current = swiper; // Сохраняем ссылку на экземпляр Swiper
                            }}
                            onSlideChange={(swiper) => setSelectedImageIndex(swiper.activeIndex)}
                        >
                            {galleries.map(({ id, img }) => (
                                <SwiperSlide key={id}>
                                    <div className="flex justify-center items-center h-[80vh]">
                                        <img src={getImageUrl(img)} alt={`Certificate ${id}`}
                                            className="max-w-full max-h-full object-contain" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="custom-button-next4 transition-all duration-300 hover:scale-[1.2]" onClick={() => swiperRef5.current?.slideNext()}>
                            &gt; {/* Правый символ */}
                        </div>
                        <button
                            onClick={closeModal}
                            className="z-50 top-4 right-4 absolute text-white text-[32px] hover:text-red-500"
                        >
                            ✖
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryComponent;
