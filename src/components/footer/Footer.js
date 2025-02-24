import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlinePlace } from 'react-icons/md';
import { MdMarkEmailRead } from 'react-icons/md';
import { routesArray } from '../../entities/routesArray';
import { Link, useLocation } from 'react-router-dom';
import socialsArray from '../../entities/socialsArray';

const Footer = () => {
    const { pathname } = useLocation();
    return (
        <footer className="bg-color33 text-pseudo h-[auto] bottom-0 left-0 w-full">
            <div
                className="flex md:flex-row flex-col md:items-center justify-between px-5 py-20 mx-[auto] gap-5 max-w-[1300px]">
                <div className="flex flex-col gap-5 ">
                    {/*<Logo/>*/}
                    <p className="flex text-color92">
                        <FaPhoneAlt className="mx-2 text-white" />
                        +1(747) 236-8888
                    </p>
                    <p className="flex text-color92">
                        <MdOutlinePlace className="mx-2 text-white" />
                        725 E Broadway, Glendale,<br /> CA, United States, 91205
                    </p>
                    <p className="flex text-color92">
                        <MdMarkEmailRead className="mx-2 text-white" />
                        grandeducationalcentre@gmail.com
                    </p>
                </div>

                <div className="flex uppercase hidden lg:block">
                    {routesArray.map((route) => (<Link
                        key={route.id}
                        to={route.path}
                        className={`relative group px-3 py-2 rounded-md text-sm font-medium ${pathname === route.path || (pathname?.startsWith(route?.path) && route?.path !== '/')
                            ? 'text-primary'
                            : 'text-color92 hover:text-primary'
                            }`}
                    >
                        {route.name}
                        <span
                            className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100"></span>
                    </Link>))}
                </div>
                <ul className='flex gap-3 md:justify-between'>
                    {
                        socialsArray.map(({ id, name, Icon, href }) => {
                            return (
                                <a href={href} key={id}>
                                    <Icon title={name} key={id} className='text-white text-3xl' />
                                </a>
                            )
                        })
                    }
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
