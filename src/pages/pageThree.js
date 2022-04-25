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
            <p className='pt-4'>Now we can apply the two models that we discussed using the temperature graph on the right and knowning that planes fly in the stratsophere.</p>
            <p className='pt-4'>We learn from Model 1 that at higher altitudes, there is less gravity pulling down on the cross-section and less air above the cross-section pushing it down. Accordingly, air at higher altitudes will have less air pressure.</p>
            <p className='pt-4'>We learned in Model 2 that lower temperatures correlate with lower air pressure. As altitude increases, temperature decreases which results in air pressure also decreasing. In a section of the stratosphere the temperature rises. This is caused by chemical reactions between Ozone molecules light and other pollutants.
</p>
            <p className='pt-4'>These models show that air at higher altitudes has lower pressure for the following three reasons: (1) less gravity pulling down on the air; (2) less air above the cross-section pushing down on the air; and (3) lower temperature.</p>
            <p className='pt-4'>Full version of graph available <a href='https://www.researchgate.net/figure/Average-temperature-of-the-atmosphere-as-a-function-of-height-showing-how-it-defines_fig26_322555971'>here</a>.</p>
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