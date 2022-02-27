import React from 'react'
import GmaeSection from './GameSection'
import GmaeSection2 from './GameSection2'
import GameSection3 from './GameSection3'
import "./ScetionsCombine.css"

function SectionCombined() {
  return (
    <div className='combined'>
        <GmaeSection />
        <GmaeSection2 />
        <GameSection3 />
    </div>
  )
}

export default SectionCombined