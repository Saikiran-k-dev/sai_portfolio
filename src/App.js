import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const router = createBrowserRouter([{path:"/",element:<Navbar/>,
                          children:[{index:true,element:<Home />},
                                    {path:"about",element:<About/>},
                                    {path:"projects",element:<Projects />},
                                    {path:"contact",element:<Contact />}
                          ]}])
const App = () => (
      <RouterProvider router={router} />
    );

export default App
