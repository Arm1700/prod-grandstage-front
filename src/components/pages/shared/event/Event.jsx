import React, { useContext, useState } from 'react';
import { MdOutlinePlace } from 'react-icons/md';
import { TbClockHour3 } from 'react-icons/tb';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { DataContext } from "../../context/DataProvider";

export default function Event({ pickedEvent }) {
    const nav = useNavigate();
    const { t } = useTranslation();
    const { getImageUrl } = useContext(DataContext);

    const handleCategoryClick = (id) => {
        nav(`/events/${pickedEvent.status}/${id}`);
    };

    const [isMenuVisible, setMenuVisible] = useState(false);

    const handleMouseEnter = () => {
        setMenuVisible(true);
    };

    const handleMouseLeave = () => {
        setMenuVisible(false);
    };


    if (!pickedEvent) {
        return <div>{t('Event not found')}</div>; // Fallback message when event is not found
    }
    const date = new Date(pickedEvent.start_date);

    // Извлекаем день, месяц и год
    const day = date.getDate(); // День
    const month = date.getMonth() + 1; // Месяц (нумерация начинается с 0)
    const year = date.getFullYear(); // Год
    return (
        <section
            className="border-b-[1px] py-8 border-gray-300 grid mid:grid-cols-[min-content_1fr_1fr] grid-cols-1 gap-5  sm:items-center max:relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className={`mid:flex hidden  flex-col gap-1 sm:static md:mr-10 mr-0 max:bg-white max:text-center max:absolute max:top-[10%] max:left-[3%] ${isMenuVisible ? 'border-color56' : ''}`}
            >
                <span className="text-primary font-bold text-6xl leading-60">
                    {day}
                </span>
                <span className="text-color60 leading-[25px] font-sans-serif">{t(pickedEvent.month)}</span>
            </div>

            <div
                className="gap-2 flex w-full px-0 flex-col sm:order-none max:order-1 ">
                <h5 className="text-lg font-bold hover:text-primary transition-colors duration-300 cursor-pointer"
                    onClick={() => handleCategoryClick(pickedEvent.id)}
                >{t(pickedEvent.title)}</h5>
                <div className="flex flex-wrap gap-3">
                    <div className="flex gap-1 justify-center items-center">
                        <TbClockHour3 className="text-primary w-[20px]" /> <span
                            className="text-sm">{`${day}/${month}/${year}`}</span>
                    </div>
                    <div className="flex gap-1 justify-center items-center">
                        <MdOutlinePlace className="text-primary w-[20px]" /> <span
                            className="text-sm">{t(pickedEvent.place)}</span>
                    </div>
                </div>
                <p className="w-full text-primaryDark text-custom-15 center">{t(pickedEvent.description)}</p>
            </div>
            <div className='w-full h-full'>
                <img alt={"image " + t(pickedEvent.description)} src={getImageUrl(pickedEvent.image)}
                    className="rounded-md w-full h-full" />
            </div>
        </section>
    );
}
