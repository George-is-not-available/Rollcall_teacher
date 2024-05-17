import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from '../src/Login/index.js';
import CallRoll from '../src/CallRoll/index.js';
import Courses from '../src/CoursesPage/index.js';
import Register from '../src/components/Register.js';
import AddCourseForm from '../src/AddCoursePage.js';
import AdComponent from '../src/components/AdComponent.js'; 

const App = () => {
    const [showAd, setShowAd] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAd(true);
        }, 5000); 

        return () => clearTimeout(timer); 
    }, []);

    const handleCloseAd = () => {
        setShowAd(false);
    };

    const routes = [
        {
            path: "/",
            element: (
                <div style={styles.container}>
                    <AdComponent showAd={showAd} handleCloseAd={handleCloseAd} />
                    <div style={styles.introContainer}>
                        <p>还在为寻找点名APP而烦恼？还在为没有广告而担忧？在线随机点名APP，是你的不二选择！</p>
                        <a href="/login" style={styles.loginLink}>现在登录！</a>
                    </div>
                </div>
            )
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/callroll",
            element: <CallRoll />
        },
        {
            path: "/courses",
            element: <Courses />
        },
        {
            path: "/register",
            element: <Register />
        },
        {
            path: "/addcourse",
            element: <AddCourseForm />
        }
    ];

    const router = createBrowserRouter(routes);

    return <RouterProvider router={router} />;
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#f0f0f0',
        flexDirection: 'column',
    },
    introContainer: {
        textAlign: 'center',
        maxWidth: '600px',
        padding: '20px',
        background: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        borderRadius: '8px',
    },
    loginLink: {
        display: 'inline-block',
        marginTop: '20px',
        padding: '10px 20px',
        background: '#007bff',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '4px',
    },
};

export default App;
