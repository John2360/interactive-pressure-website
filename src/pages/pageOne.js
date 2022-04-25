import React, { useState } from 'react'
import background1 from "../imgs/bg2.jpg";

import AtmosphereLayers from '../componets/AtmosphereLayers'
import Slider from 'react-input-slider'
// import ParticleEffect from '../componets/ParticleEffect'


function PageOne() {
  const [height, setHeight] = useState({x: 0, y: 0});

  return (
    <div className="h-screen w-screen flex items-center justify-center"  style={{backgroundImage: "url("+background1+")", backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>
      {/* <ParticleEffect /> */}
      <div className="container grid grid-cols-2">
          <div className=" items-center">
            <div className='bg-white rounded-lg p-10 drop-shadow-xl'>

            <h2 className='lg:text-4xl md:text-xl font-bold'>Model 1</h2>
            <p className='pt-4'>We can model air preasure in terms of the air sourrounding it. Imagine a columun of air. We can choose a crossection in this column. To calculate this the air preasure within this crosssection we can look at the amount of air above the crosssection. The more air the higher the preasure. Also the closer to the earths surface the higher the gravitational force is. Thus the air is being pulled down with more force closer to the earth versus less force farther from the earth.</p>
            <p className='pt-4'>Adjust the slider below to change the altitude which we are taking our slice.</p>
            <div className='pt-2 w-full'>
              High Pressure &nbsp;&nbsp;<Slider axis="x" x={height.x} onChange={setHeight} />&nbsp;&nbsp; Low Preasure
            </div>
            <p className='pt-4'>Notice that as we move from high preasure to low preasure the slices expand as there density becomes less and volume becomes more.</p>
            </div>
            </div>
          <AtmosphereLayers height={height.x} />
      </div>
    </div>
  )
}

export default PageOne