import React, { useEffect } from 'react'
import { IconBantuan, IconBuatAkun, IconKirimUang, IconLogoNo, IconQrBantuan } from '../../assets'
import { listBuatAkun, listKirimUang, listTopUp } from '../../components/dummy/MyLinks'
import Aos from 'aos'

function Bantuan() {

    useEffect(() => {
        Aos.init()
    },[])

  return (
    <>
        <div className='bg-[#FFE81B30] flex items-center justify-around py-5 mt-[50px]' >
            <h2 className='font-bold text-[50px] text-black' >Bantuan</h2>
            <img src={IconBantuan} className='w-[200px]'  />
        </div>
        <div  >
            <div className='flex items-center justify-around my-10' data-aos = "fade-up" >
                <img src={IconBuatAkun} className="w-[20%]" />
                <div>
                    <h2 className='font-bold text-black text-[30px] mb-4' >Buat Akun</h2>
                    {listBuatAkun.map((i, idx) => (
                        <div key={idx} >
                            <p className='font-normal text-black text-base' >{i.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex items-center justify-around my-10 bg-[#F2F2F2] py-5' data-aos = "fade-up" >
                <img src={IconKirimUang} className="w-[20%]" />
                <div>
                    <h2 className='font-bold text-black text-[30px] mb-4' >Kirim Uang</h2>
                    {listKirimUang.map((i, idx) => (
                        <div key={idx} >
                            <p className='font-normal text-black text-base' >{i.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex items-center justify-around my-10' data-aos = "fade-up"  >
                <img src={IconQrBantuan} className="w-[20%]" />
                <div>
                    <h2 className='font-bold text-black text-[30px] mb-4' >Top Up E-Wallet</h2>
                    {listTopUp.map((i, idx) => (
                        <div key={idx} >
                            <p className='font-normal text-black text-base max-w-[600px]' >{i.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <footer class="lg:mx-4 mt-5 flex lg:block flex-col lg:py-5 lg:justify-center">
          <div class="mx-4 py-10 md:text-left">
            <div class="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div class="">
                <h6
                  class="
                    font-semibold
                    mb-4
                    flex
                    items-center
                    
                    md:justify-start
                  "
                >
                  <img
                    src={IconLogoNo}
                    className="lg:w-50 w-20 py-3 lg:mr-2 mr-2"
                    alt="logo"
                  />
                  Cuan Bank
                </h6>
                <p>
                PT Cuan Bank Tbk berizin dan diawasi oleh Otoritas Jasa Keuangan (OJK), serta merupakan peserta penjaminan LPS.
                </p>
              </div>
              <div class="">
                <h6 class=" font-semibold mb-4 flex md:justify-start">
                  Karier
                </h6>
                <p class="mb-4">
                  <a href="#!" class="text-gray-600">
                    Web Developer
                  </a>
                </p>
                <p class="mb-4">
                  <a href="#!" class="text-gray-600">
                    Full Stack
                  </a>
                </p>
                <p class="mb-4">
                  <a href="#!" class="text-gray-600">
                    Admin
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-gray-600">
                    Mobile Developer
                  </a>
                </p>
              </div>
              <div class="">
                <h6 class=" font-semibold mb-4 flex  md:justify-start">
                  Lainnya
                </h6>
                <p class="mb-4">
                  <a href="#!" class="text-gray-600">
                    Sponsor
                  </a>
                </p>
              </div>
              <div class="">
                <h6 class=" font-semibold mb-4 flex md:justify-start">
                  Office
                </h6>
                <p class="flex items-center md:justify-start mb-4">
                  PT Cuan Bank Tbk
                </p>
                <p class="flex items-center md:justify-start mb-4">
                  cuanbankTBK@example.com
                </p>
                <p class="flex items-center md:justify-start mb-4">
                  + 62 234 567 88
                </p>
              </div>
            </div>
          </div>
          <div class="text-center p-6">
            <span>© 2023 Copyright</span>
            <a
              class="text-gray-600 font-semibold ml-4"
              href="https://tailwind-elements.com/"
            >
              PT Cuan Bank Tbk
            </a>
          </div>
        </footer>
    </>
  )
}

export default Bantuan