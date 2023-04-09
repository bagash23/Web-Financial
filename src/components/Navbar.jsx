import React, { useEffect, useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { IconBuatAkun, IconLogo } from "../assets";
import Aos from "aos";

const Navbar = () => {
  // state
  const [open, setOpen] = useState(false);
  const [switchLogin, setSwitchLogin] = useState(0);
  const [show, setShow] = useState(false);
  const [session, setSession] = useState(0);
  const [akun, setAkun] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    setSwitchLogin(listSwitch[0].id);
    Aos.init();
  }, []);

  // function

  const listSwitch = [
    {
      id: 1,
      title: "Masuk",
    },
    {
      id: 2,
      title: "Daftar",
    },
  ];

  let id = 321021321
  const duit = '2000000'
  let currency = duit.replace(/[^0-9]/gi, '')
        .replace(/^0/gi, '')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')

  const handleLogout = () => {
    setIsLoggingOut(true);    
    setTimeout(() => {
      setIsLoggingOut(false);
      setSession(0);
      setAkun(false);
      window.location.reload()
    }, 2000)
  };

  return (
    <>
      <nav className="bg-white fixed z-20 w-full top-0 h-fit ">
        <div className="flex items-center font-medium justify-around">
          <div className="z-50 md:w-auto w-full flex justify-between">
            <img src={IconLogo} alt="logo" className="md:cursor-pointer h-9" />
          </div>
          <ul className="md:flex hidden capitalize items-center gap-8 font-[Poppins]">
            <li>
              <Link to="/" className="py-7 px-3 inline-block cursor-pointer">
                Cuan
              </Link>
            </li>
            <li>
              <Link
                to="/tentang-kami"
                className="py-7 px-3 inline-block cursor-pointer"
              >
                Tentang Kami
              </Link>
            </li>
            {session === 1 && (
              <li>
                <Link
                  to={`/atm`}
                  className="py-7 px-3 inline-block cursor-pointer"
                >
                  ATM Saya
                </Link>
              </li>
            )}
            <li>
              <Link to="/faq" className="py-7 px-3 inline-block cursor-pointer">
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/bantuan"
                className="py-7 px-3 inline-block cursor-pointer"
              >
                Bantuan
              </Link>
            </li>
            {/* <NavLinks /> */}
          </ul>
          <div className="md:block hidden">
            {session === 1 ? (
              <div className="relative">
                <button
                  className="inline-flex items-center justify-between w-full px-4 py-2 font-medium text-gray-700 "
                  onClick={() => setAkun(!akun)}
                >
                  <div className="d-block text-left" >
                    <h2 className="text-black font-normal text-base">Bagas Haryadi</h2>
                    <h4 className="text-[10px]" >Rp. {currency}</h4>
                  </div>
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-6a6 6 0 100 12 6 6 0 000-12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {akun && (
                  <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
                    <div className="py-1">
                      <button
                        onClick={handleLogout}
                        className="block px-4 py-2 text-sm text-gray-700"
                        disabled={isLoggingOut}
                      >
                        {isLoggingOut ? (
                          <svg
                            className="w-5 h-5 mx-auto animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path
                              className="text-gray-700"
                              fill="currentColor"
                              d="M12 3a9 9 0 019 9h-2a7 7 0 00-7-7V3z"
                            ></path>
                            <path
                              className="text-gray-400"
                              fill="currentColor"
                              d="M21.17 10A9 9 0 0112 21V19a7 7 0 007-7h2a9 9 0 01-1.83 4.63"
                            ></path>
                          </svg>
                        ) : (
                          <span>Keluar</span>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Button title={"Daftar / Masuk"} onClick={() => setOpen(true)} />
            )}
          </div>
        </div>
      </nav>
      {open && (
        <div className="fixed bg-white w-50 top-[100px] z-10 justify-center mx-auto items-center bottom-0 content-center right-0 left-0 shadow-lg">
          <div className="p-10">
            {show === false ? (
              <div className="text-center" data-aos="fade-up">
                <img src={IconBuatAkun} className="w-[40%] mx-auto" />
                <h2 className="font-bold text-black text-[50px]">Cuan Bank</h2>
                <p className="font-normal text-black my-2">
                  PT Cuan Bank Tbk berizin dan diawasi oleh Otoritas Jasa
                  Keuangan (OJK), serta merupakan peserta penjaminan LPS.
                </p>
                <div className="block">
                  <button
                    onClick={() => setShow(true)}
                    className="font-normal text-sm bg-[#FC2947] w-full text-white h-10 rounded-md my-2"
                  >
                    <h2>Mulai Sekarang</h2>
                  </button>
                  <button
                    onClick={() => setOpen(false)}
                    className="font-normal text-sm border w-full text-black h-10 rounded-md my-2"
                  >
                    <h2>Nanti Aja Deh</h2>
                  </button>
                </div>
              </div>
            ) : null}
            {show && (
              <div>
                <div className="flex justify-between">
                  <h2 className="font-bold text-black text-[50px]">
                    {switchLogin == 1 ? "Masuk" : "Daftar"}
                  </h2>
                  <button
                    className="font-normal text-sm text-black"
                    onClick={() => setShow(false)}
                  >
                    Tutup
                  </button>
                </div>
                {listSwitch
                  .filter((value, index, self) => self.indexOf(value) === index)
                  .map((i, idx) => {
                    return (
                      <button
                        key={idx}
                        className="mr-10 my-2"
                        onClick={() => setSwitchLogin(i.id)}
                      >
                        <h2>{i.title}</h2>
                      </button>
                    );
                  })}
                {switchLogin === 1 ? (
                  <div data-aos="fade-up">
                    <div className="my-4">
                      <p className=" font-normal text-black">
                        Masukan Email Anda{" "}
                        <span className="text-[#FC2947]">*</span>
                      </p>
                      <input
                        type="email"
                        className="w-full h-10 mt-2 rounded-md px-2 border-2"
                      />
                    </div>
                    <div className="my-4">
                      <p className=" font-normal text-black">
                        Masukan Kata Sandi Anda{" "}
                        <span className="text-[#FC2947]">*</span>
                      </p>
                      <input
                        type="password"
                        className="w-full h-10 mt-2 rounded-md px-2 border-2"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#FC2947] h-10 rounded-md text-white font-medium"
                      onClick={() => {
                        setSession(1);
                        setOpen(false);
                        // window.location.reload()
                      }}
                    >
                      Masuk
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-between" data-aos="fade-up">
                      <div className="w-1/2">
                        <div className="my-4">
                          <p className=" font-normal text-black">
                            Email<span className="text-[#FC2947]">*</span>
                          </p>
                          <input
                            type="email"
                            className="w-full h-10 mt-2 rounded-md px-2 border-2"
                          />
                        </div>
                        <div className="my-4">
                          <p className=" font-normal text-black">
                            Kata Sandi<span className="text-[#FC2947]">*</span>
                          </p>
                          <input
                            type="password"
                            className="w-full h-10 mt-2 rounded-md px-2 border-2"
                          />
                        </div>
                      </div>
                      <div className="w-1/2 ml-2">
                        <div className="my-4">
                          <p className=" font-normal text-black">
                            Nama Lengkap{" "}
                            <span className="text-[#FC2947]">*</span>
                          </p>
                          <input
                            type="text"
                            className="w-full h-10 mt-2 rounded-md px-2 border-2"
                          />
                        </div>
                        <div className="my-4">
                          <p className=" font-normal text-black">
                            No. Handphone{" "}
                            <span className="text-[#FC2947]">*</span>
                          </p>
                          <input
                            type="number"
                            className="w-full h-10 mt-2 rounded-md px-2 border-2"
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      data-aos="fade-up"
                      className="w-full bg-[#FC2947] h-10 rounded-md text-white font-medium"
                    >
                      Daftar
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
