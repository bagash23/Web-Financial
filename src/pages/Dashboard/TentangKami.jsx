import React, { useEffect } from 'react'
import { DummyArif, DummyBagas, DummyBastiar, DummyDaffa, DummyRhesa, DummyTanya, IconLogoNo } from '../../assets'
import Aos from 'aos'

function TentangKami() {

    useEffect(() => {
        Aos.init()
    },[])

  return (
    <>
        <div className='container flex justify-around mb-10 mt-[10%]' >
            <img src={DummyTanya} className="w-[200px]" data-aos='fade-right' />
            <p className='font-normal text-black text-sm max-w-xl' data-aos='fade-left' >Cuan Bank adalah aplikasi keuangan yang menghadirkan layanan bank dengan kekuatan ekosistem digital, untuk membawa solusi pengaturan keuangan inovatif untuk membantu jutaan orang Indonesia selangkah lebih dekat menggapai mimpinya.
            <br/>
            <br/>
            Cuan Bank dibangun oleh para inovator handal yang berpengalaman dalam digital banking dan pinjaman keuangan segmen mikro. Cuan Bank dikembangkan untuk menjadi pionir keuangan digital di Indonesia, dengan menghadirkan solusi keuangan yang berfokus pada kehidupan (life-centric finance solution). Aspirasi kami untuk menjadi bank berbasis teknologi yang terintegrasi di berbagai ekosistem digital Indonesia, untuk memenuhi kebutuhan pangsa pasar ritel, pelaku Usaha Kecil & Menengah, dan mass-market.</p>
        </div>
        <div className='my-10 bg-[#F2F2F2] py-10' >
            <h2 className='text-2xl font-bold mb-5 text-center' data-aos='fade-up'>Cuan Bank itu...</h2>            
            <div className='flex justify-between items-center ' >
                <div className='justify-center p-10' data-aos='fade-right' >
                    <img src='https://jago.com/images/digital/pocket/pocimage12.svg' className='mx-auto' />
                    <h2 className='font-bold text-center text-black text-xl my-5' >Mudah</h2>
                    <p className='font-normal text-center text-black' >Cuan Bank adalah sebuah aplikasi life-centric yang bertujuan untuk membantumu jadi lebih Cuan Bank dalam menjalani hidup.
                        Nantikan terobosan kolaborasi Cuan Bank dengan para pemain di ekosistem digital untuk menghadirkan layanan keuangan yang memudahkan kehidupanmu sehari-hari. Sehingga, kamu bisa menikmati hidup seperti yang kamu mau, kapanpun kamu mau.</p>                    
                </div>
                <div className='justify-center p-10' data-aos='fade-up'>
                    <img src='https://jago.com/images/digital/pocket/pocimage9.svg' className='mx-auto'  />
                    <h2 className='font-bold text-center text-black text-xl my-5' >Kolaboratif</h2>
                    <p className='font-normal text-center text-black ' >Kehidupan menjadi lebih berarti saat diisi oleh hangatnya kebersamaan.
                    Oleh karena itu, Cuan Bank  menyediakan sebuah aplikasi keuangan di mana kamu bisa menyusun rencana keuanganmu bersama orang-orang tercinta.
                    Bayangkan betapa menyenangkannya saat kamu bisa bekerjasama dengan keluarga atau teman untuk mewujudkan tujuan keuangan kalian.
                    Yuk, Jadi Cuan Bank bersama! Saatnya rencanakan, atur, dan wujudkan mimpi bersama keluarga dan teman.</p>
                </div>
                <div className='justify-center p-10' data-aos='fade-left'>
                    <img src='https://jago.com/images/digital/personal/color.svg' className='mx-auto'  />
                    <h2 className='font-bold text-center text-black text-xl my-5' >Inovatif</h2>
                    <p className='font-normal text-center text-black ' >Inovasi adalah nilai dasar yang selalu dikedepankan oleh Cuan Bank. Kami memulai inovasi dari hal paling dasar dalam suatu bank: rekening.
                        Di Cuan Bank, kamu akan mengenal rekening sebagai kantong, tempat di mana kamu bisa mengatur uangmu. Kantong Cuan Bank sangatlah mudah digunakan, fleksibel, cepat, dan tentunya aman. Keamanan data dan uangmu terjamin dengan Kantong Cuan Bank yang memiliki sistem keamanan yang tercanggih dan tercepat di Industri ini.
                        Gak perlu nunggu lagi, saatnya Jadi Cuan Bank dengan solusi finansial yang memudahkanmu</p>
                </div>
            </div>
        </div>
        <div className='container my-20 ' data-aos = "fade-up" >
          <div className='mx-auto max-w-md' >
            <h2 className='font-bold text-black text-center text-[30px]' >Pembuat Web Cuan Bank</h2>
            <p className='font-normal text-black text-center text-[15px] mt-2' >Sebuah karya dari anak bangsa dengan membuat website finansial yang berguna bagi Indonesia</p>
          </div>
          <div className='my-10 flex justify-between items-center' >
            <div className='text-center' >
              <img src={DummyBagas} className="w-[150px] h-[150px] rounded-full mx-auto mb-2" />
              <h4 className='font-bold text-black text-[15px]' >Bagas Haryadi</h4>
              <p className='font-normal text-black text-[12px] italic' >Hustler | Hacker</p>
            </div>
            <div className='text-center' >
              <img src={DummyRhesa} className="w-[150px] h-[150px] rounded-full mx-auto mb-2" />
              <h4 className='font-bold text-black text-[15px]' >Rhesa Y</h4>
              <p className='font-normal text-black text-[12px] italic' >Hipster | Hacker</p>
            </div>
            <div className='text-center' >
              <img src={DummyDaffa} className="w-[150px] h-[150px] rounded-full mx-auto mb-2" />
              <h4 className='font-bold text-black text-[15px]' >Mauladafa FW</h4>
              <p className='font-normal text-black text-[12px] italic' >Hacker</p>
            </div>
            <div className='text-center' >
              <img src={DummyArif} className="w-[150px] h-[150px] rounded-full mx-auto mb-2" />
              <h4 className='font-bold text-black text-[15px]' >Arief Rashad</h4>
              <p className='font-normal text-black text-[12px] italic' >Hipster | Hacker</p>
            </div>
            <div className='text-center' >
              <img src={DummyBastiar} className="w-[150px] h-[150px] rounded-full mx-auto mb-2" />
              <h4 className='font-bold text-black text-[15px]' >Datin Bastiar</h4>
              <p className='font-normal text-black text-[12px] italic' >Hipster | Hacker</p>
            </div>
          </div>
        </div>
        <div className='container flex justify-between py-4'  data-aos='fade-up'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.028674206009!2d107.0007886141035!3d-6.2599532630285575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698dd6e28035a3%3A0xeb68af412b8007e5!2sUniversitas%20Bina%20Sarana%20Informatika%20Kampus%20Cut%20Mutia%20Bekasi%20(UBSI%20Bekasi)!5e0!3m2!1sid!2sid!4v1679725280261!5m2!1sid!2sid" width="600" height="500" id="gmap_canvas" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            <div className='ml-5' >
                <h2 className='font-bold text-black text-lg' >Kantor</h2>
                <p className='max-w-lg font-medium mt-5' >PT Cuan Tbk
                    Menara BTPN Lt. 46
                    Jl. Dr. Ide Anak Agung Gde Agung Kav.5.5 – 5.6 Jakarta Selatan</p>

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

export default TentangKami