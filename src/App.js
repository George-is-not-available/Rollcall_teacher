import Login from './Login/index';
import CallRoll from './CallRoll/index';
import Courses from './CoursesPage/index'
import * as React from "react";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Register from './register';
import AddCourseForm from './AddCourseForm';


const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <div>Hello world！</div>,
        },

        {
            path:"/register",
            element:<Register/>
        },

        {
            path: "/login",
            element: <Login />,
        },
      {
            path:"/addCourseForm",
            element:<AddCourseForm/>
        },

        {
            path: "/courses",
            element: <Courses/>,
        },

        {
            path: "/callRoll",
            element: <CallRoll/>,
        }]);
    return <RouterProvider router={router} />



}

export default App;
