import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Portofolios from "../component/Portofolios";
import Profiles from "../module/Profiles";

export const Portofolio = () => {
  const navigate = useNavigate();
  const [items,setItems] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const menuData = await Portofolios();
        setItems(menuData.data);
      } catch (error) {
        setItems([]); // Set data to an empty array in case of error
      }
    };

    fetchData();
  }, []);
  if (items === null) {
    return <div>Loading...</div>; // Show loading state
  }
  const handleClick = (item) => {
    // Set the clicked item data in state
    navigate("/detail", { state: { itemData: item } });
  };
  return (
    <>
      <div className="lg:container mx-auto w-full px-4 lg:h-[90vh] min-h-[90vh]  lg:flex py-12 lg:py-24">
        <div className="flex lg:flex-row flex-col w-full lg:space-x-3  h-full lg:py-4 lg:mt-3">
          <Profiles/>
          <div className=" border-slate-400 dark:border-white border-[1px] lg:h-[83vh] min-h-[83vh] overflow-auto lg:w-[80%] max-w-full  py-6">
            <div className="container">
              <p className="uppercase text-lg text-primary  lg:text-2xl font-dominebold text-center underline">
                <span className="text-slate-400 dark:text-white">My</span>{" "}
                <span className="text-primary">Portofolio</span>
              </p>
              <p className="inline-flex gap-2 mx-auto w-full text-xs italic text-primary mb-4 capitalize text-primary lg:text-center text-justify justify-center font-dominemedium lg:px-8 px-2">
                Turning Dreams into Reality - Unleashing the Power of Innovation
                in Every Project
              </p>
              <div className="grid gap-4 grid-cols-1 space-x-2 px-4  lg:grid-cols-3">
                {items.map((item, id) => (
                  <div
                    key={id}
                    className="group h-96 w-full [perspective:1000px]"
                  >
                    <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      <div className="absolute inset-0">
                        <img
                          className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/80" loading="lazy"
                          src={item.gambar}
                          alt={item.judul}
                        />
                      </div>
                      <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 text-white/75 px-6 text-center  [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-end py-6">
                          <h1 className="text-3xl font-dominebold uppercase">
                            {item.judul}
                          </h1>
                          <p className="text-lg font-dominesemi">
                            {item.subdeskription}
                          </p>
                          <button
                            onClick={() => handleClick(item)}
                            className="h-full mt-3 cursor-pointer hover:bg-teal-600 p-2 rounded-xl bg-teal-400 text-white dark:bg-slate-600 dark:hover:bg-slate-400 shadow-md dark:text-white "
                          >
                            View More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
