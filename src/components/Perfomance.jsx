import React from 'react'
import { Client1, Client2, Client3, Profile } from '../assets/images/Image'
import {Progress} from "./Info"

function Perfomance() {
  return (
    <div className='space-y-8'>
        <div>
            <h1 class="font-bold text-xl">Performance</h1>
        </div>
        <div className='flex flex-row items-center justify-between'>
            <p class="font-medium ">New clients (21)</p>
            <p>see all</p>
        </div>
        <div className='flex items-center justify-between'>
            <div className='w-12 h-12 '>
                <img src={Client1} className="w-full h-full rounded-full object-cover object-contain" />
            </div>
            <div className='w-12 h-12 '>
                <img src={Client2} className="w-full h-full rounded-full object-cover object-contain" />
            </div>
            <div className='w-12 h-12 '>
                <img src={Client3} className="w-full h-full rounded-full object-cover object-contain" />
            </div>
            <div className='w-12 h-12 '>
                <img src={Profile} className="w-full h-full" />
            </div>
        </div>
        <div>
            <Progress/>
        </div>
    </div>
  )
}

export default Perfomance