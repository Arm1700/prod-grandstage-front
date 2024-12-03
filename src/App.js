import React, {useEffect} from 'react';
import './App.css';
import {Route, Routes, useLocation} from 'react-router-dom';
import {routesArray} from './entities/routesArray';
import PageUpButton from './components/pages/shared/PageUpButton';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Error404 from "./components/pages/shared/Error";
import CoursePage from "./components/pages/courses/[id]";
import EventsPage from './components/pages/events/[id]';
import Events from './components/pages/events/Events';
import Bio from "./components/pages/shared/home/Bio";

// import ComingSoonPage from "./components/pages/coming/ComingSoonPage";

function App() {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className="App">
            <PageUpButton/>
            <Header/>
            <Routes>
                <Route path="/bio" element={<Bio/>}/>
                <Route path="/events/:tab/:id" element={<EventsPage />} />
                <Route path="/events/:tab" element={<Events />} />
                <Route path="/course-category/:id" element={<CoursePage />}/>
                {routesArray.map(route => (
                    <Route
                        key={route.id}
                        path={route.path}
                        element={<route.component/>}
                        exact
                    />
                ))}
                <Route path="*" element={<Error404/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
