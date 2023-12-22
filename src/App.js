import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./module/Navbar";
import Homepages from "./pages/Homepages";
import { Profile } from "./pages/Profile";
import { Resume } from "./pages/Resume";
import { Portofolio } from "./pages/Portofolio";
import { Details } from "./pages/Details";
import { Blogs } from "./pages/Blogs";
import { Contact } from "./pages/Contact";

function App() {
  // eslint-disable-next-line 
  return (
    <BrowserRouter>
      <Navbar />
      <PageContent />
    </BrowserRouter>
  );
}

function PageContent() {
  const location = useLocation();

  useEffect(() => {
    // Set judul halaman berdasarkan location.pathname yang berubah
    switch (location.pathname) {
      case '/':
        document.title = 'Akmad Nudin | Home ';
        break;
      case '/profile':
        document.title = 'Akmad Nudin | Profile ';
        break;
      case '/resume':
        document.title = 'Akmad Nudin | Resume ';
        break;
      case '/portofolio':
        document.title = 'Akmad Nudin | Portofolio ';
        break;
      case '/contact':
        document.title = 'Akmad Nudin | Contact ';
        break;
      case '/blogger':
        document.title = 'Akmad Nudin | Blog ';
        break;
      case '/detail':
        document.title = 'Akmad Nudin | Detail ';
        break;
      default:
        document.title = 'Akmad Nudin';
        break;
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepages />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/portofolio" element={<Portofolio />} />
      <Route path="/detail" element={<Details />} />
      <Route path="/blogger" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" />}  />
    </Routes>
  );
}

export default App;