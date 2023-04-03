import React, { useEffect } from 'react'
import { IconFaq, IconLogoNo } from '../../assets'
import { Accordion } from 'react-bootstrap'
import Aos from 'aos'

function FAQ() {

  useEffect(() => {
    Aos.init()
  },[])


  return (
    <>
        <div className='bg-[#FFE81B30] flex items-center justify-around py-5 mt-[50px]' >
            <h2 className='font-bold text-[50px] max-w-lg text-black' >Frequently Asked Question</h2>
            <img src={IconFaq} className='w-[200px]'  />
        </div>
        <div className='container my-10' data-aos="fade-up" >
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header >Minimal Saldo Buat Akun</Accordion.Header>
              <Accordion.Body className='max-w-lg font-medium text-black' >
                Tidak ada! Kamu tidak perlu melakukan deposit dalam jumlah berapapun saat melakukan registrasi akun
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className='mt-10' >
              <Accordion.Header>Syarat Utama Menjadi Nasabah</Accordion.Header>
              <Accordion.Body className='max-w-lg font-medium text-black'  >
                Kamu adalah Warga Negara Indonesia yang sudah memiliki e-KTP
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className='mt-10' >
              <Accordion.Header>Dokumen Yang Harus Dilengkapi</Accordion.Header>
              <Accordion.Body className='max-w-lg font-medium text-black'  >
                Untuk melakukan registrasi awal, kamu perlu mempersiapkan e-KTP. Saat melanjutkan ke tahap scan KTP, kamu hanya perlu mempersiapkan e-KTP asli, lalu ikuti petunjuk berikutnya.
                <br/>
                <br/>
                Bagaimana kalau belum memiliki/menerima e-KTPJika kamu belum memiliki e-KTP, sayangnya kamu belum bisa membuat akun Jago.
                <br/>
                <br/>
                Tips: Kamu dapat menggunakan KTP maupun e-KTP, selama masih dalam masa berlaku.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className='mt-10' >
              <Accordion.Header>Lupa E-mail, dan Password</Accordion.Header>
              <Accordion.Body className='max-w-xl font-medium text-black'  >
                Saya lupa Password
                <br/>
                <br/>
                Kamu bisa menggunakan fitur Lupa Password di halaman log in.
                <br/>
                <br/>
                1. Tap tulisan Lupa? di kanan kolom password.
                <br/>                
                2. Masukkan e-mail atau e-KTP terdaftar untuk verifikasi.
                <br/>                
                3. Masukkan kode verifikasi yang dikirim ke nomor terdaftar.
                <br/>                
                4. Buat password baru. Pastikan password yang dibuat aman.
                <br/>                
                5. Kamu berhasil punya password dan PIN baru.
                <br/>
                <br/>
                Saya lupa Email
                <br/>
                <br/>
                Kalau kamu lupa email yang terdaftar di akun Jago, kamu bisa Tanya Jago di 08XX-XXXX-XX.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
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

export default FAQ