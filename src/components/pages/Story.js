import React from 'react'
import story from '../asset/Story.jpg'
import '../home/Backgroundhead.css'
import Slogan from '../home/Slogan'
import Slidecontent from '../home/Slidecontent'
import owner from '../asset/owner.jpg'

export default function Story() {
  return (
    <>
    <div>
        <Slogan className={'flex flex-col justify-center items-center h-56 bg-[#f2f3f3] mt-7'} optional={"About us"}>Our story</Slogan>
        <img src={story} alt='Storybackground'/>
        <div className='flex justify-around h-[33rem] items-center'>
          <div>
            <span className='text-sm'>About Us</span>
            <h2 className='w-80 font-bold text-4xl'>Our team is what we value the most</h2>
          </div>
          <Slidecontent/>
        </div>
        <div className='attachback flex flex-col justify-center items-center text-white'>
        <hr className='w-14 mt-4 border-white'/>
          <h2 className='text-5xl font-bold w-[39rem] text-center'>Simplicity carried to an extreme becomes elegance</h2>
        </div>
        <Slogan className={'flex flex-col justify-center items-center m-9 '} optional={'Our Story'}>How it all started</Slogan>
        <p className='text-center text-sm flex justify-center m-6'>
          <span className='w-96'>Proin nec ante eu sem luctus bibendum. Sed ut fringilla dolor. Morbi suscipit a nunc eu finibus. Nam rutrum mattis velit eget volutpat. Fusce egestas mi urna, id pulvinar ipsum dictum eget. Mauris in dolor velit. Vestibulum finibus felis non massa commodo molestie at id justo. Quisque sollicitudin elit sit amet facilisis euismod. Fusce at arcu sed libero lacinia dignissim id bibendum metus.</span></p>
          <div className='h-96 bg-[#f2f3f3]'>
            <img src={owner} className='absolute' alt='ownerpic'/>
            <div className=' h-96 flex flex-col justify-center w-80 float-right'>
              <Slogan >About the founder</Slogan>
              <p className=''>Proin nec ante eu sem luctus bibendum. Sed ut fringilla dolor. Morbi suscipit a nunc eu finibus. Nam rutrum mattis velit eget volutpat. Fusce egestas mi urna, id pulvinar ipsum dictum eget. Mauris in dolor velit.</p>
            </div>
          </div>
    </div>
    
    </>
  )
}
