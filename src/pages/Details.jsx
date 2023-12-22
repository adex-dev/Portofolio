import React, { useEffect } from "react";
import "react-vertical-timeline-component/style.min.css";
import { useLocation, useNavigate } from "react-router-dom";
export const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { itemData } = location.state || { itemData: null };

  useEffect(() => {
    // If there's no item data, navigate back to the home page
    if (!itemData) {
      navigate("/");
    }
  }, [navigate, itemData]);

  return (
    <>
      {itemData && (
        <div className="lg:container mx-auto w-full px-4 lg:h-[90vh] min-h-[90vh]  lg:flex py-24 lg:py-24">
          <div className="flex lg:flex-row flex-col w-full lg:space-x-3  h-full lg:py-4 lg:mt-3">
            <div className=" border-slate-400 dark:border-white border-[1px] h-[83vh] overflow-auto lg:w-full max-w-full  py-6">
              <div className="container">
                <p className="uppercase text-lg text-primary  lg:text-2xl font-dominebold text-center underline">
                  <span className="text-primary">{itemData.judul}</span>
                </p>
                <p className="inline-flex gap-2 mx-auto w-full text-xs italic text-primary mb-4 capitalize text-primary lg:text-center text-justify justify-center font-dominemedium lg:px-8 px-2">
                  {itemData.subdeskription}
                </p>
                <div className="flex flex-col px-2 items-center w-full ">
                  <div className="group lg:h-[450px] h-[300px] items-center p-8 lg:w-3/5 w-full">
                    <div className="relative h-full w-full rounded-xl shadow-xl">
                      <div className="absolute inset-0">
                        <img
                          className="h-full w-full rounded-xl object-cover  shadow-xl shadow-black/80" loading="lazy"
                          src={itemData.gambar}
                          alt={itemData.judul}
                        />
                      </div>
                    </div>
                  </div>
                  <hr className="bg-teal-500 dark:bg-white h-[2px] mb-6 w-1/2 mx-auto text-center"></hr>
                  <p className="inline-flex gap-2 mx-auto w-full text-xs italic text-primary mb-4 capitalize text-primary lg:text-center text-justify justify-center font-dominemedium lg:px-8 px-2">
                    {itemData.description}
                  </p>
                  <p className="text-center text-primary text-lg font-dominebold uppercase">
                    Role
                  </p>
                  <hr className="bg-teal-500 dark:bg-white h-[2px] mb-6 w-1/3 mx-auto text-center"></hr>
                  <p className="text-center text-primary text-xs font-dominesemi capitalize mb-4">
                    {itemData.role}
                  </p>
                  <p className="text-center text-primary text-lg font-dominebold uppercase">
                    Technology
                  </p>
                  <hr className="bg-teal-500 dark:bg-white h-[2px] mb-6 w-1/3 mx-auto text-center"></hr>
                  <div className="grid grid-cols-4 gap-2 w-full lg:grid-cols-[repeat(auto-fit,_16.666666%)] m-auto justify-center">
                  {itemData.technologi.map((tk, ik) => (
                      <img
                        key={ik}
                        src={tk.url}
                        alt={itemData.judul}
                        className="lg:h-14 h-12 max-w-sm w-full object-contain"
                        loading="lazy"
                      />
                    ))}
                  </div>
                  <p className="text-center text-primary text-lg font-dominebold uppercase">
                    Tools
                  </p>
                  <hr className="bg-teal-500 dark:bg-white h-[2px] mb-6 w-1/3 mx-auto text-center"></hr>
                  <div className="container mx-auto block w-full">
                  <div className="flex items-center justify-center shrink-0 w-full flex-wrap ">
                    {itemData.toolkits.map((tl, it) => (
                      <img
                        key={it}
                        src={tl.uri}
                        alt={itemData.judul}
                        className="lg:h-14 h-12 w-1/2 lg:w-1/6 object-contain"
                        loading="lazy"
                      />
                    ))}
                  </div>
                  </div>
                  <div className="mt-10">
                    <button onClick={()=>navigate('/portofolio')} className="bg-primary rounded p-2 h-9 w-40">Back</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
