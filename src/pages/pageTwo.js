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
            <p className='pt-4'>We can also model this phemonon using the ideal gas law. We can solve the ideal gas law for preasure by dividing both sides by volume.</p>
            <p className='pt-4'>Now we can hold volume and the number of moles constant. This allows us to change tempature and see its effect on preasure.</p>
            <div className='pt-2 w-full'>
              Low Tempature (-51&#xb0;C) &nbsp;&nbsp;<Slider axis="x" x={temp.x} xmin={-51.1111} xmax={56.722222} onChange={setTemp} />&nbsp;&nbsp; High Tempature (56&#xb0;C)
            </div>
            <p className='pt-4'>The low tempature repersents the lowest tempature which planes fly in the stratsohpere. The high tempature repersents the highest tempature which is possible on earth.</p>
            <p className='pt-4'>Notice that as tempature increase so does preassure. It is also true that as tempature decreases so does preasure.</p>

            </div>
            </div>
      </div>
    </div>
  )
}

export default PageTwo