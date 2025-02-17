import React from "react";

export default function Bio() {
    return (
        <article
            className='flex flex-col  items-center justify-center text-justify xlMin:px-20 md:px-14 px-5 gap-2 pb-10 max-w-[1300px] mx-auto text-custom-15 text-color66'>
            <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-5 xl:gap-20 xlMin:gap-3 xlBig:w-[90%] w-full">
                <img src={'/images/Picture1.jpg'} alt="Academy Founder" className='w-auto'/>
                <div className="flex flex-col justify-center gap-2 w-full">
                    <p className="xlMin:text-custom-28 text-[20px] text-color12 font-bold text-center">
                        Hey there, my name is Varduhi Alexanyan. I am the founder of Grand Educational Center.
                    </p>
                    <p>
                        Varduhi Aleksanyan is a professional dancer, a highly qualified trainer, an international judge,
                        a choreographer and a TV personality. Born in Yerevan, Armenia she began Latin and Ballroom
                        dance training at the age of 11 at “Matador Dance Club” under the direction of Gevorg Markosyan.
                        As a teenager Varduhi revealed her passion and talent for ballroom dance concentrating
                        exclusively on dancing, competing in local and international championships and making a career
                        of professional dancer and trainer. At the age of 19 Varduhi had already become 7 time champion
                        of the Republic of Armenia, 4 time
                        champion of South Caucusus and Bronz Medalist of Eastern Europe. In 2007, Varduhi Aleksanyan
                        graduated from the Armenian State University of Physical Culture with excellence, receiving the
                        Bachelor’s and Master’s degrees. Since then, she has worked as a sport dancing lecturer at the
                        Gymnastics and Sport Dancing Chair after Hrant Shahinyan of the Armenian State University of
                        Physical Culture.
                    </p>
                </div>
            </div>
            <p className='xlBig:w-[90%] w-full'>
                In 2007-2010, received the title of a judge of international category and a professional dancer
                by the World Dance Council. For her numerous achievements in sport dances, Varduhi received the
                title of Sports Master of the Republic of Armenia in 2008. Also participated in a number of
                international trainings: the “Courses for Professional Athletes”, Moscow, 2007;the “World Dance
                Council”, Blackpool, Great Britain, 2008; the“Improvement of High Qualified Athletes of Latin
                Dancing”, the Professional Development seminar, Moscow, 2008; the Seminar of the International
                Olympic Committee, Olympia, Greece, 2010.Since 2010, Varduhi has been a member of the jury of
                the “Ballroom” and “So You Think You Can Dance” TV shows broadcast on “Shant TV” channel.
                Since 2012 has been a hostess of the «Morning with Shant», also of “The National Singer”, “Duet”
                TV shows (Season 2014) on the “Shant” TV company.In 2014, Varduhi has been awarded the Degree of
                Doctor of Philosophy (PhD) in Pedagogy (Thesis entitled “The Physical Training Methods in Sport
                Dancing”) She has been always involved in the most popular dance and music activities of
                Armenia, such as “American Suite” (jazz, contemporary) and “Waiting for Spring” (Afro-jazz,
                neo-classical ) dance performances as a solo dancer. An expert –commentator of the Armenian broadcast of
                the “Dance Eurovision 2007”, a commentator
                of the Armenian broadcast of the «New Wave 2014» international song contest, the choreography of
                the Armenian show for the “Eurovision Song Contest 2015” and much more. Now Varduhi Aleksanyan
                is the founder and the trainer of her school of performing arts “Grand Stage Dance”, a
                professional platform where she can pass all her knowledge and experience to the new generation
                or simply dance lovers. From 2019 owner of Grand Education Centre and Aleksanyan Family Child
                Care.
            </p>
        </article>
    )
}
