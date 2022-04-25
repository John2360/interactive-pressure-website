import React, { useState } from 'react'
import background2 from "../imgs/bg3.jpg";
import IdealGas from '../componets/IdealGas';
import Slider from 'react-input-slider'

function PageTwo() {
    
    const [temp, setTemp] = useState({x: 0, y: 0});

  return (
    <div className="h-screen w-screen flex items-center justify-center"  style={{backgroundImage: "url("+background2+")", backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>
      {/* <ParticleEffect /> */}
      <div className="container grid grid-cols-2">
        
      <div className=" items-center">
            <IdealGas temp={temp.x} />
            </div>

          <div className=" items-center">
            <div className='bg-white rounded-lg p-10 drop-shadow-xl'>

            <h2 className='lg:text-4xl md:text-xl font-bold'>Model 2</h2>
            <p className='pt-4'>We can also model the air preassure using the ideal gas law. We can solve the ideal gas law for pressure by dividing both sides by volume.</p>
            <p className='pt-4'>If we hold volume and the number of moles constant, it allows us to change temperature and see the effect on pressure.</p>
            <div className='pt-2 w-full'>
              Low Temperature (-51&#xb0;C) &nbsp;&nbsp;<Slider axis="x" x={temp.x} xmin={-51.1111} xmax={56.722222} onChange={setTemp} />&nbsp;&nbsp; High Temperature (56&#xb0;C)
            </div>
            <p className='pt-4'>The low temperature represents the lowest temperature at which planes fly in the stratosphere. The high temperature represents the highest temperature that is possible on Earth.
</p>
            <p className='pt-4'>Notice that as temperature increases, so does air pressure. Conversely, as temperature decreases, so does air pressure.</p>

            </div>
            </div>
      </div>
    </div>
  )
}

export default PageTwo