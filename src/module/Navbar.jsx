import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [t, i18next] = useTranslation("global");  
  const [langvalue, setLangvalue] = useState(false);
  const location = useLocation();
  const isNavLinkActive = (path) => {
    return location.pathname === path ? "active" : "";
  };
  const [active, setActive] = useState(false);
  const [modeactive, setModeactive] = useState("");

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
      case "dark":
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

  const handlechange = (lang) => {
    sessionStorage.setItem("bahasa", lang);
    cekbahasa();
  };

  const cekbahasa = useCallback(() => {
    const bahasa = sessionStorage.getItem("bahasa");
    if (bahasa === "ID") {
      setLangvalue(false);
      i18next.changeLanguage("id");
    } else {
      setLangvalue(true);
      i18next.changeLanguage("en");
    }
  }, [setLangvalue, i18next]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    cektema();
    cekbahasa();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [cektema, cekbahasa]);

  const Links = [
    { name: t("navbar.line1"), link: "/" },
    { name: t("navbar.line2"), link: "/profile" },
    { name: t("navbar.line3"), link: "/resume" },
    { name: t("navbar.line4"), link: "/portofolio" },
    { name: t("navbar.line5"), link: "/blogger" },
    { name: t("navbar.line6"), link: "/contact" },
  ];

  return (
    <header className="bg-transparent absolute dark:bg-slate-800 top-0 left-0 w-full flex items-center z-10">
      <div className="lg:container w-full lg:mx-auto ">
        <div className="flex justify-between relative">
          <div className="px-2">
            <a
              href="/"
              className="font-bold uppercase font-dominebold text-xs lg:text-lg text-primary block py-6"
            >
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
                      className={`text-sm uppercase lg:group-hover:border-b-2 group-hover:border-white cursor-pointer py-2 mx-8 group-hover:text-primary flex ${isNavLinkActive(
                        link.link
                      )}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center">
              <div className="flex items-center lg:!w-[2em] lg:!h-[2em] !w-7 !h-7">
                <ReactCountryFlag
                  countryCode="ID"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  onClick={() => handlechange("ID")}
                  svg
                  className={`border-[1px]  rounded-full border-black cursor-pointer hover:opacity-80  ${
                    langvalue ? "opacity-40" : "opacity-100"
                  }`}
                  title="INDONESIA"
                />
                <ReactCountryFlag
                  countryCode="US"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  onClick={() => handlechange("US")}
                  svg
                  className={`cursor-pointer border-[1px]  rounded-full border-black  hover:opacity-80 mx-2  ${
                    langvalue ? "opacity-100" : "opacity-40"
                  }`}
                  title="US"
                />
              </div>
              <div className="mx-6">
                <div
                  onClick={toggleTheme}
                  className={`tdnn ${
                    modeactive ? "" : "day"
                  } lg:text-[15%] text-[12%]`}
                >
                  <div className={`moon ${modeactive ? "" : "sun"}`}></div>
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
