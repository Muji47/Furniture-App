import React from 'react'
import Slogan from '../home/Slogan'
import { MdOutlineAccountCircle } from 'react-icons/md'
import { AiFillStar} from 'react-icons/ai'
import { BiSupport} from 'react-icons/bi'
import Services from '../home/Services'


export default function Help() {
  return (
    <div>
        <div>
        <div className='h-[70rem] bg-[#f2f3f3]'>
            <Slogan optional={"24/7 Support"} className={'flex flex-col justify-center items-center h-60'}>Ready to help</Slogan>
            <div className='flex justify-around'>
                <Services icon={<MdOutlineAccountCircle/>} main={'Account Privacy'} text={'Quisque a pharetra quam. Donec et risus sem. Etiam sollicitudin leo eu congue gravida. In semper lectus neque, eu interdum nisl pretium sit amet etiam efficitur.'} 
                className={'bg-white rounded-2xl w-72 p-9'}/>
                <Services icon={<BiSupport/>} main={'Support Specialist'} text={'Quisque a pharetra quam. Donec et risus sem. Etiam sollicitudin leo eu congue gravida. In semper lectus neque, eu interdum nisl pretium sit amet etiam efficitur.'}
                className={'bg-white rounded-2xl w-72 p-9'}/>
                <Services icon={<AiFillStar/>} main={'Seller Standards'} text={'Quisque a pharetra quam. Donec et risus sem. Etiam sollicitudin leo eu congue gravida. In semper lectus neque, eu interdum nisl pretium sit amet etiam efficitur.'}
                className={'bg-white rounded-2xl w-72 p-9'}/>
            </div>
            <Slogan optional={"faq"} className={'flex flex-col justify-center items-center h-60'}>Find Answers</Slogan>
        </div>
    </div>
    </div>
  )
}
