import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
// import Gallery from "./Components/Gallery";
import Error from "./Components/Error";
import Navabr from "./Components/Navabr";
import Insta from "./Components/Insta";
import Facebook from "./Components/Facebook";
import Github from "./Components/Github";
import Users from "./Components/Users";
import UsersDetails from "./Components/UsersDetails";
import React, { lazy, Suspense } from 'react';
function App() {
  const LazyGallery = React.lazy(() => import("./Components/Gallery") )
  return (
    <Router>
      <div>
        <Navabr />
        <Routes>
          <Route path={"/"} element={<Home />}>
            {/* <Route index element={<Home />} /> */}
            <Route path={"/home"} element={<Home />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UsersDetails />} />
          </Route>
          <Route path={"/about"} element={<About />} />
          <Route path={"/contact"} element={<Contact />}>
            <Route index element={<Insta />} />
            <Route path="instagram" element={<Insta />} />
            <Route path="facebook" element={<Facebook />} />
            <Route path="github" element={<Github />} />
          </Route>
          <Route path={"/gallery"} element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyGallery />
            </Suspense>
          } />
          <Route path={"*"} element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
