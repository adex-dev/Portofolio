import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isNavLinkActive = (path) => {
    return location.pathname === path  ? 'active' : '';
  };
  const [active, setActive] = useState(false);
  const [modeactive,setModeactive] = useState('');

  const handleScroll = () => {
    const header = document.querySelector("header");
    const fixedHeader = header.offsetTop;
    if (window.pageYOffset > fixedHeader) {
      header.classList.add("navbar-fixed");
    } else {
      header.classList.remove("navbar-fixed");
    }
  };
  const buattema = (thema) => {
    document.documentElement.className = thema;
  };

  const cektema = useCallback(() => {
    const themes = localStorage.getItem("theme");
    switch (themes) {
      case 'dark':
        setModeactive(true);
        break;
      default:
        setModeactive(false);
        break;
    }
    buattema(themes);
  }, []);
  const toggleTheme = (e) => {
    e.preventDefault();
    setModeactive(!modeactive);
    const isSun = document.querySelector(".moon").classList.contains("sun");
    localStorage.setItem("theme", isSun ? "dark" : "light");
    cektema();
  };
  

  useEffect(() => {
    // eslint-disable-next-line
    window.addEventListener("scroll", handleScroll);
    cektema();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [cektema]);

  const Links = [
    { name: "HOME", link: "/" },
    { name: "Profile", link: "/profile" },
    { name: "RESUME", link: "/resume" },
    { name: "Portofolio", link: "/portofolio" },
    { name: "Blog", link: "/blogger" },
    { name: "CONTACT", link: "/contact" },
  ];

  return (
    <header className="bg-transparent absolute dark:bg-slate-800 top-0 left-0 w-full flex items-center z-10">
      <div className="container mx-auto ">
        <div className="flex justify-between relative">
          <div className="px-4">
            <a href="/" className="font-bold uppercase font-dominebold text-xs lg:text-lg text-primary block py-6">
              Akmad Nudin
            </a>
          </div>
          <div className="flex items-center px-4">
            <nav
              className={`absolute py-5 bg-white dark:bg-slate-800 dark:text-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none ${
                active ? "" : "hidden"
              }`}
            >
              <ul className="block lg:flex">
                {Links.map((link) => (
                  <li key={link.name} className="group cursor-pointer">
                    <a 
                      href={link.link}
                      className={`text-base uppercase lg:group-hover:border-b-2 group-hover:border-white cursor-pointer py-2 mx-8 group-hover:text-primary flex ${isNavLinkActive(link.link)}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex ">
              <div className="mx-6">
                <div onClick={toggleTheme} className={`tdnn ${modeactive ? '' : 'day'} lg:text-[15%] text-[12%]`}>
                  <div className={`moon ${modeactive ? '' : 'sun'}`}></div>
                </div>
              </div>
              <button
                onClick={() => setActive(!active)}
                name="hamburger"
                type="button"
                className={`block absolute right-4 lg:hidden ${
                  active ? "nabarline-active" : ""
                }`}
              >
                <span className="nabarline origin-top-left transition duration-300 ease-in-out"></span>
                <span className="nabarline transition duration-300 ease-in-out"></span>
                <span className="nabarline origin-bottom-left transition duration-300 ease-in-out"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
