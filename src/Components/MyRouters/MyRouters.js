import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main/Main';
import Products from '../Products/Products';


const MyRouters = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,children: [
            {path: "/products", element: <Products></Products>

            },
          ]
        },
      ]);
    return (
        <div>
           <RouterProvider router={router}>

           </RouterProvider>
        </div>
    );
};

export default MyRouters;