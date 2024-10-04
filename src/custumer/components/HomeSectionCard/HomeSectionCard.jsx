import React from "react";

const HomeSectionCard = () => {
  return(
      <div className='cursor-pointer flex flex-col items-center bg-white
      rounded-lg overflow-hidden w-[15rem] mx-3 border'>
         <div className='h-[13rem] w-[10rem]'>
            <img className="object-cover object-top w-full h-full" src="https://smartcasuals.ru/wp-content/uploads/2019/08/2019-07-28-16-51-50-267.jpeg" alt=""/>
         </div>
          <div className='p-4'>
              <h3 className='text-lg font-medium text-gray-900'>Nofilter</h3>
              <p className='mt-2 text-sm text-gray-500'>Men solid Pure Cotton Straight Kurta</p>
          </div>
      </div>
  )
}
export default HomeSectionCard