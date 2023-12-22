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

export const Profile = () => {
  const [data, setData] = useState(null);
  let schoolIconStyles = { background: "#06D6A0" };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const menuData = await Educationlist();
        setData(menuData.data);
      } catch (error) {
        setData([]); // Set data to an empty array in case of error
      }
    };

    fetchData();
  }, []);
  if (data === null) {
    return <div>Loading...</div>; // Show loading state
  }
  return (
    <>
      <div className="lg:container mx-auto w-full px-4 lg:h-[90vh] min-h-[90vh]  lg:flex py-12 lg:py-24">
        <div className="flex lg:flex-row flex-col w-full lg:space-x-3  h-full lg:py-4 lg:mt-3">
          <Profiles/>
          <div className=" border-slate-400 dark:border-white border-[1px] lg:h-[83vh] min-h-[83vh] overflow-auto lg:w-[80%] max-w-full  py-6">
            <div className="container">
              <p className="uppercase text-lg text-primary  lg:text-2xl font-dominebold text-center underline">
                <span className="text-slate-400 dark:text-white">About</span>{" "}
                <span className="text-primary">ME</span>
              </p>
              <div className="flex flex-col px-3 lg:px-32 py-4 text-left">
                <div className="flex justify-between p-2">
                  <div className="text-primary uppercase space-x-4 flex items-center ">
                    <span>
                      <BiSolidUserDetail size={30} />
                    </span>
                    <span>NAME</span>
                  </div>
                  <div className="text-secondary">AKMAD NUDIN</div>
                </div>
                <div className="flex justify-between p-2">
                  <div className="text-primary uppercase space-x-4 flex items-center ">
                    <span>
                      <FaBirthdayCake size={25} />
                    </span>
                    <span>Date Of Birth</span>
                  </div>
                  <div className="text-secondary">24 October</div>
                </div>
                <div className="flex justify-between p-2">
                  <div className="text-primary uppercase space-x-4 flex items-center ">
                    <span>
                      <FaPhoneVolume size={25} />
                    </span>
                    <span>Phone</span>
                  </div>
                  <div className="text-secondary">+628-8122012883</div>
                </div>
                <div className="flex justify-between p-2">
                  <div className="text-primary uppercase space-x-4 flex items-center ">
                    <span>
                      <MdAlternateEmail size={25} />
                    </span>
                    <span>EMAIL</span>
                  </div>
                  <div className="text-secondary">akmadnudin.inc@gmail.com</div>
                </div>
                <div className="flex justify-between p-2">
                  <div className="text-primary uppercase space-x-4 flex items-center ">
                    <span>
                      <FaMapMarkedAlt size={25} />
                    </span>
                    <span>Address</span>
                  </div>
                  <div className="text-secondary">Bekasi,West Java</div>
                </div>
              </div>
              <p className="uppercase text-lg text-primary  lg:text-2xl font-dominebold text-center underline">
                <span className="text-slate-400 dark:text-white">My</span>{" "}
                <span className="text-primary">education</span>
              </p>
              <div className="">
                <VerticalTimeline>
                  {data.map((element, i) => (
                    <VerticalTimelineElement
                      key={element.id}
                      date={element.date}
                      dateClassName="date"
                      iconStyle={schoolIconStyles}
                      icon={<IoIosSchool size={50}></IoIosSchool>}
                    >
                      <h3 className="vertical-timeline-element-title !text-base !font-dominemedium">
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
              <p className="uppercase text-lg text-primary  lg:text-2xl font-dominebold py-8 text-center underline">
                <span className="text-slate-400 dark:text-white">My</span>{" "}
                <span className="text-primary">Hobbies</span>
              </p>
              <p className="inline-flex gap-2 mx-4 text-xs italic text-primary mb-4 capitalize text-primary lg:text-center text-justify justify-center font-dominemedium lg:px-8 px-2">
                Enjoy the storyline deeper by reading a book, or sometimes enjoy
                some thrilling action scenes just to refresh myself from the
                routine. Traveling to a beautiful place then take several
                pictures can be done to find new ideas.
              </p>
              <div className="grid gap-4 grid-cols-2 mx-4 px-8 lg:grid-cols-4">
                <div className="flex flex-col text-primary justify-center items-center">
                  <FaBookOpen size={50} />
                  <span className="uppercase text-primary font-dominebold text-base">
                    BOOK
                  </span>
                </div>
                <div className="flex flex-col text-primary justify-center items-center">
                  <BiSolidMoviePlay size={50} />
                  <span className="uppercase text-primary font-dominebold text-base">
                    Movie
                  </span>
                </div>
                <div className="flex flex-col text-primary justify-center items-center">
                  <FaCode size={50} />
                  <span className="uppercase text-primary font-dominebold text-base">
                    coding
                  </span>
                </div>
                <div className="flex flex-col text-primary justify-center items-center">
                  <MdCardTravel size={50} />
                  <span className="uppercase text-primary font-dominebold text-base">
                    Traveling
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
