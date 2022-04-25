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
            <p className='pt-4'>We can model air pressure in terms of the air sourrounding it. Imagine a columun of air. We can select a cross section in this column. To calculate the air preasure within this cross section we can look at the amount of air above the cross section. The more air above the crossection the higher the pressure in the cross section. Also the closer to the Earth's surface the cross section is, the higher the gravitational force on the air in cross section will be. Thus, the air in the cross section is being pulled down with more force closer to the earth and less force farther from the earth.</p>
            <p className='pt-4'>Adjust the slider below to change the altitude of the cross section.</p>
            <div className='pt-2 w-full'>
              High Pressure &nbsp;&nbsp;<Slider axis="x" x={height.x} onChange={setHeight} />&nbsp;&nbsp; Low Pressure
            </div>
            <p className='pt-4'>Notice that as we move from high pressure to low pressure the cross sections expands as its density decreases and volume increases.</p>
            </div>
            </div>
          <AtmosphereLayers height={height.x} />
      </div>
    </div>
  )
}

export default PageOne