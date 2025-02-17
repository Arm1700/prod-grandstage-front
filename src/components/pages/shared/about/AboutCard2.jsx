import React, { useContext } from 'react'
import { DataContext } from '../../context/DataProvider';

export default function AboutCard2({ title, desc, image }) {
  const { getImageUrl } = useContext(DataContext);
  return (
    <article className=" relative my-5 gap-3  min-h-[200px] bg-none  overflow-hidden flex flex-col justify-center items-start">
      <img src={getImageUrl(image)} alt="article" />
        <h1 className="text-xl font-roboto-slab font-bold text-primaryDark">
          {title}
        </h1>
        <p className="text-md text-left text-secondaryLight">{desc}</p>
    </article>
  )
}
