'use client';

import Image from 'next/image'
import React, {useState} from 'react'
import '../globals.css'

const blurMappings = [
  'blur-none',
  'blur-sm',
  'blur',
  'blur-md',
  'blur-lg',
  'blur-xl',
  'blur-2xl',
  'blur-3xl'
]

export default function Page() {
  const [blurVal, setBlurVal] = React.useState(0);

  const handleChange = (event) => {
    setBlurVal(event.target.value);
  };

  return (
    <main className="flex max-w-full h-screen -my-24 sm:-my-12 mx-6">
      <div className="flex flex-col lg:flex-row m-auto">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900">Update CSS Variables with JS</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <div className="controls">
                <div className="my-5">
                  <Image className={blurMappings[blurVal]} src="/cssvars/cssvars.jpg" width="600" height="375" alt="Sunset behind mountain range" />
                </div>
                <h2 className="text-xl my-5">Controls</h2>
                <label htmlFor="blur text-3xl">Blur:</label>
                <input
                  className="form-range w-full"
                  id="blur"
                  type="range"
                  name="blur"
                  min="0"
                  max="7"
                  value={blurVal}
                  onChange={ handleChange }
                  data-sizing="px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
