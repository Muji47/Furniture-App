import React from 'react'
import Signup from '../home/Signup'
import Button from '../home/Button'


export default function Trackorder() {
  return (
    <div>
        <h4 className='m-5 font-semibold text-4xl'>Orders</h4>
        <div className='flex justify-center m-16'>
            <div className=' border-2 w-[28rem] h-[30rem] flex flex-col items-center'>
                <h1 className='font-bold text-5xl m-10'>Login</h1>
                <Signup type={'text'}placeholder={'Username or email address'} className={'p-3 w-72 border-2'}></Signup>
                <Signup type={'password'} placeholder={'password'} className={'p-3 w-72 border-2'}></Signup>
                <div className='flex'>
                    <Signup type={'checkbox'} className={'p-3 border-[#c19a83] focus:bg-[#c19a83]'}/>
                    <span className='mt-[.6rem]'>Remember me</span>
                </div>
                <Button className={'text-white bg-black p-3 w-72 hover:bg-[#c19a83]'}>LOG IN</Button>
                <h6 className='text-[#c19a83] font-semibold cursor-pointer hover:text-black'>Lost your password?</h6>
            </div>
        </div>
    </div>
  )
}
