import React from 'react'
import { FaKey } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

function Footer() {
  return (
    <footer>
      <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
        <hr className='my-6 border-gray-500/10 sm:mx-auto lg:my-8' />
        <div className='sm:flex sm:justify-between'>
          <div className='flex mt-4 items-center mx-auto justify-center sm:mt-0'>
            <a href='mailto:emppu@emppu.dev' target='_blank' className='text-[#00DF9A] hover:text-[#00df98cd] p-2'>
              <IoIosMail className='text-4xl'/>
            </a>
            <a href='https://emppu.dev/pgp.asc' target='_blank' className='text-[#00DF9A] hover:text-[#00df98cd] p-2'>
              <FaKey className='text-3xl'/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer