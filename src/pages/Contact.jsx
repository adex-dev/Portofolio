import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Alert from "../module/Alert";
import Sendemail from "../component/Sendemail";
import Profiles from "../module/Profiles";

export const Contact = () => {
  const [t] = useTranslation("global")
  const [email, setEmail] = useState("");
  const [nama, setNama] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  useEffect(()=>{
    setTimeout(() => {
      setError("")
    }, 8000)
  },[error])
  const handleInputChange = (e, type) => {
    switch (type) {
      case "nama":
        setNama(e.target.value);
        break;
      case "message":
        setMessage(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!nama || !email || !message) {
      setError("All has Left Blank");
      return; 
    }else if (!nama) {
      setError("Name has Left Blank");
       return; 
    }else if (!message) {
      setError("Message has Left Blank");
       return; 
    }else if (!email) {
      setError("Email has Left Blank");
       return; 
    }else{
      try {
        const response = await Sendemail({ nama, email, message });
        const jsonData = response;
        if (response && jsonData.respon === 200) {
          Alert({
            judul: "Success!",
            deskripsi: jsonData.data.message,
            aksi: "success",
          });
  
          // Clear the form fields
          setNama("");
          setEmail("");
          setMessage("");
        } else {
          Alert({
            judul: "Error!",
            deskripsi: "Data sent unsuccessfully",
            aksi: "error",
          });
        }
      } catch (error) {
        Alert({
          judul: "Error!",
          deskripsi: "Failed to send data",
          aksi: "error",
        });
      }
    }
  };
  return (
    <>
      <div className="lg:container mx-auto w-full px-4 lg:h-[90vh] min-h-[90vh]  lg:flex lg:py-24">
      <div className="flex lg:flex-row flex-col w-full lg:space-x-3  h-full lg:py-4 lg:mt-3">
        <Profiles/>
          <div className=" border-slate-400 dark:border-white border-[1px] lg:h-[83vh] min-h-[83vh] overflow-auto lg:w-[80%] max-w-full  py-6">
            <div className="container px-4 lg:px-0">
              <p className="uppercase text-lg text-primary  lg:text-2xl font-inter text-center underline">
                <span className="text-slate-400 dark:text-white">Contact</span>
                <span className="text-primary">Person</span>
              </p>
              <p className="inline-flex mb-16 gap-2 mx-auto w-full text-xs italic text-primary  capitalize text-primary lg:text-center text-justify justify-center font-dominemedium lg:px-8 px-2">
              {t("portfolio.line3")}
              </p>
              <div>
                <div className="group lg:min-h-[500px] min-h-[300px] mx-auto flex items-center pt-5 w-full lg:w-3/4">
                  <div className="relative h-full flex items-center justify-center  w-full rounded-xl shadow-xl  mx-auto">
                  <form
                    onSubmit={handleSubmit}
                    className="w-full lg:w-full max-w-xl"
                  >
                    <div className="w-full mb-5 relative max-w-full px-4">
                    {error !== "" ? (
                        <div className="alert w-[90%] -top-9 absolute alert-error flex justify-start">
                          <span className="">{error}</span>
                        </div>
                    ) :""}
                    </div>
                    <div className="w-full mb-8 px-4">
                      <label
                        htmlFor="name"
                        className="text-base flex justify-start mb-3 text-left text-primary"
                      >
                        <b>Nama</b>
                      </label>
                      <input
                        type="text"
                        autoComplete="off"
                        value={nama}
                        onChange={(e) => handleInputChange(e, "nama")}
                        id="name"
                        placeholder="insert Your Name"
                        className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                      />
                    </div>
                    <div className="w-full mb-8 px-4">
                      <label
                        htmlFor="email"
                        className="text-base flex justify-start mb-3 text-left text-primary"
                      >
                        <b>Email</b>
                      </label>
                      <input
                        autoComplete="off"
                        value={email}
                        onChange={(e) => handleInputChange(e, "email")}
                        type="email"
                        id="email"
                        placeholder="insert Your E-mail"
                        className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                      />
                    </div>
                    <div className="w-full mb-8 px-4">
                      <label
                        htmlFor="pesan"
                        className="text-base flex justify-start mb-3 text-left text-primary"
                      >
                        <b>Messages</b>
                      </label>
                      <textarea
                        autoComplete="false"
                        value={message}
                        onChange={(e) => handleInputChange(e, "message")}
                        id="pesan"
                        placeholder="insert Your Message"
                        className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none h-32 focus:ring-primary focus:ring-1 focus:border-primary"
                      ></textarea>
                    </div>
                    <div className="w-full mb-8 px-4">
                      <button
                        type="submit"
                        className="w-full transition duration-300  hover:text-dark p-3 rounded-md bg-primary hover:bg-teal-200 text-white font-interbol"
                      >
                        Send Message
                      </button>
                    </div>
                    <p className="text-primary w-full block mx-auto font-dominebold uppercase text-center text-xs cursor-pointer" >mail: akmadnudin.inc@gmail.com</p>
                  </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
