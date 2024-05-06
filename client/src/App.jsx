// import { ConnectWallet } from "@thirdweb-dev/react";
// import Donor from "./pages/Donor";
// import Login from "./pages/Login/Login";
// import Org from "./pages/Org";
// import Register from "./pages/Register/Register";
// import { BrowserRouter as Router } from 'react-router-dom';


// import {
//   createBrowserRouter,
//   RouterProvider
// } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <div><Login/></div>
//   },
//   {
//     path: '/register',
//     element: <div><Register/></div>
//   },
//   {
//     path: '/donor',
//     element: <div><Donor/></div>
//   },
//   {
//     path: '/org/*',
//     element: <div><Org/></div>
//   }
// ])

// export default function Home() {
//   return (
//     <RouterProvider router={router}/>
//   );
// }

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ConnectWallet } from "@thirdweb-dev/react";
import Donor from "./pages/Donor";
import Login from "./pages/Login/Login";
import Org from "./pages/Org";
import Register from "./pages/Register/Register";
import Landing from "./pages/Landing/Landing";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/donor/*" element={<Donor />} />
        <Route path="/org/*" element={<Org />} />
      </Routes>
    </Router>
  );
}
