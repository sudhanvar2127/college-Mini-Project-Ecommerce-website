import React from 'react'

const NewsletterBox = () => {

    const onSumitHandler = (event) =>{
        event.preventDefault()
    }

  return (
    <div className="text-center">
        <p className="text-2xl font-medium text-gray-800">Subscriber now to get 20% off</p>
        <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, unde!
        </p>
        <form onSubmit={onSumitHandler} className='w-full sm:w-1/2 flex items-center mx-auto my-6 gap-3 border pl-3'>
            <input type="email" placeholder='Enter your email' className="w-full sm:flex outline-none" />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox