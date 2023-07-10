import React from 'react'
import FirstBanner from './FirstBanner';
import SecondBanner from './SecondBanner';
import ThirdBanner from './ThirdBanner';
import FourBanner from './FourBanner';
import Fitness from '../common/fitness/Fitness';
import JoinClub from '../common/joinclub/JoinClub';
const FirstTimerAsmbel = () => {
  return (
    <div>
  <FirstBanner/>
  <SecondBanner/>
  <ThirdBanner/>
  <JoinClub/>
  <FourBanner/>
  <Fitness/>
    </div>
  )
}

export default FirstTimerAsmbel