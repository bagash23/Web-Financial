import React, { useEffect } from 'react'
import { BannerCuan, IconKey, IconLogo, IconLogoNo, IconSingleOn, IconTransaksi } from '../../assets'
import { listTransaksiAman } from '../../components/dummy/MyLinks'
import Aos from 'aos'
import 'aos/dist/aos.css';


function Cuan() {

  useEffect(() => {
    Aos.init()
  },[])

  return (
    <>      
      <img src={BannerCuan} alt='banner-cuan' className='h-[500px] w-[100%] justify-center items-center mt-[50px]' />
      <div className='container' >
        <h2 className='my-10 font-bold text-[20px] text-black' data-aos="fade-right"  >Fitur Cuan Bank</h2>
        <div className='flex justify-between items-center' >
          <div className='flex items-center bg-white'data-aos="fade-up"  >
            <img src={IconSingleOn} className="w-[100px]" />
            <div className='ml-2' >
              <h3 className='mb-2 font-bold text-black'  >Single Sign In</h3>
              <p className='max-w-sm text-sm text-slate-500' >Memudahkan Anda untuk mengakses berbagai layanan hanya dengan satu kali login.</p>
            </div>
          </div>
          <div className='flex items-center' data-aos="fade-up" >
            <img src={IconTransaksi} className="w-[100px]" />
            <div className='ml-2'  >
              <h3 className='mb-2 font-bold text-black' >Virtual Transaction</h3>
              <p className='max-w-sm text-sm text-slate-500' >Fitur monitoring transaksi melalui media cash card dan virtual account.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#F2F2F2] my-10 py-10'  >
        <div className='flex items-center justify-center' data-aos="fade-up"  >
          <img src={IconKey} className="w-[20%]" />
          <div className='ml-5' >
            <h2 className='font-bold text-black text-lg mb-5' >Bertransaksi dengan aman dan bebas dari rasa khawatir</h2>
            {listTransaksiAman.map((i, idx) => (
              <div key={idx} className="flex" >
                <span className='text-green mr-5' >✔</span>
                <p className='max-w-md text-sm text-slate-500' >{i.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='my-10 max-w-xl mx-auto text-center mb-16' data-aos="fade-up"  >
        <h2 className='font-bold text-black text-lg' >Jalani hidup penuh makna bersama keluarga dan sahabat</h2>
        <p className='mt-5 ' >Solusi finansial yang life-centric membantu kamu membangun masa depanmu, sambil menikmati hidup bahkan dengan hal-hal terkecil yang bermakna dalam keseharianmu.</p>
        <img src={IconLogo}  alt="logo" className="h-9 mx-auto mt-5"/>
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

export default Cuan