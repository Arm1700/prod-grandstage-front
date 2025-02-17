import React, { useContext } from 'react'
import { DataContext } from '../../context/DataProvider';

export default function Testimonials({
                                       id,  name, image, title, comment
                              }) {
    const { getImageUrl } = useContext(DataContext);
    return (<section key={id}
        className="py-[30px] border-gray-300  flex flex-col gap-7">
        <p>{title}</p>
        <p>{comment}</p>
        <div className="flex items-center gap-5">
            <img className="w-[60px] rounded-full" src={getImageUrl(image)} alt=""/>
            <p className="font-roboto-slab-sans text-color12 font-bold">{name}</p>
        </div>
    </section>)
}
