import React from 'react';
import {Link} from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Logo({loading = false, size = '127px'}) {
    return (
        <Link to="/">
            <div className="flex w-max items-center gap-2 justify-between">
                {loading ? (
                    <Skeleton width={size} height={size} circle={true}/>
                ) : (
                    <img src={'/logo.png'} width={size} alt="logo"/>
                )}
            </div>
        </Link>
    );
}
