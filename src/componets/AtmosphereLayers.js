import React, { useState, useEffect, useRef } from 'react'

import EarthImage from '../imgs/earth.png'

function AtmosphereLayers(props) {

    const [height, setHeight] = useState(0)
    const [my_height, setMyHeight] = useState(0)
    const [my_depth, setMyDepth] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
        setHeight(ref.current.clientHeight)
        setMyDepth((props.height/100)*30 +10)
        setMyHeight(((height*props.height)/100)-my_depth)
    }, [props.height, height, my_depth])

  return (
    <div>
        <div className='w-full	h-full p-5 grid grid-cols-1 place-items-center'>
            <div className='h-52 w-12  relative ' style={{ background: `rgba(255,255,255, 0.7)` }} ref={ref}>
                <div className='w-full bg-red-500 absolute' style={{bottom: my_height, height: my_depth}}>
                    
                </div>
            </div>
            <img src={EarthImage} width={300} alt="test"/>
        </div>
    </div>
  )
}

export default AtmosphereLayers