import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main/Main';
import Products from '../Products/Products';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../HomePage/Home';


const MyRouters = () => {
    const router = createBrowserRouter([
           
         {path: "/",
          element: <Main></Main>,children: [
            {path:"/", element: <Home></Home>},
            
            {path: "/shop", element: <Products></Products>

            },
            {path: "/products", element: <Products></Products>

            },
            {path: "/about", element: <About></About>

            },
            {path: "/contact", element: <Contact></Contact>

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