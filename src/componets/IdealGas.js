import React from 'react'
import { MathComponent } from 'mathjax-react'


function IdealGas(props) {
    const temp = Math.round(props.temp+273.15)*100;
    const p = (1.000293*8.31446261815324*temp)/22.4;
  return (
    <div className='text-white font-bold text-4xl align-center flex justify-center'>
                 <MathComponent tex={String.raw`${Math.round(p*100)} Pa = \frac {n*R*${temp}K}{V}`} />

        </div>
  )
}

export default IdealGas