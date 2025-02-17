import { Link, useLocation } from 'react-router-dom';
import { routesArray } from '../../entities/routesArray';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from '../pages/shared/Logo'
import { useContext } from "react";
import { DataContext } from "../pages/context/DataProvider";

export default function Menu({ showMenu, toggleMenu }) {
    const { pathname } = useLocation();
    const { loading } = useContext(DataContext);

    return (<nav
        className="flex items-center justify-between text-secondary xs:px-5 max-w-[1300px] mx-auto py-3">
        <span className="font-semibold text-xl tracking-tight">
            <Logo loading={loading} />
        </span>
        <div className="lg:hidden">
            <button onClick={toggleMenu}>
                {showMenu ? (<FiX className="text-secondary" size={30} />) : (
                    <FiMenu className="text-secondary" size={30} />)}
            </button>
        </div>
        <div className="flex uppercase hidden lg:block">
            {routesArray.map((route) => (<Link
                key={route.id}
                to={route.path}
                className={`relative group px-3 py-2 rounded-md text-sm font-medium ${pathname === route.path || (pathname?.startsWith(route?.path) && route?.path !== '/')
                    ? 'text-primary'
                    : 'text-secondary hover:text-primary'
                    }`}
            >
                {route.name}
                <span
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100"></span>
            </Link>))}
        </div>
    </nav>);
}
