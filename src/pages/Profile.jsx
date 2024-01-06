import React, { useEffect, useState } from "react";
import { BiSolidMoviePlay, BiSolidUserDetail } from "react-icons/bi";
import {
  FaBirthdayCake,
  FaBookOpen,
  FaCode,
  FaMapMarkedAlt,
  FaPhoneVolume,
} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdCardTravel } from "react-icons/md";

import { IoIosSchool } from "react-icons/io";
import Educationlist from "../component/Educationlist";
import Profiles from "../module/Profiles";
import { useTranslation } from "react-i18next";

export const Profile = () => {
  const [data, setData] = useState(null);
  const [t] = useTranslation("global")
  let schoolIconStyles = { background: "#06D6A0" };
  let alamat = "education.json";
  const selectedLanguage = t("bahasa");
  
  if (selectedLanguage === 'ID') {
    alamat = "educationid.json";
  }
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const menuData = await Educationlist(alamat);
        setData(menuData.data);
      } catch (error) {
        setData([]); // Set data to an empty array in case of error
      }
    };
  
    fetchData();
  }, [alamat]);
  
  if (data === null) {
    return <span>Loading...</span>; // Show loading state
  }
  return (
    <>
      <div className="lg:container mx-auto w-full px-4 lg:h-[90vh] min-h-[90vh]  lg:flex lg:py-24">
        <div className="flex lg:flex-row flex-col w-full lg:space-x-3  h-full lg:py-4 lg:mt-3">
          <Profiles/>
          <div className=" border-slate-400 dark:border-white border-[1px] lg:h-[83vh] min-h-[83vh] overflow-auto lg:w-[80%] max-w-full  py-6">
            <div className="lg:container w-full">
              <p className="uppercase text-lg text-primary font-inter  lg:text-2xl  text-center underline">
                <span className="text-slate-400 dark:text-white">{t("profil.line1")}</span>&nbsp;
                <span className="text-primary">{t("profil.line2")}</span>
              </p>
              <div className="flex flex-col px-3 lg:px-32 py-4 text-left lg:text-base text-xs">
                <div className="flex justify-between p-2 items-center">
                  <div className="text-primary uppercase space-x-4 flex items-center ">
                    <span>
                      <BiSolidUserDetail size={30} />
                    </span>
                    <span>{t("profil.line3")}</span>
                  </div>
                  <h5 className="text-secondary">AKMAD NUDIN</h5>
                </div>
                <div className="flex justify-between p-2">
                  <div className="text-primary uppercase space-x-4 flex items-center ">
                    <span>
                      <FaBirthdayCake size={25} />
                    </span>
                    <span>{t("profil.line4")}</span>
                  </div>
                  <h5 className="text-secondary">24 October</h5>
                </div>
                <div className="flex justify-between p-2">
                  <div className="text-primary uppercase space-x-4 flex items-center ">
                    <span>
                      <FaPhoneVolume size={25} />
                    </span>
                    <span>{t("profil.line5")}</span>
                  </div>
                  <h5 className="text-secondary">+628-8122012883</h5>
                </div>
                <div className="flex justify-between p-2">
                  <div className="text-primary uppercase space-x-4 flex items-center ">
                    <span>
                      <MdAlternateEmail size={25} />
                    </span>
                    <span>{t("profil.line6")}</span>
                  </div>
                  <h5 className="text-secondary">akmadnudin.inc@gmail.com</h5>
                </div>
                <div className="flex justify-between p-2">
                  <div className="text-primary uppercase space-x-4 flex items-center ">
                    <span>
                      <FaMapMarkedAlt size={25} />
                    </span>
                    <span>{t("profil.line7")}</span>
                  </div>
                  <h5 className="text-secondary">Bekasi,{t("profil.line8")}</h5>
                </div>
              </div>
              <p className="uppercase text-lg text-primary  lg:text-2xl font-inter text-center underline">
                <span className="text-slate-400 dark:text-white">{t("profil.line10")}</span> &nbsp;
                <span className="text-primary">{t("profil.line9")}</span>
              </p>
              <div className="leading-relaxed w-full">
                <VerticalTimeline>
                  {data.map((element, i) => (
                    <VerticalTimelineElement
                      key={element.id}
                      date={element.date}
                      dateClassName="date"
                      iconStyle={schoolIconStyles}
                      icon={<IoIosSchool size={50}></IoIosSchool>}
                    >
                      <h3 className="vertical-timeline-element-title lg:!text-base !text-xs p-2 text-balance  !font-dominemedium">
                        {element.title}
                      </h3>
                      <h5 className="vertical-timeline-element-subtitle lg:!text-base !text-xs pt-3">
                        {element.location}
                      </h5>
                      <p className="text-secondary dark:text-slate-600 lg:!text-sm !text-xs">
                        {element.bio}
                      </p>
                    </VerticalTimelineElement>
                  ))}
                </VerticalTimeline>
              </div>
              <p className="uppercase text-lg text-primary  lg:text-2xl font-inter lg:py-8 py-3 text-center underline">
                <span className="text-slate-400 dark:text-white">{t("profil.line11")}</span>&nbsp;
                <span className="text-primary">{t("profil.line9")}</span>
              </p>
              <p className="inline-flex gap-2 lg:mx-4 mx-0 text-xs italic text-primary mb-4 capitalize text-primary lg:text-center text-justify justify-center font-dominemedium lg:px-8 px-2">
              {t("profil.line12")}
              </p>
              <div className="grid gap-4 grid-cols-2 lg:mx-4 mx-2 px-8 lg:grid-cols-4">
                <div className="flex flex-col text-primary justify-center items-center">
                  <FaBookOpen size={50} />
                  <span className="uppercase text-primary font-inter text-base">
                  {t("profil.line13")}
                  </span>
                </div>
                <div className="flex flex-col text-primary justify-center items-center">
                  <BiSolidMoviePlay size={50} />
                  <span className="uppercase text-primary font-inter text-base">
                  {t("profil.line14")}
                  </span>
                </div>
                <div className="flex flex-col text-primary justify-center items-center">
                  <FaCode size={50} />
                  <span className="uppercase text-primary font-inter text-base">
                  {t("profil.line15")}
                  </span>
                </div>
                <div className="flex flex-col text-primary justify-center items-center">
                  <MdCardTravel size={50} />
                  <span className="uppercase text-primary font-inter text-base">
                  {t("profil.line16")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
