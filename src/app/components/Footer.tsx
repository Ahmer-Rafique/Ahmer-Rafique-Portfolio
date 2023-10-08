import Link from 'next/link';
import React from 'react';
import { IoIosMail } from 'react-icons/io';
import { BsFillTelephoneFill} from 'react-icons/bs';
const Footer=()=>{
return (<div>
<footer className="text-gray-600 body-font bg-blue-300">
  <div className="container px-5 py-1 mx-auto flex items-center sm:flex-row flex-col">
    <p className="text-sm text-blue-950 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
      <span>| </span> &nbsp;
      @ 2023 Ahmer Ali all copy right reserved:
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link target='_blank'
      href={"mailto:ahmerali1771@gmail.com"} className="text-gray-500 ">
    <IoIosMail className='text-2xl hover:text-blue-500'/>
      </Link>
      <Link href={"tel:+923204896766"} className="ml-3 text-gray-500">
        <BsFillTelephoneFill className='text-1xl mt-1 hover:text-yellow-400'/>
      </Link>
    </span>
  </div>
</footer>

</div>)
}
export default Footer;