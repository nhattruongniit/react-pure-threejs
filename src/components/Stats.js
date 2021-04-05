import React, { useEffect, useRef } from 'react'
import Stats from 'stats.js';

function StatsDefault() {
  const refStats0 = useRef();
  const refStats1 = useRef();
  const refStats2 = useRef();
 
  useEffect(() => {
    const stats0 = new Stats();
    const stats1 = new Stats();
    const stats2 = new Stats();
    stats0.showPanel(0)
    stats1.showPanel(1)
    stats2.showPanel(2)
    refStats0.current.appendChild(stats0.dom)
    refStats1.current.appendChild(stats1.dom)
    refStats2.current.appendChild(stats2.dom)
    stats0.dom.setAttribute('style', 'display: inline-block;') // remove fixed position
    stats1.dom.setAttribute('style', 'display: inline-block;') // remove fixed position
    stats2.dom.setAttribute('style', 'display: inline-block;') // remove fixed position
    function animate () {
      stats0.update()
      stats1.update()
      stats2.update()
      requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)

    return () => {
      stats0.end();
      stats1.end();
      stats2.end();
    }
  }, [])

  return (
    <div>
      <div ref={refStats0} className="statsRow"/>
      <div ref={refStats1} className="statsRow"/>
      <div ref={refStats2} className="statsRow"/>
    </div>
  )
}

export default StatsDefault
