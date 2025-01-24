import React from 'react'
import Title from '../Component/Title'
import { assets } from '../assets/assets/frontend_assets/assets'
import NewsLatterBox from '../Component/NewsLatterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={'Us'}></Title>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam ducimus incidunt ea asperiores itaque minus tenetur, facilis explicabo ad! Cum optio et quia impedit repellendus deleniti, est quod necessitatibus?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita earum facere veniam laborum ducimus sunt vero! Quod illo temporibus a voluptates, nisi aspernatur consectetur cum maxime cupiditate, deserunt perspiciatis totam?</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error illo ut eaque earum enim, quisquam, reprehenderit sequi placeat alias vero atque! Quam rerum amet quibusdam reiciendis magni qui tempora totam?</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aspernatur, commodi, ad repudiandae exercitationem similique, laborum ex voluptates ab suscipit corrupti? Accusantium sed officia corrupti itaque quo omnis iusto at.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aspernatur, commodi, ad repudiandae exercitationem similique, laborum ex voluptates ab suscipit corrupti? Accusantium sed officia corrupti itaque quo omnis iusto at.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aspernatur, commodi, ad repudiandae exercitationem similique, laborum ex voluptates ab suscipit corrupti? Accusantium sed officia corrupti itaque quo omnis iusto at.</p>
        </div>
      </div>
      <NewsLatterBox/>
    </div>
  )
}

export default About