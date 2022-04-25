import React from 'react'
import { useParallax } from 'react-scroll-parallax'

function ParticleEffect() {
    const parallax = useParallax<HTMLDivElement>({
        easing: 'easeOutQuad',
        translateX: [0, 100],
      });
      return (<div ref={parallax.ref} >
          <h1>hello</h1>
      </div>);
}

export default ParticleEffect