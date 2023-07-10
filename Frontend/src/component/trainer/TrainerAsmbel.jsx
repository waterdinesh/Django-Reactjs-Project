import React from 'react'
import TopHero from './TopHero';
import Teacher from './Teacher';
import WantWork from './Wantwork';
import Fitness from '../common/fitness/Fitness';
import TimerHeart from '../common/timerheart/TimerHeart'

const TrainerAsmbel = () => {
  return (
    <div>
        <TopHero/>
        <Teacher/>
        <WantWork/>
        <Fitness/>
        <TimerHeart/>
    </div>
  )
}

export default TrainerAsmbel