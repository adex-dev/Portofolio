import React from "react";
import { useTranslation } from "react-i18next";
import Profiles from "../module/Profiles";

export const Blogs = () => {
  const [t] = useTranslation("global")
  return (
    <>
      <div className="lg:container mx-auto w-full px-4 lg:h-[90vh] min-h-[90vh]  lg:flex lg:py-24">
      <div className="flex lg:flex-row flex-col w-full lg:space-x-3  h-full lg:py-4 lg:mt-3">
        <Profiles/>
          <div className=" border-slate-400 dark:border-white border-[1px] lg:h-[83vh] min-h-[83vh] overflow-auto lg:w-[80%] max-w-full  py-6">
            <div className="container px-4 lg:px-0">
              <p className="uppercase text-lg text-primary  lg:text-2xl font-inter text-center underline">
                <span className="text-slate-400 dark:text-white">{t("blog.line4")}</span>
                <span className="text-primary">{t("blog.line5")}</span>
              </p>
              <p className="inline-flex mb-16 gap-2 mx-auto w-full text-xs italic text-primary  capitalize text-primary lg:text-center text-justify justify-center font-dominemedium lg:px-8 px-2">
              {t("blog.line3")}
              </p>
              <div>
                <p className="capitalize text-lg text-primary  font-dominesemi text-center">
                  <span className="text-primary">
                    Create Splash Screen neatbeans
                  </span>
                </p>
                <div className="group lg:h-[500px] h-[300px] mx-auto block items-center pt-5 w-full lg:w-3/4">
                  <div className="relative h-full  w-full rounded-xl shadow-xl">
                    <div className="absolute inset-0">
                      <iframe
                        title="ok"
                        className="h-full w-full rounded-xl aspect-video  shadow-xl shadow-black/80"
                        src="https://www.youtube.com/embed/qcTTlFkDxo0?si=3f2_qUslClVmA8jT"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-12">
                <p className="capitalize text-lg text-primary  font-dominesemi text-center">
                  <span className="text-primary">
                  Membuat jam digital dengan neatbeans
                  </span>
                </p>
                <div className="group lg:h-[500px] h-[300px] mx-auto block items-center pt-5 w-full lg:w-3/4">
                  <div className="relative h-full  w-full rounded-xl shadow-xl">
                    <div className="absolute inset-0">
                      <iframe
                        title="ok"
                        className="h-full w-full rounded-xl aspect-video  shadow-xl shadow-black/80"
                        src="https://www.youtube.com/embed/OpAXx77MyYw"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="https://blog.akmadnudin.com/" target="_blank" rel="noreferrer" className="text-primary w-full block mx-auto font-dominebold uppercase text-center text-xs cursor-pointer" >visit : www.blog.akmadnudin.com</a>
          </div>
        </div>
      </div>
    </>
  );
};
