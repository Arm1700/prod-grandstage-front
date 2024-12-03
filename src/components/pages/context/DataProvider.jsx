import React, {createContext, useEffect, useState} from "react";

export const DataContext = createContext();
export const BASE_URL = "https://grandstage.gekoeducation.com";
// export const BASE_URL = "http://127.0.0.1:8000";

export const DataProvider = ({children}) => {
    const [certificate, setCertificate] = useState([]);
    const [events, setEvents] = useState([]);
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [coursesResponse, certificatesResponse, eventsResponse] = await Promise.all([
                    fetch(`${BASE_URL}/api/courses/`),
                    fetch(`${BASE_URL}/api/certificate`),
                    fetch(`${BASE_URL}/api/events`)
                ]);

                if (!coursesResponse.ok) {
                    throw new Error(`Error fetching courses: ${coursesResponse.statusText}`);
                }

                if (!certificatesResponse.ok) {
                    throw new Error(`Error fetching certificates: ${certificatesResponse.statusText}`);
                }

                if (!eventsResponse.ok) {
                    throw new Error(`Error fetching events: ${eventsResponse.statusText}`);
                }

                const coursesData = await coursesResponse.json();
                const certificatesData = await certificatesResponse.json();
                const eventsData = await eventsResponse.json();

                setCourses(coursesData);
                setCertificate(certificatesData);
                setEvents(eventsData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const getCoursesById = (id) => {
        return courses.find(course => course.id === parseInt(id));
    };
    const getEventById = (id) => {
        return events.find(event => event.id === parseInt(id));
    };
    const getImageUrl = (image) => {
        if (!image) return "https://eduma.thimpress.com/wp-content/uploads/2022/07/thumnail-cate-7-170x170.png";
        return image.startsWith("https") ? image : `${BASE_URL}${image}`;
    };
    return (
        <DataContext.Provider value={{
            courses,
            getCoursesById,
            getEventById,
            getImageUrl,
            events,
            certificate,
            loading,
            error}}>
            {children}
        </DataContext.Provider>
    );
};
