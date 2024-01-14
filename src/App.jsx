import React from 'react';
import Page5 from './cimpanzeu/cimpanzeu';
import Page2 from './second_page/second_page';
import Page3 from './girafa/girafa';
import Page4 from './ghepard/ghepard';
import Page1 from './first_page/first_page';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Page1 />,
    },
    {
      path: "/page2",
      element: <Page2 />,
    },
    {
      path: "/page3",
      element: <Page3 />,
    },
    {
      path: "/page4",
      element: <Page4 />,
    },
    {
      path: "/page5",
      element: <Page5 />,
    },
  ])

  return (
      <RouterProvider router={router} />
  )
}
