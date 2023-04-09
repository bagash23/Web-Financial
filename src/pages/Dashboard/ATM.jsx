import React from 'react'
import { IconFaq, IconLogo } from '../../assets'

function ATM() {
  const duit = '2000000'
  let currency = duit.replace(/[^0-9]/gi, '')
        .replace(/^0/gi, '')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
const pengeluaran = [
  {
    id: 1,
    title: ''
  }
]
  return (
    <>
      <div className='container' >
        <div className='mt-[10%] p-10 rounded-lg shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ' >
          <h4 className='text-white text-[30px] font-bold' >CUAN BANK</h4>       
          <div className='mt-5 items-center' >            
            <p className='text-[20px] font-normal text-white' >Bagas Haryadi</p>
            <h1 className='text-white font-normal text-[50px]' >Rp. {currency}</h1>               
          </div>
        </div>
        <p className='text-black text-[20px] font-semibold mt-5' >Layanan Di ATM CUAN BANK</p>
        <div className='flex justify-between gap-2 my-5' >
          <div className='block cursor-pointer px-4 py-2 rounded-sm' >
            <h4 className='text-black text-xl font-medium' >Isi Saldo</h4>
            <p className='text-black font-normal text-sm' >Pengisian isi saldo anda</p>
          </div>
          <div className='block cursor-pointer px-4 py-2 rounded-sm' >
            <h4 className='text-black text-xl font-medium'>Riwayat Pengeluaran</h4>
            <p className='text-black font-normal text-sm' >Riwayat pengeularan saldo anda</p>
          </div>
          <div className='block cursor-pointer px-4 py-2 rounded-sm' >
            <h4 className='text-black text-xl font-medium' >Riwayat Pemasukan</h4>
            <p className='text-black font-normal text-sm' >Riwayat pemasukan saldo anda</p>
          </div>
          <div className='block cursor-pointer px-4 py-2 rounded-sm' >
            <h4 className='text-black text-xl font-medium' >Lainnya</h4>
            <p className='text-black font-normal text-sm' >Lainnya</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ATM