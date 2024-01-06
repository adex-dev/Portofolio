import React, { useEffect, useState } from "react";
import { FaCss3Alt, FaHtml5, FaPhp, FaReact } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { BiLogoBootstrap, BiLogoTailwindCss } from "react-icons/bi";
import { DiCodeigniter } from "react-icons/di";
import { SiAdobephotoshop, SiLaragon, SiMariadb } from "react-icons/si";
import { GrCertificate } from "react-icons/gr";
import Profiles from "../module/Profiles";
import { useTranslation } from "react-i18next";
import Educationlist from "../component/Educationlist";

export const Resume = () => {
  const [t] = useTranslation("global")
  const [data, setData] = useState(null);
  const [certifikat, setCertifikat] = useState(null);
  let schoolIconStyles = { background: "#06D6A0" };
  let alamat = "experience.json";
  const selectedLanguage = t("bahasa");
  if (selectedLanguage === 'ID') {
    alamat = "experienceid.json";
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const menuData = await Educationlist(alamat);
        setData(menuData.data);
        setCertifikat(menuData.sertifikat);
      } catch (error) {
        setData([]); // Set data to an empty array in case of error
        setCertifikat([]); // Set data to an empty array in case of error
      }
    };

    fetchData();
  }, [alamat]);
  if (data === null) {
    return <span>Loading...</span>; // Show loading state
  }
  let Sosmeds = [
    {
        name: t("experience.line1"),
        svg: <svg role="img" className="w-14 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>{t("Experience.line1")}</title><path d="M17.12 7.694c4.3.056 6.808 2.693 3.96 6.3-1.307 1.662-3.517 3.303-6.465 4.373l-.422.144c-.278.09-.553.173-.823.258-.638.18-1.26.34-1.863.455-.645.134-1.268.229-1.87.298-.43.042-.844.07-1.245.078-2.743.07-4.806-.68-5.477-2.285-.81-1.919.83-4.592 4.116-6.627C4.597 11.661.188 13.96 0 17.256v.404a4.307 4.307 0 0 0 .193 1.029c.7 2.228 4.003 3.267 8.21 2.894a19.43 19.43 0 0 0 1.244-.147 24.08 24.08 0 0 0 3.733-.874c.137-.05.275-.09.414-.14.283-.09.561-.184.831-.29 3.64-1.322 6.342-3.087 7.921-5.101.898-1.155 1.364-2.236 1.454-3.185v-.723c-.26-2.403-3.064-3.815-6.88-3.43zm-2.788-1.192a1.237 1.237 0 0 0 .283-.033c.61-.152.908-.803.934-1.572.028-.815-.257-1.495-.934-1.592a.826.826 0 0 0-.18 0 1.111 1.111 0 0 0-1.065.79 2.526 2.526 0 0 0-.154.815 2.192 2.192 0 0 0 .154.954.993.993 0 0 0 .962.638zm-.013.273a2.946 2.946 0 0 0-.7.075l.057.077.103.185.085.196.07.2.046.206.036.208.02.217v.427l-.015.216v.213l-.028.216-.029.214-.041.216-.041.214-.041.208-.05.208-.04.201-.05.193-.048.188-.049.18-.041.172-.041.165-.02.105-.03.116-.025.126-.023.131-.026.14-.02.118v.025l-.029.155-.028.151-.02.16-.037.175-.02.167-.028.165-.021.175-.026.164-.023.175-.02.173-.021.172c.041.5.077.921.098 1.163a1.253 1.253 0 0 0 .167.61.772.772 0 0 0 .648.295.947.947 0 0 0 .597-.213 1.178 1.178 0 0 0 .278-.692c.11-.713.43-3.054.705-4.057.396-1.446 1.343-4.078-.983-4.278a2.259 2.259 0 0 0-.296-.016zm-2.83-.743h.016c.9 0 1.322-.829 1.322-1.84 0-1.01-.42-1.842-1.32-1.85h-.018c-.913 0-1.335.831-1.335 1.85 0 1.019.425 1.84 1.335 1.84zm-1.852 4.273c.082.352.167.679.237.97.283 1.155.56 3.84.663 4.65.103.811.389.991.97 1.045.574-.054.865-.226.963-1.044.097-.818.38-3.496.656-4.651.069-.291.159-.618.257-.97.257-1.06.463-2.316 0-3.108-.299-.515-.867-.854-1.863-.854-.995 0-1.58.34-1.87.854-.476.803-.27 2.048-.013 3.108zM8.402 6.469a1.237 1.237 0 0 0 .283.033.993.993 0 0 0 .952-.65 2.403 2.403 0 0 0 .152-.955 2.673 2.673 0 0 0-.152-.815 1.122 1.122 0 0 0-1.065-.79.803.803 0 0 0-.18 0c-.672.098-.962.772-.937 1.592.021.782.327 1.433.947 1.585zm-.288 8.654a1.13 1.13 0 0 0 .288.692.944.944 0 0 0 .594.214.772.772 0 0 0 .651-.296 1.451 1.451 0 0 0 .168-.61l.095-1.155v-.015l-.02-.173-.021-.172-.029-.175-.02-.165-.02-.175-.027-.164-.033-.157-.026-.165-.026-.17-.02-.151-.028-.155v-.02L9.616 12l-.028-.14-.028-.131-.02-.126-.026-.116-.029-.105-.036-.165-.049-.172-.04-.18-.047-.188-.049-.193-.049-.2-.041-.222-.049-.208-.041-.214-.036-.214-.026-.213-.028-.216-.02-.214V8.14l.02-.216.033-.208.05-.206.061-.2.09-.196.105-.186.055-.077a2.977 2.977 0 0 0-.7-.074 2.218 2.218 0 0 0-.296 0c-2.315.2-1.379 2.83-.983 4.278.275 1.014.594 3.355.705 4.067z"/></svg>,
        bio:t("experience.low1")
      },
    {
        name: t("experience.line2"),
        svg:<svg xmlns="http://www.w3.org/2000/svg" role="img" className="w-14 fill-current" viewBox="0 0 24 24" ><title>{t("experience.line2")}</title><path d="M15.999 8.5h2c0-2.837-2.755-4.131-5-4.429V2h-2v2.071c-2.245.298-5 1.592-5 4.429 0 2.706 2.666 4.113 5 4.43v4.97c-1.448-.251-3-1.024-3-2.4h-2c0 2.589 2.425 4.119 5 4.436V22h2v-2.07c2.245-.298 5-1.593 5-4.43s-2.755-4.131-5-4.429V6.1c1.33.239 3 .941 3 2.4zm-8 0c0-1.459 1.67-2.161 3-2.4v4.799c-1.371-.253-3-1.002-3-2.399zm8 7c0 1.459-1.67 2.161-3 2.4v-4.8c1.33.239 3 .941 3 2.4z"></path></svg>,
        bio:t("experience.low2")
      },
    {
        name: t("experience.line3"),
        svg:<svg xmlns="http://www.w3.org/2000/svg" role="img" className="w-14 fill-current" viewBox="0 0 24 24"><title>{t("experience.line3")}</title><path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path></svg>,
        bio:t("experience.low3")
      },
    {
        name: t("experience.line4"),
        svg:<svg xmlns="http://www.w3.org/2000/svg" role="img" className="w-14 fill-current" viewBox="0 0 24 24"><title>{t("experience.line4")}</title><path d="M20.1 14.56a2.07 2.07 0 0 0-.47-.18V9.62a1.64 1.64 0 0 0 .48-.18 1.78 1.78 0 0 0-1.78-3.09 1.62 1.62 0 0 0-.41.32l-4.11-2.38a1.7 1.7 0 0 0 .07-.51 1.78 1.78 0 0 0-3.56 0 1.7 1.7 0 0 0 .07.51L6.28 6.66a1.58 1.58 0 0 0-.41-.31 1.78 1.78 0 0 0-1.78 3.09 1.64 1.64 0 0 0 .48.18v4.76a2.07 2.07 0 0 0-.47.18 1.78 1.78 0 1 0 1.78 3.09 1.72 1.72 0 0 0 .4-.31l4.11 2.37a1.7 1.7 0 0 0-.07.51 1.78 1.78 0 0 0 3.56 0 1.69 1.69 0 0 0-.09-.56l4.09-2.36a1.7 1.7 0 0 0 .44.35 1.78 1.78 0 1 0 1.78-3.09zM6.72 15.69a1.72 1.72 0 0 0-.19-.47 1.53 1.53 0 0 0-.31-.4l5.38-9.33a1.82 1.82 0 0 0 1 0l5.4 9.33a1.53 1.53 0 0 0-.31.4 1.72 1.72 0 0 0-.19.47zM17.5 7.4a1.81 1.81 0 0 0 .17 1.38 1.75 1.75 0 0 0 1.12.84v4.76h-.07l-5.39-9.31.05-.07zM10.82 5a.12.12 0 0 0 0 .05L5.48 14.4h-.07V9.62a1.75 1.75 0 0 0 1.12-.84A1.81 1.81 0 0 0 6.7 7.4zm2.6 14a1.78 1.78 0 0 0-1.32-.58 1.75 1.75 0 0 0-1.28.54L6.7 16.6v-.06h10.78v.11z"></path></svg>,
        bio:t("experience.low4")
      },
  ];
  return (
    <>
      <div className="lg:container mx-auto w-full px-4 lg:h-[90vh] min-h-[90vh]  lg:flex lg:py-24">
      <div className="flex lg:flex-row flex-col w-full lg:space-x-3  h-full lg:py-4 lg:mt-3">
        <Profiles/>
          <div className=" border-slate-400 dark:border-white border-[1px] lg:h-[83vh] min-h-[83vh] overflow-auto lg:w-[80%] max-w-full  py-6">
            <div className="lg:container w-full">
              <p className="uppercase text-lg text-primary  lg:text-2xl font-inter text-center underline">
                <span className="text-slate-400 dark:text-white">{t("experience.line5")}</span>&nbsp;
                <span className="text-primary">{t("experience.line6")}</span>
              </p>
              <div className="w-full leading-relaxed">
                <VerticalTimeline>
                  {data.map((element, i) => (
                    <VerticalTimelineElement
                      key={element.id}
                      date={element.date}
                      dateClassName="date"
                      iconStyle={schoolIconStyles}
                      icon={<MdWork size={50}></MdWork>}
                    >
                      <h3 className="vertical-timeline-element-title lg:w-full lg:!text-base !text-xs p-2 text-balance  !font-dominemedium">
                        {element.title}
                      </h3>
                      <h5 className="vertical-timeline-element-subtitle">
                        {element.location}
                      </h5>
                      <p className="text-secondary dark:text-slate-600 !text-xs">
                        {element.bio}
                      </p>
                    </VerticalTimelineElement>
                  ))}
                </VerticalTimeline>
              </div>
              <p className="uppercase text-lg text-primary pt-12  lg:text-2xl font-inter text-center underline">
                <span className="text-slate-400 dark:text-white">{t("experience.line7")}</span>&nbsp;
                <span className="text-primary">{t("experience.line8")}</span>
              </p>
              <div className="leading-relaxed w-full">
                <VerticalTimeline>
                  {certifikat.map((certifikats, i) => (
                    <VerticalTimelineElement
                      key={i}
                      date={certifikats.date}
                      dateClassName="date"
                      iconStyle={schoolIconStyles}
                      icon={<GrCertificate size={50}></GrCertificate>}
                    >
                      <h3 className="vertical-timeline-element-title lg:w-full lg:!text-base !text-xs p-2 text-balance  !font-dominemedium">
                        {certifikats.title}
                      </h3>
                      <p className="text-secondary dark:text-slate-600 !text-xs">
                        {certifikats.bio}
                      </p>
                    </VerticalTimelineElement>
                  ))}
                </VerticalTimeline>
              </div>
              <p className="uppercase text-lg text-primary  lg:text-2xl font-inter py-4 text-center underline">
                <span className="text-slate-400 dark:text-white">{t("experience.line9")}</span>&nbsp;
                <span className="text-primary">{t("experience.line10")}</span>
              </p>
              <p className="inline-flex gap-2 mx-auto w-full text-xs italic text-primary mb-4 capitalize text-primary lg:text-center text-justify justify-center font-dominemedium lg:px-8 px-2">
              {t("experience.line11")}
              </p>
              <div className="grid gap-4 grid-cols-3 lg:mx-4 mx-2 lg:px-8 px-4 lg:grid-cols-4">
                <div className="flex flex-col text-primary justify-center items-center">
                  <FaCss3Alt size={50} />
                  <span className="uppercase text-primary font-dominebold text-base">
                    CSS
                  </span>
                </div>
                <div className="flex flex-col text-primary justify-center items-center">
                  <BiLogoTailwindCss size={50} />
                  <span className="uppercase text-primary font-dominebold text-base">
                    TAILWIND
                  </span>
                </div>
                <div className="flex flex-col text-primary justify-center items-center">
                  <BiLogoBootstrap size={50} />
                  <span className="uppercase text-primary font-dominebold text-base">
                    Bootstrap
                  </span>
                </div>
                <div className="flex flex-col text-primary justify-center items-center">
                  <FaHtml5 size={50} />
                  <span className="uppercase text-primary font-dominebold text-base">
                    HTML
                  </span>
                </div>
                <div className="flex flex-col text-primary justify-center items-center">
                  <FaPhp size={50} />
                  <span className="uppercase text-primary font-dominebold text-base">
                    PHP
                  </span>
                </div>
                <div className="flex flex-col text-primary justify-center items-center">
                  <DiCodeigniter size={50} />
                  <span className="uppercase text-primary font-dominebold text-base">
                    CODEIGNITER
                  </span>
                </div>
                <div className="flex flex-col text-primary justify-center items-center">
                  <FaReact size={50} />
                  <span className="uppercase text-primary font-dominebold text-base">
                    REACT
                  </span>
                </div>
                <div className="flex flex-col text-primary justify-center items-center">
                  <SiMariadb size={50} />
                  <span className="uppercase text-primary font-dominebold text-base">
                    MARIA DB
                  </span>
                </div>
              </div>
              <p className="uppercase text-lg text-primary  lg:text-2xl font-inter py-4 text-center underline">
                <span className="text-slate-400 dark:text-white">{t("experience.line13")}</span>{" "}
                <span className="text-primary -mx-2">{t("experience.line14")}</span>
              </p>
              <p className="inline-flex gap-2 mx-auto w-full text-xs italic text-primary mb-4 capitalize text-primary lg:text-center text-justify justify-center font-dominemedium lg:px-8 px-2">
              {t("experience.line12")}
              </p>
              <div className="w-full flex flex-wrap lg:px-8 px-2">
              {Sosmeds.map((sosmed, index) => (
                <div key={index} className="flex flex-col px-6 justify-center mb-3 w-full lg:w-1/2">
                  <div className="flex justify-center items-center w-full">
                    <i className="h-24 flex items-center mb-3 w-24 justify-center text-white rounded-full bg-primary text-base text-center">
                      {sosmed.svg}
                    </i>
                  </div>
                  <div className="flex items-center justify-center mb-3 flex-wrap">
                    <span className="w-full text-base lg:text-lg text-primary text-center capitalize font-semibold p-[2%]">
                      {sosmed.name}
                    </span>
                    <hr className="w-1/2 h-1 bg-primary"></hr>
                  </div>
                  <span className="!text-center text-xs font-dominemedium w-full  text-primary mx-4">
                    {sosmed.bio}
                  </span>
                </div>
              ))}
              </div>
              <p className="uppercase text-lg text-primary  lg:text-lg font-inter py-4 text-center underline">
                <span className="text-slate-400 dark:text-white">{t("experience.line15")}</span>{" "}
                <span className="text-primary">{t("experience.line16")}</span>
              </p>
              <div className="grid gap-4 grid-cols-4 lg:mx-4 mx-2 lg:px-8 px-0 lg:grid-cols-10">
                <i className="flex flex-col text-primary justify-center items-center">
                  <FaCss3Alt size={30} />
                </i>
                <i className="flex flex-col text-primary justify-center items-center">
                  <BiLogoTailwindCss size={30} />
                </i>
                <i className="flex flex-col text-primary justify-center items-center">
                  <BiLogoBootstrap size={30} />
                </i>
                <i className="flex flex-col text-primary justify-center items-center">
                  <FaHtml5 size={30} />
                </i>
                <i className="flex flex-col text-primary justify-center items-center">
                  <FaPhp size={30} />
                </i>
                <i className="flex flex-col text-primary justify-center items-center">
                  <DiCodeigniter size={30} />
                </i>
                <i className="flex flex-col text-primary justify-center items-center">
                  <FaReact size={30} />
                </i>
                <i className="flex flex-col text-primary justify-center items-center">
                  <SiMariadb size={30} />
                </i>
                <i className="flex flex-col text-primary justify-center items-center">
                  <SiAdobephotoshop size={30} />
                </i>
                <i className="flex flex-col text-primary justify-center items-center">
                  <SiLaragon size={30} />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
