import React from 'react'

function index() {
  return (
    <div className=' h-screen flex items-center justify-center gap-20'>
      <img src="/under_construction.png" alt="" height={300} width={500} />
      <div className='w-[40%] flex flex-col justify-center items-center gap-10'>

      <h1 className='text-secondary font-semibold text-3xl border-8 border-primary rounded-md p-10'>Website Under Construction</h1>
      <p className='font-semibold mx-5 text-md text-center'><span className='text-primary'>Welcome!</span> We're thrilled to announce that something amazing is on the horizon. Our website is currently under construction, but we're working tirelessly to bring you an exceptional experience.</p>
      </div>
    </div>
  )
}

export default index
