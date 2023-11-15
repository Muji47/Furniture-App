import React from 'react'
import Slogan from '../home/Slogan'
import { FaPhone } from 'react-icons/fa'
import { FaLocationDot} from 'react-icons/fa6'
import { AiOutlineMail} from 'react-icons/ai'
import Services from '../home/Services'
import Signup from '../home/Signup'
import Button from '../home/Button'

export default function Contact() {
  return (
    <div>
        <div className='h-[70rem] bg-[#f2f3f3]'>
            <Slogan optional={"Don't be a stranger"} className={'flex flex-col justify-center items-center h-60'}>Contact Us</Slogan>
            <div className='flex justify-around'>
                <Services icon={<FaPhone/>} main={'Phone Number'} text={'929-242-6868'} 
                className={'bg-white rounded-2xl w-72 p-9'}/>
                <Services icon={<AiOutlineMail/>} main={'Email'} text={'contact@info.com'}
                className={'bg-white rounded-2xl w-72 p-9'}/>
                <Services icon={<FaLocationDot/>} main={'Address'} text={'123 Fifth Avenue, New York, NY 10160'}
                className={'bg-white rounded-2xl w-72 p-9'}/>
            </div>
            <Slogan optional={"Message us"} className={'flex flex-col justify-center items-center h-60'}>Get in touch</Slogan>
            <div className='flex flex-col '>
                <div className='flex justify-center'> 
                        <Signup type={'text'} className={' h-10 p-2'}>First Name</Signup>
                        <Signup type={'text'} className={' h-10 p-2'}>last Name</Signup>
                </div>
                <Signup type={'text'} className={'w-[26rem] h-10 p-2'}>Email</Signup>
                <Signup type={'text'} className={'w-[26rem] h-16 p-2'}>Message</Signup>
                <Button className={'text-white bg-black p-3 rounded-md'}>SEND</Button>
            </div>
        </div>
    </div>
  )
}
