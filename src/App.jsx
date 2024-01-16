import React from 'react';
import Cimpanzeu from './cimpanzeu/cimpanzeu';
import Page2 from './second_page/second_page';
import Girafa from './girafa/girafa';
import Ghepard from './ghepard/ghepard';
import Page1 from './first_page/first_page';
import Rinocer from './rinocer/rinocer';
import Rechin from './rechin/rechin';
import Cincila from './cincila/cincila';
import Arici from './arici/arici';
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
      path: "/ghepard",
      element: <Ghepard />,
    },
    {
      path: "/cimpanzeu",
      element: <Cimpanzeu />,
    },
    {
      path: "/girafa",
      element: <Girafa />,
    },
    {
      path: "/rinocer",
      element: <Rinocer />,
    },
    {
      path: "/rechin",
      element: <Rechin />,
    },
    {
      path: "/arici",
      element: <Arici />,
    },
    {
      path: "/cincila",
      element: <Cincila />,
    },
  ])

  return (
      <RouterProvider router={router} />
  )
}
