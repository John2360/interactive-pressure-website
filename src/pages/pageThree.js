import React from 'react'
import background3 from "../imgs/bg4.jpg";
import strat from "../imgs/strat.jpg";

function PageTwo() {

  return (
    <div className="h-screen w-screen flex items-center justify-center"  style={{backgroundImage: "url("+background3+")", backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>
      {/* <ParticleEffect /> */}
      <div className="container grid grid-cols-2">
        
      <div className=" items-center">
            <div className='bg-white rounded-lg p-10 drop-shadow-xl'>

            <h2 className='lg:text-4xl md:text-xl font-bold'>Visual Application</h2>
            <p className='pt-4'>Now we can apply the two models that we discussed using the tempature graph on the right and knowning that planes fly in the stratsophere.</p>
            <p className='pt-4'>We learned from model 1 that the gravity and air on top of the air selection which we are finding the preasure of has less air preassure. Thus air at higher preasures will have less air preasure.</p>
            <p className='pt-4'>We learened in model 2 that lower tempatures correlate to lower air preasure.</p>
            <p className='pt-4'>Putting this together we see that as the alittiude increases the tempature decreases meaning that the preasure decreases. There is also less air on top of the air and a smaller graviational force pulling towards earth meaning a lower air preasure. These two models agree with eachother.</p>
            <p className='pt-4'>Full version of graph avaible <a href='https://www.researchgate.net/figure/Average-temperature-of-the-atmosphere-as-a-function-of-height-showing-how-it-defines_fig26_322555971'>here</a>.</p>
            </div>

      </div>

      <div className='flex justify-center '>
        <div >
           <img src={strat} className='bg-white rounded-lg p-1 drop-shadow-xl' alt='strat temp chart' width={600} style={{objectFit: 'contain'}}/>
        </div>

      </div>
            


          
      </div>
    </div>
  )
}

export default PageTwo