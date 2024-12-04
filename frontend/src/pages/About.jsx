import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'} />
    </div>
    
    <div className="my-10 flex flex-col md:flex-row gap-16">
      <img src={assets.about_img} className="w-full md:max-w-[450px]" />
      <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia laborum aliquid, expedita corporis iure commodi maxime suscipit consequuntur illum totam eligendi minus animi obcaecati, perferendis quibusdam facere non. Placeat facere unde architecto porro impedit atque necessitatibus, repellat vel repellendus praesentium maiores explicabo reiciendis delectus corporis veritatis adipisci, temporibus quod nisi.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, atque nemo, amet suscipit iusto assumenda expedita iste blanditiis explicabo, alias ratione in sequi ipsum deserunt reprehenderit dolorem corrupti hic? Inventore.</p>
        <b className="text-gray-800">Our Mission</b>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste consequuntur quisquam eveniet suscipit nulla reiciendis fugit non unde expedita, dolores explicabo vitae amet labore repellat nesciunt mollitia nemo nostrum ut.</p>
      </div>
    </div>

    <div className="text-4xl py-4">
      <Title text1={"WHY"} text2={"CHOOSE US"} />
    </div>

    <div className="flex flex-col md:flex-row text-sm mb-20">
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Quality Assurance:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ab vitae quis. Inventore quam saepe aliquid nam libero id autem.</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Convenience:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ab vitae quis. Inventore quam saepe aliquid nam libero id autem.</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Exceptional Customer Service</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ab vitae quis. Inventore quam saepe aliquid nam libero id autem.</p>
      </div>
    </div>

    <NewsletterBox/>

    </div>
    
  )
}
 
export default About 
