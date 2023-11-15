import React from 'react'
import Reviewchild from './Reviewchild'

export default function Reviews() {
  return (
    <div>
        <div className='flex justify-around m-4'>
        <Reviewchild>
          <div>
          <h3 className='text-center font-semibold text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</h3>
          <p className='text-center'>MARIA OLIVER</p>
          </div>
        </Reviewchild>
        <Reviewchild>
          <div>
          <h3 className='text-center font-semibold text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</h3>
          <p className='text-center'>MARIA OLIVER</p>
          </div>
        </Reviewchild>
        <Reviewchild>
          <div>
          <h3 className='text-center font-semibold text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</h3>
          <p className='text-center'>MARIA OLIVER</p>
          </div>
        </Reviewchild>
      </div>
    </div>
  )
}
